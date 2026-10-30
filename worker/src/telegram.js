// Telegram: отправка сообщений и команды бота (/stats, /yesterday, /week)
import { sha256hex, safeEqual } from './util.js';
import { buildReport } from './report.js';

export async function sendMessage(env, text, chatId = env.CHAT_ID) {
  if (!env.BOT_TOKEN || !chatId) return false;
  const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true }),
  });
  if (!res.ok) console.error('telegram', res.status, await res.text());
  return res.ok;
}

async function api(env, method, body) {
  const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  return res.json();
}

export const webhookSecret = async env => (await sha256hex(`${env.ADMIN_KEY}:tg-webhook`)).slice(0, 48);

const HELP = `🛰 <b>EVENT HORIZON · статистика сайта</b>

/stats — сегодня (на текущий момент)
/yesterday — вчера
/week — последние 7 дней

Каждое утро в 09:00 МСК я сам присылаю сводку за вчера, по понедельникам — ещё и за неделю. Заявки с формы приходят сюда же сразу.`;

export async function handleWebhook(request, env, ctx) {
  const got = request.headers.get('X-Telegram-Bot-Api-Secret-Token');
  if (!env.ADMIN_KEY || !safeEqual(got, await webhookSecret(env))) return new Response('forbidden', { status: 403 });
  let upd;
  try { upd = await request.json(); } catch { return new Response('ok'); }
  const msg = upd.message;
  if (!msg || !msg.text) return new Response('ok');
  // отвечаем только владельцу
  if (String(msg.chat?.id) !== String(env.CHAT_ID)) return new Response('ok');

  const cmd = msg.text.trim().split(/[\s@]/)[0].toLowerCase();
  const map = { '/stats': 'today', '/today': 'today', '/yesterday': 'yesterday', '/week': 'week-live' };
  ctx.waitUntil((async () => {
    try {
      if (map[cmd]) await sendMessage(env, await buildReport(env, map[cmd]));
      else await sendMessage(env, HELP);
    } catch (e) {
      console.error('webhook', e);
      await sendMessage(env, '⚠️ Не получилось собрать статистику, попробуйте ещё раз через минуту.');
    }
  })());
  return new Response('ok');
}

export async function setupBot(env, origin) {
  const url = `${origin}/tg`;
  const hook = await api(env, 'setWebhook', { url, secret_token: await webhookSecret(env), allowed_updates: ['message'], drop_pending_updates: true });
  const cmds = await api(env, 'setMyCommands', {
    commands: [
      { command: 'stats', description: 'Статистика за сегодня' },
      { command: 'yesterday', description: 'Сводка за вчера' },
      { command: 'week', description: 'Последние 7 дней' },
      { command: 'help', description: 'Что умеет бот' },
    ],
  });
  return { webhook: hook.ok, commands: cmds.ok, url };
}
