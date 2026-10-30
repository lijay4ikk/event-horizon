// Статистика посещений: сигналы уходят на свой сервер (Cloudflare Worker), без сторонних сервисов.
// Не собирается: IP (сервер превращает его в одноразовый суточный код), cookies, содержимое формы.
// Отключается: Do Not Track / Global Privacy Control, роботы, ссылка ?notrack, кнопка в футере.

const KEY_OFF = 'eh-notrack';
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} },
};

function endpoint() {
  const own = document.querySelector('meta[name="eh-stats-endpoint"]')?.content;
  if (own) return own;
  const form = document.querySelector('meta[name="eh-form-endpoint"]')?.content;
  return form ? form.replace(/\/+$/, '') + '/t' : '';
}

export function trackingAllowed() {
  const q = new URLSearchParams(location.search);
  if (q.has('notrack')) ls.set(KEY_OFF, '1');
  if (q.has('track')) ls.set(KEY_OFF, null);
  if (ls.get(KEY_OFF) === '1') return false;
  if (navigator.webdriver) return false;
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl) return false;
  if (location.protocol === 'file:') return false;
  return true;
}

export function setTrackingEnabled(on) { ls.set(KEY_OFF, on ? null : '1'); }
export function trackingEnabled() { return ls.get(KEY_OFF) !== '1'; }

export function createAnalytics(meta = {}) {
  const url = endpoint();
  let on = !!url && trackingAllowed();
  const noop = { event() {}, scene() {}, launch() {}, set() {}, stop() { on = false; }, get enabled() { return false; } };
  if (!on) return noop;

  let sid = null;
  try { sid = sessionStorage.getItem('eh-sid'); } catch {}
  if (!sid) {
    sid = (crypto.randomUUID?.() || (Date.now().toString(36) + Math.random().toString(36).slice(2) + '-0000'));
    try { sessionStorage.setItem('eh-sid', sid); } catch {}
  }

  const ref = document.referrer && !document.referrer.startsWith(location.origin) ? document.referrer : '';
  const q = new URLSearchParams(location.search);
  const info = {
    lang: navigator.language || '',
    ref,
    utm: q.get('utm_source') || q.get('ref') || '',
    screen: `${screen.width}x${screen.height}@${Math.round((devicePixelRatio || 1) * 10) / 10}`,
    ...meta,
  };
  const state = { max_scene: -1, launched: 0, sound: 0, active_ms: 0 };
  const sent = new Set();
  let queue = [];
  let dirty = true;
  let visibleSince = document.visibilityState === 'visible' ? performance.now() : 0;
  let activeAcc = 0;

  const activeNow = () => activeAcc + (visibleSince ? performance.now() - visibleSince : 0);

  function flush(beacon = false) {
    if (!on || (!dirty && !queue.length)) return;
    state.active_ms = Math.round(activeNow());
    const body = JSON.stringify({ sid, meta: info, state, events: queue.splice(0, 20) });
    dirty = queue.length > 0;
    // text/plain — «простой» запрос без предварительной проверки CORS
    if (beacon && navigator.sendBeacon) {
      try { if (navigator.sendBeacon(url, new Blob([body], { type: 'text/plain' }))) return; } catch {}
    }
    fetch(url, { method: 'POST', body, headers: { 'Content-Type': 'text/plain' }, keepalive: true, mode: 'cors', credentials: 'omit' }).catch(() => {});
  }

  let timer = 0;
  const soon = (ms = 2500) => { dirty = true; clearTimeout(timer); timer = setTimeout(() => flush(), ms); };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      if (visibleSince) { activeAcc += performance.now() - visibleSince; visibleSince = 0; }
      dirty = true; flush(true);
    } else visibleSince = performance.now();
  });
  addEventListener('pagehide', () => { dirty = true; flush(true); });
  // пока вкладка открыта — раз в 30 с обновляем время на сайте
  setInterval(() => { if (document.visibilityState === 'visible') { dirty = true; flush(); } }, 30000);

  // первый сигнал — сразу после загрузки
  setTimeout(() => flush(), 800);

  return {
    get enabled() { return on; },
    event(n, v = '') {
      if (!on) return;
      const key = n + '|' + v;
      if (sent.has(key)) return;
      sent.add(key);
      queue.push({ n, v: String(v).slice(0, 60) });
      soon(1200);
    },
    scene(i) { if (on && i > state.max_scene) { state.max_scene = i; soon(); } },
    launch(sound) { if (!on) return; state.launched = 1; state.sound = sound ? 1 : 0; soon(600); },
    set(k, v) { if (!on) return; info[k] = v; soon(); },
    stop() { flush(true); on = false; },
  };
}
