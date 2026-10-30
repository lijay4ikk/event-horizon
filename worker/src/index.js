// Cloudflare Worker: принимает заявку с формы сайта и пересылает её в Telegram.
// Ключ бота (BOT_TOKEN) и ваш Telegram ID (CHAT_ID) хранятся как секреты Cloudflare
// и никогда не попадают в код сайта.

const MAX = { name: 80, contact: 120, message: 2000 };
const MIN_FILL_MS = 2500; // люди не заполняют форму быстрее — это почти всегда бот

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin') || '';
  const list = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  return list.includes(origin) ? origin : null;
}

function cors(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...(origin ? cors(origin) : {}) },
  });
}

// второй слой: счётчик в памяти экземпляра (на случай, если лимитер Cloudflare недоступен)
const hits = new Map();
function memLimit(ip, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter(t => now - t < windowMs);
  if (arr.length >= limit) { hits.set(ip, arr); return false; }
  arr.push(now); hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return true;
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

export default {
  async fetch(request, env) {
    const origin = allowedOrigin(request, env);

    if (request.method === 'OPTIONS') {
      return origin ? new Response(null, { status: 204, headers: cors(origin) }) : new Response(null, { status: 403 });
    }
    if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405, origin);
    if (!origin) return json({ ok: false, error: 'origin' }, 403, null);

    // не больше 5 заявок в минуту с одного IP
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    if (env.LIMITER) {
      const { success } = await env.LIMITER.limit({ key: ip });
      if (!success) return json({ ok: false, error: 'rate' }, 429, origin);
    }
    if (!memLimit(ip)) return json({ ok: false, error: 'rate' }, 429, origin);

    let data;
    try {
      if ((request.headers.get('Content-Length') | 0) > 16384) throw new Error('big');
      data = await request.json();
    } catch {
      return json({ ok: false, error: 'bad_json' }, 400, origin);
    }

    // ловушки для ботов: скрытое поле и слишком быстрое заполнение.
    // Боту отвечаем «ок», чтобы он не пытался подобрать обход.
    if (clean(data.website, 200) || Number(data.elapsed) < MIN_FILL_MS) {
      return json({ ok: true }, 200, origin);
    }

    const name = clean(data.name, MAX.name);
    const contact = clean(data.contact, MAX.contact);
    const message = clean(data.message, MAX.message);
    if (!name || contact.length < 3 || !message) return json({ ok: false, error: 'fields' }, 422, origin);

    if (!env.BOT_TOKEN || !env.CHAT_ID) return json({ ok: false, error: 'not_configured' }, 500, origin);

    const lang = clean(data.lang, 5) || '—';
    const page = clean(data.page, 300);
    const text = [
      '🛰 <b>Новая заявка · EVENT HORIZON</b>',
      '',
      `<b>Имя:</b> ${esc(name)}`,
      `<b>Связь:</b> ${esc(contact)}`,
      '',
      `<b>Сообщение:</b>`,
      esc(message),
      '',
      `<i>${esc(lang.toUpperCase())} · ${esc(request.cf?.country || '??')} · ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC</i>`,
      page ? `<i>${esc(page)}</i>` : '',
    ].filter((l, i, a) => !(l === '' && a[i - 1] === '')).join('\n');

    const tg = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true }),
    });
    if (!tg.ok) {
      console.error('telegram', tg.status, await tg.text());
      return json({ ok: false, error: 'telegram' }, 502, origin);
    }
    return json({ ok: true }, 200, origin);
  },
};
