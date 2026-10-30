// RU берётся прямо из разметки, EN хранится здесь.
const EN = {
  skip: 'Skip to content',
  launch: 'Begin the flight', launchSub: 'sound · headphones recommended', launchQuiet: 'enter without sound', plTick: '1 tick = 1.25 s',
  navAbout: 'Station', navServices: 'Planets', navWorks: 'Works', navContact: 'Contact',
  mm0: 'Horizon', mm1: 'Station', mm2: 'Planets', mm3: 'Wormhole', mm4: 'Event horizon', mm5: 'Tesseract',
  heroEyebrow: 'EVENT HORIZON · immersive worlds studio', heroTitle: 'Beyond the possible',
  heroLede: 'We build websites that feel like a flight. Scroll — the engines are already warm.', scroll: 'scroll',
  aboutEyebrow: 'orbital station L-7', aboutTitle: 'Station', aboutSub: 'A small crew in high orbit. Four principles behind every project we ship.',
  t1h: 'Physics, not scenery', t1p: 'We compute light, gravity and time in shaders instead of faking them with pictures. That is why our worlds feel alive.',
  t2h: 'A story, not pages', t2p: 'Every project has a setup, a climax and an ending. Scrolling works like film editing.',
  t3h: 'Sound is half the picture', t3p: 'We write our own sound design, from engine hum to a button click. Silence is an instrument too.',
  t4h: 'Fast on any orbit', t4p: '60 FPS on a laptop, adaptive quality on phones and a clean fallback without WebGL.',
  servEyebrow: 'a system of four worlds', servTitle: 'Planets',
  s1h: 'Immersive websites', s1p: 'WebGL launches and promo pages where scrolling becomes cinema. Shaders, 3D, sound and a solid 60 FPS.', s1d: '1 hour here = 7 years on Earth',
  s2h: 'Product design', s2p: 'Interfaces you want to touch: research, prototypes, design systems and state animation.', s2d: '1 day here = 3 weeks on Earth',
  s3h: 'Motion & 3D', s3p: 'Films, product renders, animated identities and real-time 3D for keynotes and social.', s3d: '1 minute here = 4 hours on Earth',
  s4h: 'Sound & creative tech', s4p: 'Sound design, generative music, AR and media installations — everything that doesn’t fit in a regular browser.', s4d: '1 second here = 1 day on Earth',
  more: 'Learn more',
  wormEyebrow: 'anomaly near IGNIS-e orbit', wormTitle: 'Fold the space',
  wormLede: 'Distance is an illusion. To reach the other side, fold the sheet in half and push a pencil through it.',
  worksEyebrow: 'time has almost stopped', worksTitle: 'Event horizon', worksSub: 'Selected work on the last stable orbit. Drag the spiral and click a card to open it.', drag: 'drag',
  contactEyebrow: 'tesseract · the fifth dimension', contactTitle: 'Get in touch',
  phName: 'what should we call you', phContact: 'email or @telegram', phMsg: 'tell us about the project…',
  termHint: 'some words carry weight here', send: 'send signal',
  earth: 'Return to Earth', rights: 'Every world built from scratch.', discuss: 'Discuss a project',
};

const DYN = {
  ru: {
    log: [['SYS CHECK', 'OK'], ['NAV ARRAY', 'OK'], ['GRAV LENS MODEL', 'CALIBRATED'], ['ACCRETION DISK', 'ONLINE'], ['TIME DILATION', '×61 320'], ['CREW', 'READY']],
    hyperOn: 'HYPERSPEED ENGAGED · ×5', hyperOff: 'HYPERSPEED OFF',
    sending: 'TRANSMITTING…', sent: 'SIGNAL RECEIVED · ОТВЕТИМ В ТЕЧЕНИЕ 24 Ч', invalid: 'ЗАПОЛНИТЕ ВСЕ ПОЛЯ', fail: 'НЕТ СВЯЗИ · НАПИШИТЕ НА ПОЧТУ',
    stay: 'S · T · A · Y', soundOn: 'SND ON', soundOff: 'SND OFF',
    labels: { core: 'ядро · реактор 4.2 ГВт', hab: 'жилой контур · 0.38 g', solar: 'панели · 42 кВт', dish: 'дальняя связь · 8.4 ГГц', dock: 'шлюз · свободен' },
    planetHint: 'клик — облёт',
  },
  en: {
    log: [['SYS CHECK', 'OK'], ['NAV ARRAY', 'OK'], ['GRAV LENS MODEL', 'CALIBRATED'], ['ACCRETION DISK', 'ONLINE'], ['TIME DILATION', '×61 320'], ['CREW', 'READY']],
    hyperOn: 'HYPERSPEED ENGAGED · ×5', hyperOff: 'HYPERSPEED OFF',
    sending: 'TRANSMITTING…', sent: 'SIGNAL RECEIVED · REPLY WITHIN 24 H', invalid: 'FILL IN ALL FIELDS', fail: 'NO UPLINK · PLEASE EMAIL US',
    stay: 'S · T · A · Y', soundOn: 'SND ON', soundOff: 'SND OFF',
    labels: { core: 'core · reactor 4.2 GW', hab: 'habitat ring · 0.38 g', solar: 'arrays · 42 kW', dish: 'deep-space comms · 8.4 GHz', dock: 'dock · vacant' },
    planetHint: 'click to orbit',
  },
};

export class I18n {
  constructor() {
    this.lang = 'ru';
    this.ru = {};
    this.listeners = [];
    document.querySelectorAll('[data-i18n]').forEach(el => { this.ru[el.dataset.i18n] = el.textContent; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { this.ru[el.dataset.i18nPh] = el.getAttribute('placeholder'); });
    const q = new URLSearchParams(location.search).get('lang');
    let stored = null;
    try { stored = localStorage.getItem('eh-lang-user'); } catch (e) {}
    const pref = q || stored || 'ru';
    if (pref === 'en') this.set('en', true);
  }
  get d() { return DYN[this.lang]; }
  onChange(fn) { this.listeners.push(fn); }
  set(lang, silent = false) {
    this.lang = lang;
    document.documentElement.lang = lang;
    const dict = lang === 'en' ? EN : this.ru;
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = dict[el.dataset.i18nPh]; if (v != null) el.setAttribute('placeholder', v); });
    document.querySelectorAll('#btn-lang span').forEach((s, i) => s.classList.toggle('on', (i === 0) === (lang === 'ru')));
    if (!silent) { try { localStorage.setItem('eh-lang-user', lang); } catch (e) {} }
    if (!silent) this.listeners.forEach(f => f(lang));
  }
}
