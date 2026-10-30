// Заявка с формы сайта → сообщение в Telegram
import { json, esc, clean, memLimiter, rateOk } from './util.js';
import { sendMessage } from './telegram.js';

const MAX = { name: 80, contact: 120, message: 2000 };
const MIN_FILL_MS = 2500; // люди не заполняют форму быстрее — это почти всегда бот
const mem = memLimiter(5);

export async function handleForm(request, env, origin) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (!(await rateOk(env.LIMITER, mem, ip))) return json({ ok: false, error: 'rate' }, 429, origin);

  let data;
  try {
    if ((request.headers.get('Content-Length') | 0) > 16384) throw new Error('big');
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400, origin);
  }

  // ловушки для ботов: скрытое поле и слишком быстрое заполнение.
  // Боту отвечаем «ок», чтобы он не пытался подобрать обход.
  if (clean(data.website, 200) || Number(data.elapsed) < MIN_FILL_MS) return json({ ok: true }, 200, origin);

  const name = clean(data.name, MAX.name);
  const contact = clean(data.contact, MAX.contact);
  const message = clean(data.message, MAX.message);
  if (!name || contact.length < 3 || !message) return json({ ok: false, error: 'fields' }, 422, origin);
  if (!env.BOT_TOKEN || !env.CHAT_ID) return json({ ok: false, error: 'not_configured' }, 500, origin);

  const lang = clean(data.lang, 5) || '—';
  const page = clean(data.page, 300);
  const where = [request.cf?.city, request.cf?.country].filter(Boolean).join(', ') || '??';
  const text = [
    '🛰 <b>Новая заявка · EVENT HORIZON</b>',
    '',
    `<b>Имя:</b> ${esc(name)}`,
    `<b>Связь:</b> ${esc(contact)}`,
    '',
    '<b>Сообщение:</b>',
    esc(message),
    '',
    `<i>${esc(lang.toUpperCase())} · ${esc(where)} · ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC</i>`,
    page ? `<i>${esc(page)}</i>` : '',
  ].filter((l, i, a) => !(l === '' && a[i - 1] === '')).join('\n');

  const ok = await sendMessage(env, text);
  return ok ? json({ ok: true }, 200, origin) : json({ ok: false, error: 'telegram' }, 502, origin);
}
