// Сводка статистики для Telegram
import { esc, localDay, shiftDay } from './util.js';

const SCENES = ['Горизонт', 'Станция', 'Планеты', 'Кротовая нора', 'Горизонт событий', 'Тессеракт'];
const MONTHS = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const DEVICES = { mobile: 'Телефон', desktop: 'Компьютер', tablet: 'Планшет' };

let regionNames = null;
try { regionNames = new Intl.DisplayNames(['ru'], { type: 'region' }); } catch {}

const flag = cc => (cc && /^[A-Z]{2}$/.test(cc) && cc !== 'XX' && cc !== 'T1')
  ? String.fromCodePoint(...[...cc].map(c => 127397 + c.charCodeAt(0))) : '🏳';
const country = cc => { try { return (cc && regionNames?.of(cc)) || cc || 'неизвестно'; } catch { return cc || 'неизвестно'; } };
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const fmtDay = d => { const [, m, dd] = d.split('-'); return `${+dd} ${MONTHS[+m - 1]}`; };
const fmtDur = ms => { const s = Math.round(ms / 1000); return s < 60 ? `${s} с` : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const bar = (v, max, w = 10) => { const n = max ? Math.round(v / max * w) : 0; return '▰'.repeat(n) + '▱'.repeat(w - n); };
const plural = (n, one, few, many) => {
  const a = Math.abs(n) % 100, b = a % 10;
  return a > 10 && a < 20 ? many : b > 1 && b < 5 ? few : b === 1 ? one : many;
};
const joinTop = (rows, fmt) => rows.map(fmt).join(' · ');

export function periodFor(kind, env, now = Date.now()) {
  const today = localDay(now, env);
  if (kind === 'today') return { from: today, to: today, title: 'сегодня', partial: true };
  if (kind === 'week') return { from: shiftDay(today, -7), to: shiftDay(today, -1), title: 'неделя' };
  if (kind === 'week-live') return { from: shiftDay(today, -6), to: today, title: '7 дней', partial: true };
  const y = shiftDay(today, -1);
  return { from: y, to: y, title: 'вчера' };
}

async function stats(db, from, to) {
  const W = 'WHERE day BETWEEN ?1 AND ?2';
  const q = sql => db.prepare(sql).bind(from, to);
  const res = await db.batch([
    q(`SELECT COUNT(*) s, COUNT(DISTINCT visitor) v, COALESCE(SUM(launched),0) l, COALESCE(SUM(sound),0) snd, COALESCE(SUM(webgl = 0),0) nw FROM sessions ${W}`),
    q(`SELECT ${SCENES.map((_, i) => `COALESCE(SUM(max_scene >= ${i}),0) f${i}`).join(', ')} FROM sessions ${W} AND launched = 1`),
    q(`SELECT active_ms FROM sessions ${W} AND launched = 1 ORDER BY active_ms LIMIT 5000`),
    q(`SELECT country, COUNT(DISTINCT visitor) c FROM sessions ${W} GROUP BY country ORDER BY c DESC LIMIT 6`),
    q(`SELECT city, country, COUNT(DISTINCT visitor) c FROM sessions ${W} AND city IS NOT NULL GROUP BY city, country ORDER BY c DESC LIMIT 5`),
    q(`SELECT device, COUNT(*) c FROM sessions ${W} GROUP BY device ORDER BY c DESC`),
    q(`SELECT browser, COUNT(*) c FROM sessions ${W} GROUP BY browser ORDER BY c DESC LIMIT 4`),
    q(`SELECT os, COUNT(*) c FROM sessions ${W} GROUP BY os ORDER BY c DESC LIMIT 4`),
    q(`SELECT COALESCE(NULLIF(ref, ''), '') r, COUNT(*) c FROM sessions ${W} GROUP BY r ORDER BY c DESC LIMIT 5`),
    q(`SELECT name, value, COUNT(*) c FROM events ${W} GROUP BY name, value ORDER BY c DESC`),
    q(`SELECT hour, COUNT(*) c FROM sessions ${W} GROUP BY hour ORDER BY c DESC LIMIT 1`),
    q(`SELECT COALESCE(site_lang, 'ru') sl, COUNT(*) c FROM sessions ${W} GROUP BY sl ORDER BY c DESC`),
    q(`SELECT day, COUNT(DISTINCT visitor) v FROM sessions ${W} GROUP BY day ORDER BY day`),
    q(`SELECT tier, COUNT(*) c FROM sessions ${W} AND tier IS NOT NULL GROUP BY tier ORDER BY c DESC`),
  ]);
  const r = i => res[i].results || [];
  return {
    total: r(0)[0], funnel: r(1)[0], active: r(2).map(x => x.active_ms), countries: r(3), cities: r(4),
    devices: r(5), browsers: r(6), oses: r(7), refs: r(8), events: r(9), peak: r(10)[0], langs: r(11),
    daily: r(12), tiers: r(13),
  };
}

export async function buildReport(env, kind = 'yesterday', now = Date.now()) {
  const p = periodFor(kind, env, now);
  const days = Math.round((Date.parse(p.to) - Date.parse(p.from)) / 864e5) + 1;
  const range = p.from === p.to ? fmtDay(p.from) : `${fmtDay(p.from)} — ${fmtDay(p.to)}`;
  const head = `🛰 <b>EVENT HORIZON · ${p.title}</b>\n<i>${range}${p.partial ? ', данные на ' + new Date(now + (Number(env.TZ_OFFSET_HOURS) || 3) * 3600e3).toISOString().slice(11, 16) + ' МСК' : ''}</i>`;
  if (!env.DB) return `${head}\n\nБаза статистики не подключена.`;

  const st = await stats(env.DB, p.from, p.to);
  const T = st.total || { s: 0, v: 0, l: 0, snd: 0, nw: 0 };
  if (!T.s) {
    return `${head}\n\n🌑 За этот период на сайт никто не заходил.\nПоделитесь ссылкой — первый посетитель появится здесь:\n${esc(env.SITE_URL || '')}`;
  }

  // сравнение с предыдущим таким же периодом
  const prev = await env.DB.prepare('SELECT COUNT(DISTINCT visitor) v FROM sessions WHERE day BETWEEN ?1 AND ?2')
    .bind(shiftDay(p.from, -days), shiftDay(p.to, -days)).first();
  let delta = '';
  if (!p.partial && prev && prev.v) {
    const d = Math.round((T.v - prev.v) / prev.v * 100);
    delta = d === 0 ? ' · как в прошлый раз' : ` · ${d > 0 ? '▲' : '▼'} ${Math.abs(d)}% к прошлому периоду`;
  } else if (!p.partial && prev && !prev.v) delta = ' · раньше заходов не было';

  const L = [head, ''];
  L.push(`👥 <b>${T.v}</b> ${plural(T.v, 'посетитель', 'посетителя', 'посетителей')} · ${T.s} ${plural(T.s, 'визит', 'визита', 'визитов')}${delta}`);
  L.push(`🚀 Начали полёт: <b>${T.l}</b> (${pct(T.l, T.s)}%)${T.l ? ` · со звуком ${T.snd} (${pct(T.snd, T.l)}%)` : ''}`);
  if (T.nw) L.push(`🧱 Без WebGL (статичная версия): ${T.nw}`);

  if (days > 1 && st.daily.length > 1) {
    const max = Math.max(...st.daily.map(d => d.v));
    const spark = '▁▂▃▄▅▆▇█';
    const byDay = new Map(st.daily.map(d => [d.day, d.v]));
    let line = '';
    for (let i = 0; i < days; i++) { const v = byDay.get(shiftDay(p.from, i)) || 0; line += v ? spark[Math.min(7, Math.round(v / max * 7))] : ' '; }
    L.push(`📈 По дням: <code>${line}</code> (макс. ${max})`);
  }

  if (T.l) {
    const f = st.funnel || {};
    const base = f.f0 || T.l;
    L.push('', '<b>Глубина полёта</b>');
    const rows = SCENES.map((name, i) => {
      const v = f[`f${i}`] || 0;
      return `${name.padEnd(16, ' ')} ${bar(v, base)} ${String(pct(v, base)).padStart(3)}%  ${v}`;
    });
    L.push(`<code>${rows.join('\n')}</code>`);
    const act = st.active;
    if (act.length) {
      const med = act[Math.floor(act.length / 2)];
      const avg = act.reduce((a, b) => a + b, 0) / act.length;
      L.push(`⏱ Время на сайте: медиана <b>${fmtDur(med)}</b> · в среднем ${fmtDur(avg)}`);
    }
    const tess = (st.funnel || {}).f5 || 0;
    L.push(tess ? `🏁 Долетели до тессеракта: <b>${tess}</b> (${pct(tess, base)}%)` : '🏁 До тессеракта пока никто не долетел');
  }

  L.push('');
  if (st.countries.length) L.push(`🌍 ${joinTop(st.countries, r => `${flag(r.country)} ${esc(country(r.country))} ${r.c}`)}`);
  if (st.cities.length) L.push(`🏙 ${joinTop(st.cities, r => `${esc(r.city)} ${r.c}`)}`);
  if (st.devices.length) L.push(`📱 ${joinTop(st.devices, r => `${DEVICES[r.device] || r.device} ${pct(r.c, T.s)}%`)}`);
  if (st.browsers.length) L.push(`🧭 ${joinTop(st.browsers, r => `${esc(r.browser)} ${pct(r.c, T.s)}%`)}`);
  if (st.oses.length) L.push(`💻 ${joinTop(st.oses, r => `${esc(r.os)} ${pct(r.c, T.s)}%`)}`);
  if (st.refs.length) L.push(`🔗 Откуда: ${joinTop(st.refs, r => `${r.r ? esc(r.r) : 'прямые заходы'} ${r.c}`)}`);
  if (st.peak) L.push(`🕐 Пик: ${String(st.peak.hour).padStart(2, '0')}:00–${String((st.peak.hour + 1) % 24).padStart(2, '0')}:00 МСК`);

  // действия
  const ev = name => st.events.filter(e => e.name === name);
  const sum = name => ev(name).reduce((a, e) => a + e.c, 0);
  const acts = [];
  if (ev('planet').length) acts.push(`🪐 Планеты: ${joinTop(ev('planet').slice(0, 4), e => `${esc(e.value)} ${e.c}`)}`);
  if (ev('work').length) acts.push(`🖼 Работы: ${joinTop(ev('work').slice(0, 4), e => `${esc(e.value)} ${e.c}`)}`);
  const forms = sum('form');
  acts.push(forms ? `✉️ Отправили заявку: <b>${forms}</b>` : '✉️ Заявок не было');
  const eggs = [['konami', 'гиперскорость'], ['stay', 'STAY'], ['rewind', 'перемотка']].map(([n, t]) => [t, sum(n)]).filter(x => x[1]);
  if (eggs.length) acts.push(`🥚 Пасхалки: ${eggs.map(([t, c]) => `${t} ${c}`).join(' · ')}`);
  const sl = st.langs;
  if (sl.length > 1 || (sl[0] && sl[0].sl !== 'ru')) acts.push(`🌐 Язык сайта: ${joinTop(sl, r => `${String(r.sl).toUpperCase()} ${pct(r.c, T.s)}%`)}`);
  if (st.tiers.length) {
    const names = { high: 'высокое', medium: 'среднее', low: 'низкое' };
    acts.push(`🎛 Качество графики: ${joinTop(st.tiers, r => `${names[r.tier] || r.tier} ${pct(r.c, T.s)}%`)}`);
  }
  L.push('', '<b>Что делали</b>', ...acts);

  const out = L.join('\n');
  return out.length > 4000 ? out.slice(0, 3990) + '…' : out;
}
