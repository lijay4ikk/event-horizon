// Cloudflare Worker сайта EVENT HORIZON:
//   POST /        — заявка с формы → Telegram
//   POST /t       — сигналы статистики с сайта → база D1
//   POST /tg      — команды бота (/stats, /yesterday, /week)
//   GET  /admin/* — служебное: настройка бота, ручная сводка (по ключу ADMIN_KEY)
//   cron 06:00 UTC — ежедневная сводка в Telegram + удаление данных старше 90 дней
import { allowedOrigin, cors, json, safeEqual, localDay, shiftDay } from './util.js';
import { handleForm } from './form.js';
import { handleTrack } from './track.js';
import { handleWebhook, setupBot, sendMessage } from './telegram.js';
import { buildReport } from './report.js';

const RETENTION_DAYS = 90;

async function admin(request, env, url) {
  if (!env.ADMIN_KEY || !safeEqual(url.searchParams.get('key'), env.ADMIN_KEY)) return new Response('forbidden', { status: 403 });
  const action = url.pathname.slice('/admin/'.length);
  if (action === 'setup') return Response.json(await setupBot(env, url.origin));
  if (action === 'report') {
    const kind = url.searchParams.get('period') || 'yesterday';
    const text = await buildReport(env, kind);
    if (url.searchParams.has('dry')) return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    return Response.json({ sent: await sendMessage(env, text) });
  }
  return new Response('unknown', { status: 404 });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/tg' && request.method === 'POST') return handleWebhook(request, env, ctx);
    if (url.pathname.startsWith('/admin/') && request.method === 'GET') return admin(request, env, url);

    const origin = allowedOrigin(request, env);
    if (request.method === 'OPTIONS') {
      return origin ? new Response(null, { status: 204, headers: cors(origin) }) : new Response(null, { status: 403 });
    }
    if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405, origin);
    if (!origin) return json({ ok: false, error: 'origin' }, 403, null);

    if (url.pathname === '/t') return handleTrack(request, env, origin);
    if (url.pathname === '/' || url.pathname === '/form') return handleForm(request, env, origin);
    return json({ ok: false, error: 'not_found' }, 404, origin);
  },

  async scheduled(event, env, ctx) {
    const now = event.scheduledTime || Date.now();
    await sendMessage(env, await buildReport(env, 'yesterday', now));
    // по понедельникам — итоги недели
    const weekday = new Date(now + (Number(env.TZ_OFFSET_HOURS) || 3) * 3600e3).getUTCDay();
    if (weekday === 1) await sendMessage(env, await buildReport(env, 'week', now));
    if (env.DB) {
      const cutoff = shiftDay(localDay(now, env), -RETENTION_DAYS);
      await env.DB.batch([
        env.DB.prepare('DELETE FROM events WHERE day < ?1').bind(cutoff),
        env.DB.prepare('DELETE FROM sessions WHERE day < ?1').bind(cutoff),
      ]);
    }
  },
};
