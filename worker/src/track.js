// Приём сигналов статистики с сайта.
// IP не сохраняется: из него, браузера и даты получается одноразовый код посетителя на сутки.
import { clean, cors, memLimiter, rateOk, sha256hex, localDay, localHour, parseUA, BOT_UA } from './util.js';

const EVENTS = new Set(['planet', 'work', 'form', 'konami', 'stay', 'rewind', 'lang', 'sound', 'focus', 'gwave', 'orbit']);
const mem = memLimiter(120);
const int = (v, lo, hi, def) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : def; };

function refHost(ref) {
  if (!ref) return '';
  try { return new URL(ref).hostname.replace(/^www\./, '').slice(0, 60); } catch { return ''; }
}

export async function handleTrack(request, env, origin) {
  const done = new Response(null, { status: 204, headers: cors(origin) });
  const ua = request.headers.get('User-Agent') || '';
  if (!ua || BOT_UA.test(ua) || !env.DB) return done;

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (!(await rateOk(env.TRACK_LIMITER, mem, ip))) return done;

  let d;
  try {
    const raw = await request.text();
    if (raw.length > 8192) return done;
    d = JSON.parse(raw);
  } catch { return done; }

  const sid = clean(d.sid, 40);
  if (!/^[a-z0-9-]{8,40}$/i.test(sid)) return done;

  const now = Date.now();
  const day = localDay(now, env);
  const m = d.meta || {};
  const s = d.state || {};
  const { device, os, browser } = parseUA(ua);
  const visitor = (await sha256hex(`${ip}|${ua}|${day}|${env.ADMIN_KEY || 'eh'}`)).slice(0, 16);
  const cf = request.cf || {};

  const db = env.DB;
  const stmts = [
    db.prepare(`INSERT OR IGNORE INTO sessions
      (id, day, hour, ts, last, visitor, country, city, device, os, browser, lang, site_lang, ref, utm, screen, tier, webgl)
      VALUES (?1, ?2, ?3, ?4, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17)`).bind(
      sid, day, localHour(now, env), now, visitor,
      clean(cf.country, 2) || null, clean(cf.city, 60) || null,
      device, os, browser,
      clean(m.lang, 12) || null, clean(m.site_lang, 5) || null,
      refHost(clean(m.ref, 300)), clean(m.utm, 40) || null,
      clean(m.screen, 24) || null, clean(m.tier, 10) || null, m.webgl === 0 ? 0 : 1,
    ),
    db.prepare(`UPDATE sessions SET last = ?1,
        max_scene = MAX(max_scene, ?2), active_ms = MAX(active_ms, ?3),
        launched = MAX(launched, ?4), sound = MAX(sound, ?5),
        site_lang = COALESCE(?6, site_lang), tier = COALESCE(?7, tier)
      WHERE id = ?8`).bind(
      now, int(s.max_scene, -1, 5, -1), int(s.active_ms, 0, 6 * 3600e3, 0),
      s.launched ? 1 : 0, s.sound ? 1 : 0,
      clean(m.site_lang, 5) || null, clean(m.tier, 10) || null, sid,
    ),
  ];
  const evs = Array.isArray(d.events) ? d.events.slice(0, 20) : [];
  for (const e of evs) {
    const name = clean(e?.n, 12);
    if (!EVENTS.has(name)) continue;
    stmts.push(db.prepare('INSERT OR IGNORE INTO events (session_id, day, ts, name, value) VALUES (?1, ?2, ?3, ?4, ?5)')
      .bind(sid, day, now, name, clean(e.v, 60)));
  }
  try { await db.batch(stmts); } catch (err) { console.error('track', err); }
  return done;
}
