import * as THREE from 'three';
import Lenis from '../vendor/lenis.mjs';
import { Pipeline } from './gfx/pipeline.js';
import { Cosmos } from './gfx/cosmos.js';
import { Station, makeEnvMap } from './scene/station.js';
import { Planets } from './scene/planets.js';
import { TitleParticles } from './scene/title.js';
import { Gallery } from './scene/gallery.js';
import { Belt } from './scene/belt.js';
import { Motes } from './scene/motes.js';
import { Comets } from './scene/comets.js';
import { sampleCamera, PLANETS, PLANET_T, smooth, win } from './scene/world.js';
import { AudioEngine } from './audio.js';
import { I18n } from './i18n.js';
import { Cursor, scramble, resetScrambleCache, toast, konami } from './ui.js';
import { WORKS, PLANET_INFO } from './content.js';
import { makeArt } from './artgen.js';
import { createAnalytics, setTrackingEnabled, trackingEnabled } from './analytics.js';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const html = document.documentElement;
const reduced = html.classList.contains('reduced-motion');
const touch = html.classList.contains('touch');
const clamp = THREE.MathUtils.clamp;
const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));
const sleep = ms => new Promise(r => setTimeout(r, ms));

const i18n = new I18n();
const audio = new AudioEngine();
const stats = createAnalytics({ site_lang: i18n.lang, webgl: html.classList.contains('webgl') ? 1 : 0 });
i18n.onChange(l => { stats.set('site_lang', l); stats.event('lang', l); });
setupPrivacy();

// ═══════════════ общий DOM (работает и без WebGL) ═══════════════
buildWorksList();
setupForm();
setupLangButton();
setupSoundButton();
buildClockTicks();
['touchend', 'pointerup'].forEach(ev => document.addEventListener(ev, () => {
  if (audio.on && audio.ctx && audio.ctx.state !== 'running') audio.unlockMobile();
}, { passive: true }));
document.addEventListener('click', e => { if (e.target.closest('a[data-magnetic], .nav-links a, .ft-social a')) audio.click(); });

if (!html.classList.contains('webgl')) {
  html.classList.remove('is-loading');
} else {
  boot().catch(err => {
    console.error(err);
    html.classList.remove('webgl', 'is-loading');
    html.classList.add('no-webgl');
  });
}

function buildWorksList() {
  const ul = $('#works-list');
  ul.innerHTML = '';
  WORKS.forEach((w, i) => {
    const li = document.createElement('li');
    const t = w[i18n.lang];
    li.innerHTML = `<button class="card3d" data-work="${i}" aria-label="${t.t}">
      <div class="c3-img"><img alt="${t.t}" src="${makeArt(w.art, w.pal, i + 1, 640, 400)}"></div>
      <div class="c3-row"><span class="c3-idx">${String(i + 1).padStart(2, '0')}</span><span class="c3-idx">${w.year}</span></div>
      <div class="c3-title">${t.t}</div><div class="c3-tags">${t.tags}</div></button>`;
    li.querySelector('button').addEventListener('click', e => openWork(i, e.currentTarget.querySelector('img')));
    ul.appendChild(li);
  });
}

// уведомление о статистике в футере с кнопкой «отключить»
function setupPrivacy() {
  const btn = $('#btn-track');
  if (!btn) return;
  const sync = () => {
    const on = trackingEnabled();
    btn.textContent = on ? i18n.d.trackOff : i18n.d.trackOn;
    btn.setAttribute('aria-pressed', String(!on));
    $('#track-state').textContent = on ? '' : i18n.d.trackDisabled;
  };
  btn.addEventListener('click', () => {
    const on = !trackingEnabled();
    setTrackingEnabled(on);
    if (!on) stats.stop();
    sync();
  });
  i18n.onChange(sync);
  sync();
}

// финальная подпись по ширине футера
function fitMark() {
  const m = $('.ft-mark');
  if (!m) return;
  m.style.fontSize = '100px';
  const spans = [...m.querySelectorAll('span')];
  const rs = spans.map(s => s.getBoundingClientRect());
  const w = innerWidth > 768 ? rs[rs.length - 1].right - rs[0].left : Math.max(...rs.map(r => r.width));
  const avail = m.clientWidth;
  if (w > 0 && avail > 0) m.style.fontSize = `${Math.min(260, 100 * avail / w * .985).toFixed(1)}px`;
}
document.fonts?.ready.then(fitMark);
addEventListener('resize', fitMark);
fitMark();

function buildClockTicks() {
  const g = $('.cb-ticks');
  let s = '';
  for (let i = 0; i < 60; i++) {
    const a = i / 60 * Math.PI * 2, major = i % 5 === 0;
    const r1 = major ? 36 : 40, r2 = 44;
    s += `<line class="${major ? 'major' : ''}" x1="${50 + Math.sin(a) * r1}" y1="${50 - Math.cos(a) * r1}" x2="${50 + Math.sin(a) * r2}" y2="${50 - Math.cos(a) * r2}"/>`;
  }
  g.innerHTML = s;
}

function setupLangButton() {
  $('#btn-lang').addEventListener('click', () => { i18n.set(i18n.lang === 'ru' ? 'en' : 'ru'); audio.click(); });
  i18n.onChange(() => { buildWorksList(); resetScrambleCache(); });
}

function setupSoundButton() {
  const b = $('#btn-sound');
  const sync = () => {
    b.classList.toggle('on', audio.on);
    b.setAttribute('aria-pressed', String(audio.on));
    b.querySelector('.sound-txt').textContent = audio.on ? i18n.d.soundOn : i18n.d.soundOff;
  };
  b.addEventListener('click', () => { audio.setOn(!audio.on); sync(); audio.click(); stats.event('sound', audio.on ? 'on' : 'off'); });
  i18n.onChange(sync);
  audio.onSync = sync;
}

// ═══════════════ форма-терминал ═══════════════
const fx = { waveStart: -1, morse: 0, morseTarget: 0, handAngle: 0, pluck: -99 };
function setupForm() {
  const form = $('#terminal');
  const rows = $$('.term-row');
  const status = $('#term-status');
  const hand = $('#cb-hand');
  const setHand = a => { fx.handAngle = a; hand.style.transform = `rotate(${a}deg)`; };
  // секундная стрелка тикает сама
  setInterval(() => { if (!document.hidden) setHand(fx.handAngle + 6); }, 1000);
  const syncEmpty = () => rows.forEach(r => r.classList.toggle('empty', !r.querySelector('input,textarea').value));
  syncEmpty();
  let morsePlayed = 0;
  let formStart = 0;
  form.addEventListener('focusin', () => { formStart ||= performance.now(); });
  form.addEventListener('input', e => {
    formStart ||= performance.now();
    if (e.target.name !== 'website') { fx.pluck = performance.now() / 1000; audio.pluck(); }
    syncEmpty();
    e.target.closest('.term-row')?.classList.remove('invalid');
    if (e.target.name === 'message' && /\bSTAY\b/i.test(e.target.value) && performance.now() - morsePlayed > 6000) {
      morsePlayed = performance.now();
      playMorse('STAY');
    }
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    setHand(fx.handAngle + 30);
    let ok = true;
    rows.forEach(r => {
      const f = r.querySelector('input,textarea');
      const bad = !f.value.trim() || (f.name === 'contact' && f.value.trim().length < 3);
      r.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) {
      status.textContent = i18n.d.invalid; status.className = 'err';
      audio.blip(300, 180, .14, .12);
      form.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 320 });
      return;
    }
    status.textContent = i18n.d.sending; status.className = '';
    fx.waveStart = performance.now() / 1000;
    audio.transmit();
    const data = { ...Object.fromEntries(new FormData(form)), elapsed: Math.round(performance.now() - (formStart || performance.now())), lang: i18n.lang, page: location.href.split('#')[0] };
    const endpoint = document.querySelector('meta[name="eh-form-endpoint"]')?.content;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (res.status === 429) { status.textContent = i18n.d.rate; status.className = 'err'; return; }
        if (!res.ok) throw new Error(res.status);
      } else {
        await sleep(1400); // демо-режим: эндпоинт не настроен
      }
      status.textContent = i18n.d.sent; status.className = 'ok';
      stats.event('form');
      form.reset(); syncEmpty(); formStart = 0;
    } catch (err) {
      status.textContent = i18n.d.fail; status.className = 'err';
    }
  });
}

const MORSE = { S: '...', T: '-', A: '.-', Y: '-.--' };
async function playMorse(word) {
  stats.event('stay');
  const out = $('#morse');
  out.textContent = '';
  const u = 150;
  for (const ch of word) {
    for (const sym of MORSE[ch]) {
      const dur = sym === '.' ? u : u * 3;
      fx.morseTarget = 1; audio.morseTone(dur / 1000);
      out.textContent += sym === '.' ? '·' : '−';
      await sleep(dur);
      fx.morseTarget = 0;
      await sleep(u);
    }
    out.textContent += '  ';
    await sleep(u * 2);
  }
  out.textContent += ' — ' + i18n.d.stay;
}

// ═══════════════ модалка работы (FLIP) ═══════════════
let lenis = null;
let modalOpen = false;
function openWork(i, fromImg) {
  stats.event('work', WORKS[i].en.t);
  const w = WORKS[i], t = w[i18n.lang];
  const m = $('#modal'), img = $('#md-img');
  img.src = makeArt(w.art, w.pal, i + 1, 1600, 1000);
  img.alt = t.t;
  $('#md-idx').textContent = `${String(i + 1).padStart(2, '0')} / ${String(WORKS.length).padStart(2, '0')}`;
  $('#md-title').textContent = t.t;
  $('#md-text').textContent = t.d;
  $('#md-meta').innerHTML = `<dt>YEAR</dt><dd>${w.year}</dd><dt>ROLE</dt><dd>${t.role}</dd><dt>TAGS</dt><dd>${t.tags}</dd>`;
  m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
  modalOpen = true; lenis?.stop();
  audio.click(); audio.whoosh();
  const first = fromImg?.getBoundingClientRect();
  img.style.transition = 'none';
  img.style.transform = '';
  const last = img.getBoundingClientRect();
  if (first && first.width > 4 && !reduced) {
    img.style.transform = `translate(${first.left - last.left}px, ${first.top - last.top}px) scale(${first.width / last.width}, ${first.height / last.height})`;
  } else {
    img.style.transform = 'scale(.92)'; img.style.opacity = '0';
  }
  img.getBoundingClientRect();
  img.style.transition = 'transform 1s cubic-bezier(.16,1,.3,1), opacity .6s ease';
  img.style.transform = ''; img.style.opacity = '1';
  $('#md-close').focus({ preventScroll: true });
}
function closeWork() {
  if (!modalOpen) return;
  const m = $('#modal');
  m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
  modalOpen = false; lenis?.start();
  audio.click();
}
$('#md-close').addEventListener('click', closeWork);
$('#bh-hint').addEventListener('click', () => window.__ehGW?.());
$('.md-backdrop').addEventListener('click', closeWork);

// ═══════════════ 3D ═══════════════
async function boot() {
  const pre = startPreloader();
  pre.set(.08);

  const canvas = $('#gl');
  const pipe = new Pipeline(canvas);
  const renderer = pipe.renderer;
  const tierName = detectTier(renderer);
  stats.set('tier', tierName);
  const TIERS = {
    high:   { dpr: Math.min(devicePixelRatio, 2),    bg: .72, steps: 220, samples: 4, particles: 14000, rocks: 1800, dust: 7000 },
    medium: { dpr: Math.min(devicePixelRatio, 1.5),  bg: .56, steps: 150, samples: 2, particles: 9000, rocks: 1200, dust: 4500 },
    low:    { dpr: Math.min(devicePixelRatio, 1.25), bg: .42, steps: 90,  samples: 0, particles: 5200, rocks: 700, dust: 2500 },
  };
  const tier = { ...TIERS[tierName] };
  const tierMax = { ...tier };
  pipe.q = { dpr: tier.dpr, bg: tier.bg, samples: tier.samples };
  pipe.resize(innerWidth, innerHeight, true);
  pre.set(.18);
  await nextFrame();

  const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, .05, 600);
  const world = new THREE.Scene();
  const cosmos = new Cosmos(pipe);
  cosmos.bh.uniforms.uSteps.value = tier.steps;

  const envMap = makeEnvMap(renderer);
  const station = new Station(envMap);
  world.add(station.group);
  const sunLight = new THREE.DirectionalLight(0xffd2a0, 3.4);
  sunLight.position.set(0, 0, 0);
  sunLight.target = station.group;
  world.add(sunLight);
  world.add(new THREE.HemisphereLight(0x9fd8ff, 0x0a0604, .22));
  // холодный заполняющий свет со стороны камеры: корпус читается на фоне неба
  const fill = new THREE.DirectionalLight(0x8fb4ff, 1.15);
  fill.position.copy(station.group.position).add(new THREE.Vector3(22, 16, 26));
  fill.target = station.group;
  world.add(fill);
  const planets = new Planets();
  world.add(planets.group);
  const belt = new Belt(tier.rocks, tier.dust);
  world.add(belt.group);
  const motes = new Motes(tierName === 'low' ? 220 : 420);
  world.add(motes.points);
  const comets = new Comets(tierName === 'low' ? 1 : 2);
  world.add(comets.group);
  pre.set(.34);
  await nextFrame();

  const title = new TitleParticles(tier.particles);
  title.u.uDpr.value = pipe.q.dpr;
  const gallery = new Gallery($('#css3d'), (i, img) => openWork(i, img));
  i18n.onChange(l => gallery.setLang(l));
  if (i18n.lang !== 'ru') gallery.setLang(i18n.lang);
  pre.set(.5);

  // шрифты: заголовок из частиц должен совпасть с DOM
  await Promise.race([
    Promise.all([document.fonts.load('900 100px Unbounded'), document.fonts.load('400 14px "JetBrains Mono"'), document.fonts.ready]),
    sleep(3000),
  ]);
  pre.set(.62);
  await nextFrame();

  // прогрев/компиляция шейдеров
  const cam = { pos: new THREE.Vector3(), tgt: new THREE.Vector3(), fov: 42, roll: 0 };
  sampleCamera(0, cam);
  camera.position.copy(cam.pos); camera.lookAt(cam.tgt); camera.updateMatrixWorld(); camera.updateProjectionMatrix();
  cosmos.syncCamera(camera);
  const compile = [cosmos.bh, cosmos.worm, cosmos.tunnel, cosmos.tess];
  for (const [k, m] of compile.entries()) {
    pipe.fs(m, pipe.bgRT);
    await nextFrame();
    pre.set(.62 + (k + 1) * .07);
  }
  renderer.compile(world, camera);
  planets.group.visible = true;
  pipe.beginScene(); pipe.renderScene(world, camera); pipe.post(0);
  await nextFrame();
  pre.set(1);

  // ── скролл ─────────────────────────────────────────────
  lenis = new Lenis({ lerp: reduced ? 1 : .075, smoothWheel: !reduced, wheelMultiplier: .9, touchMultiplier: 1.4 });
  lenis.stop();
  window.scrollTo(0, 0);
  const sections = $$('.scene');
  let M = [];
  const measure = () => { M = sections.map(s => ({ top: s.offsetTop, h: s.offsetHeight })); };
  measure();
  const tFromY = y => {
    const vh = innerHeight;
    for (let i = M.length - 1; i >= 0; i--) {
      if (y >= M[i].top) {
        const h = i === M.length - 1 ? Math.max(1, M[i].h - vh) : M[i].h;
        return i + clamp((y - M[i].top) / h, 0, 1);
      }
    }
    return 0;
  };
  const yFromT = t => {
    const i = clamp(Math.floor(t), 0, M.length - 1), f = t - i;
    const h = i === M.length - 1 ? M[i].h - innerHeight : M[i].h;
    return M[i].top + f * h;
  };
  const GOTO = [0, 1.1, 2.07, 3.12, 4.18, 5.6];
  $$('[data-goto]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault();
    if (!html.classList.contains('launched')) return;
    closePlanet();
    const i = +el.dataset.goto;
    audio.click();
    lenis.scrollTo(yFromT(GOTO[i]), { duration: reduced ? .01 : clamp(Math.abs(GOTO[i] - S.T) * 1.1, 1.2, 4.5), easing: t => 1 - Math.pow(1 - t, 3) });
  }));

  // ── состояние ──────────────────────────────────────────
  const S = window.__ehState = {
    T: 0, camT: -0.2, time: 0, sim: 0, launched: false, launchAt: 0, introDone: false,
    mx: 0, my: 0, pmx: 0, pmy: 0, hyper: false, rewinding: false, vel: 0, lastT: 0,
  };
  const focus = { idx: -1, mix: 0, target: 0, ang: 0 };
  // гравитационная волна от чёрной дыры (клик/касание на первом экране)
  const gw = { t0: -99, x: .5, y: .5, used: false, hinted: false };
  window.__ehGW = () => gravWave();
  function gravWave() {
    if (S.time - gw.t0 < .9) return;
    $('#bh-hint').classList.remove('show');
    const c = bhScreen();
    gw.t0 = S.time; gw.x = c.x / innerWidth; gw.y = 1 - c.y / innerHeight; gw.used = true;
    audio.gwave(); stats.event('gwave');
    if (!touch && !orbit.hinted) { orbit.hinted = true; setTimeout(() => S.T < .06 && toast(i18n.d.orbitHint, 3800), 2600); }
  }
  // гравитационный курсор на первом экране: мышь (или палец) — маленькая масса
  const lens = { x: .5, y: .5, s: 0, touchOn: false, tx: 0, ty: 0 };
  if (touch) {
    const tp = e => { const t = e.touches[0]; if (t) { lens.tx = t.clientX; lens.ty = t.clientY; lens.touchOn = true; } };
    addEventListener('touchstart', e => { tp(e); lens.x = lens.tx / innerWidth; lens.y = 1 - lens.ty / innerHeight; }, { passive: true });
    addEventListener('touchmove', tp, { passive: true });
    addEventListener('touchend', () => { lens.touchOn = false; }, { passive: true });
  }
  // облёт чёрной дыры перетаскиванием на первом экране (мышь)
  const orbit = { yaw: 0, pitch: 0, ty: 0, tp: 0, drag: false, lx: 0, ly: 0, moved: 0, hinted: false };
  addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !S.introDone || S.T > .06 || modalOpen) return;
    if (e.target.closest('a, button, input, textarea, .nav, .minimap, form, .sheet, #modal')) return;
    orbit.drag = true; orbit.lx = e.clientX; orbit.ly = e.clientY; orbit.moved = 0;
  });
  addEventListener('pointermove', e => {
    if (!orbit.drag) return;
    const dx = e.clientX - orbit.lx, dy = e.clientY - orbit.ly;
    orbit.lx = e.clientX; orbit.ly = e.clientY; orbit.moved += Math.abs(dx) + Math.abs(dy);
    orbit.ty -= dx * .006;
    orbit.tp = clamp(orbit.tp + dy * .005, -.75, 1.25);
    html.classList.toggle('orbiting', orbit.moved > 8);
  }, { passive: true });
  addEventListener('pointerup', () => {
    if (orbit.drag && orbit.moved > 8) stats.event('orbit');
    orbit.drag = false; html.classList.remove('orbiting');
  });
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2(-9, -9);
  let hovered = { kind: null, key: null };

  addEventListener('pointermove', e => {
    S.mx = e.clientX / innerWidth * 2 - 1; S.my = e.clientY / innerHeight * 2 - 1;
    ndc.set(S.mx, -S.my);
  }, { passive: true });

  // гироскоп
  const onOrient = e => {
    if (e.gamma == null) return;
    S.mx = clamp(e.gamma / 30, -1, 1); S.my = clamp((e.beta - 45) / 30, -1, 1);
  };

  // ── клики по 3D ────────────────────────────────────────
  let downAt = null;
  addEventListener('pointerdown', e => { downAt = { x: e.clientX, y: e.clientY }; });
  addEventListener('pointerup', e => {
    if (!downAt || Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 8) return;
    if (!S.launched || modalOpen) return;
    if (e.target.closest('a, button, input, textarea, .card3d, .sheet, #modal, .nav, .minimap, form')) return;
    ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight * 2 - 1));
    const h = pick();
    if (h.kind === 'bh') gravWave();
    else if (h.kind === 'planet') openPlanet(h.key);
    else if (h.kind === 'module') {
      const map = { core: 0, hab: 1, dish: 2, solar: 3 };
      if (map[h.key] != null) { audio.click(); lenis.scrollTo(yFromT(1.12 + map[h.key] * .205 + .07), { duration: 1.4 }); }
      else toast(i18n.lang === 'ru' ? 'ШЛЮЗ ЗАКРЫТ · СТЫКОВКА НЕ ТРЕБУЕТСЯ' : 'DOCK SEALED · NO DOCKING REQUIRED');
    }
  });

  // экранный центр и радиус тени чёрной дыры
  function bhScreen() {
    const c = project(new THREE.Vector3(0, 0, 0));
    const dist = camera.position.length();
    const ang = Math.asin(Math.min(1, 2.6 / dist));
    c.r = Math.tan(ang) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * innerHeight / 2;
    return c;
  }
  function pick() {
    if (focus.target || modalOpen) return { kind: null };
    if (Math.abs(ndc.x) > 1 || Math.abs(ndc.y) > 1) return { kind: null };
    if (S.introDone && S.camT < .4) {
      const c = bhScreen();
      const mx = (ndc.x * .5 + .5) * innerWidth, my = (-ndc.y * .5 + .5) * innerHeight;
      if (c.front && Math.hypot(mx - c.x, my - c.y) < c.r * 1.35) return { kind: 'bh' };
    }
    ray.setFromCamera(ndc, camera);
    if (station.group.visible && S.camT > .8 && S.camT < 2.02) {
      const hit = ray.intersectObjects(station.pickables, false)[0];
      if (hit) return { kind: 'module', key: hit.object.userData.module };
    }
    if (planets.group.visible && S.camT > 1.97 && S.camT < 3.05) {
      const i = planets.pick(ray.ray);
      if (i >= 0) return { kind: 'planet', key: i };
    }
    return { kind: null };
  }

  // ── панель планеты ────────────────────────────────────
  const panel = $('#planet-panel');
  function fillPlanet(i) {
    const info = PLANET_INFO[i], t = info[i18n.lang];
    $('#pp-id').textContent = `${info.id} · ${String(i + 1).padStart(2, '0')}/${String(PLANET_INFO.length).padStart(2, '0')}`;
    $('#pp-title').textContent = t.t;
    $('#pp-text').textContent = t.d;
    $('#pp-gallery').innerHTML = info.arts.map((a, k) => `<img alt="" src="${makeArt(a, info.pal, 40 + i * 3 + k, k ? 640 : 960, k ? 480 : 540)}">`).join('');
    $('#pp-list').innerHTML = t.list.map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('');
    [...panel.children].forEach((c, k) => { c.classList.add('stagger'); c.style.transitionDelay = `${.15 + k * .06}s`; });
  }
  function openPlanet(i) {
    stats.event('planet', PLANET_INFO[i].id);
    if (focus.target && focus.idx === i) return;
    focus.idx = i; focus.target = 1; focus.ang = 0;
    fillPlanet(i);
    panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false');
    lenis.stop(); audio.click(); audio.whoosh();
    setTimeout(() => $('#pp-close').focus({ preventScroll: true }), 400);
  }
  function closePlanet() {
    if (!focus.target) return;
    focus.target = 0;
    panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true');
    if (!modalOpen) lenis.start();
    audio.click();
  }
  $('#pp-close').addEventListener('click', closePlanet);
  $('#pp-cta').addEventListener('click', e => { e.preventDefault(); closePlanet(); setTimeout(() => lenis.scrollTo(yFromT(5.6), { duration: 4 }), 300); });
  $$('[data-open-planet]').forEach(b => b.addEventListener('click', () => openPlanet(+b.dataset.openPlanet)));
  i18n.onChange(() => { if (focus.target) fillPlanet(focus.idx); });
  addEventListener('keydown', e => { if (e.key === 'Escape') { closeWork(); closePlanet(); } });

  // ── гиперскорость / перемотка ───────────────────────────
  konami(() => {
    stats.event('konami');
    S.hyper = !S.hyper;
    html.classList.toggle('hyper', S.hyper);
    lenis.options.wheelMultiplier = S.hyper ? 3 : .9;
    toast(S.hyper ? i18n.d.hyperOn : i18n.d.hyperOff);
    audio.whoosh();
  });
  $('#btn-earth').addEventListener('click', () => {
    if (S.rewinding) return;
    const dur = reduced ? 1.2 : 4.6;
    S.rewinding = true; html.classList.add('rewinding');
    closePlanet(); closeWork();
    audio.rewind(dur);
    stats.event('rewind');
    lenis.scrollTo(0, {
      duration: dur, lock: true, force: true,
      easing: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      onComplete: () => { S.rewinding = false; html.classList.remove('rewinding'); },
    });
  });

  // ── позиционирование HUD-панелей ───────────────────────
  const theses = $$('.thesis');
  const services = $$('.service');
  const svg = $('#leaders');
  const mkSvg = (tag, cls) => { const e = document.createElementNS('http://www.w3.org/2000/svg', tag); e.setAttribute('class', cls); svg.appendChild(e); return e; };
  const leaders = theses.map(() => ({ path: mkSvg('path', 'ld'), dot: mkSvg('circle', 'ld-dot'), ring: mkSvg('circle', 'ld-ring') }));
  const hoverLd = { path: mkSvg('path', 'ld'), dot: mkSvg('circle', 'ld-dot') };
  const label = $('#hover-label');
  const fades = [
    { el: $('#about .scene-head'), w: [.8, .9, 1.02, 1.09] },
    { el: $('#services .scene-head'), w: [1.96, 2.02, 2.1, 2.16] },
    { el: $('.worm-copy'), w: [2.98, 3.05, 3.28, 3.4] },
    { el: $('.worm-hud'), w: [3.0, 3.06, 3.5, 3.57] },
    { el: $('#works .scene-head'), w: [3.98, 4.05, 4.2, 4.28] },
    { el: $('.drag-hint'), w: [4.08, 4.14, 4.55, 4.62] },
    { el: $('.earth-clock'), w: [4.06, 4.14, 4.97, 5.02] },
    { el: $('.contact-wrap'), w: [5.0, 5.14, 9, 10] },
    ...theses.map((el, i) => ({ el, w: [1.12 + i * .205, 1.15 + i * .205, 1.28 + i * .205, 1.31 + i * .205], panel: true })),
    ...services.map((el, i) => ({ el, w: [PLANET_T[i] - .04, PLANET_T[i] - .012, PLANET_T[i] + .125, PLANET_T[i] + .15], panel: true })),
  ];
  fades.forEach(f => { f.op = -1; f.shown = false; f.x = null; f.y = null; });
  const heroCopy = $('.hero-copy');
  const heroTitle = $('#hero-title');
  const vtmp = new THREE.Vector3();
  const project = (v) => { vtmp.copy(v).project(camera); return { x: (vtmp.x * .5 + .5) * innerWidth, y: (-vtmp.y * .5 + .5) * innerHeight, front: vtmp.z < 1 }; };
  const mobile = () => innerWidth <= 768;

  function updateDom(dt) {
    const T = S.T;
    // hero
    const heroOp = 1 - smooth(.06, .3, T);
    heroCopy.style.opacity = heroOp.toFixed(3);
    heroCopy.style.transform = `translateY(${(-T * 60).toFixed(1)}px)`;
    heroCopy.style.visibility = heroOp < .01 ? 'hidden' : '';
    const titleOp = S.introDone ? 1 - smooth(.04, .16, T) : 0;
    heroTitle.style.opacity = titleOp.toFixed(3);

    for (const f of fades) {
      const op = win(T, ...f.w) * (focus.target ? 0 : 1);
      if (Math.abs(op - f.op) > .002) {
        f.el.style.opacity = op.toFixed(3);
        f.el.style.visibility = op < .01 ? 'hidden' : 'visible';
        if (f.panel) f.el.classList.toggle('vis', op > .01);
        f.op = op;
      }
      if (op > .05 && !f.shown) {
        f.shown = true;
        if (!reduced) f.el.querySelectorAll('[data-scramble], h3, .sv-id, .th-num').forEach(n => scramble(n, 800));
      } else if (op < .01) f.shown = false;
      if (!f.panel) {
        const o = (1 - op) * 18;
        f.el.style.translate = `0 ${o.toFixed(1)}px`;
      }
    }

    // тезисы, прикреплённые к модулям станции
    const bhScr = project(new THREE.Vector3(0, 0, 0));
    bhScr.r = Math.abs(project(new THREE.Vector3(0, 0, 0).addScaledVector(new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0), 12)).x - bhScr.x);
    const stScr = project(station.group.position);
    stScr.r = Math.abs(project(station.group.position.clone().addScaledVector(new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0), 5.5)).x - stScr.x);
    theses.forEach((el, i) => {
      const L = leaders[i];
      const f = fades.find(x => x.el === el);
      if (f.op < .01 || !station.group.visible) { L.path.style.opacity = 0; L.dot.style.opacity = 0; L.ring.style.opacity = 0; return; }
      station.anchorWorld(el.dataset.anchor, vtmp);
      const a = project(vtmp);
      const W = innerWidth, H = innerHeight;
      const pw = el.offsetWidth, ph = el.offsetHeight;
      let px, py, ex, ey;
      if (mobile()) {
        const r = el.getBoundingClientRect();
        ex = r.left + r.width * .5; ey = r.top;
        px = null;
      } else {
        // выбираем позицию, где панель меньше всего закрывает ЧД и станцию
        const cands = [
          [a.x + 120, a.y - ph * .5 - 60], [a.x - 120 - pw, a.y - ph * .5 - 60],
          [a.x + 70, a.y + 90], [a.x - 70 - pw, a.y + 90],
          [a.x + 70, a.y - ph - 110], [a.x - 70 - pw, a.y - ph - 110],
        ];
        const ov = (x, y, cx, cy, rx, ry) => Math.max(0, Math.min(x + pw, cx + rx) - Math.max(x, cx - rx)) * Math.max(0, Math.min(y + ph, cy + ry) - Math.max(y, cy - ry));
        const score = ([x, y]) => {
          const cx = clamp(x, 70, W - pw - 90), cy = clamp(y, 100, H - ph - 70);
          return ov(cx, cy, bhScr.x, bhScr.y, bhScr.r, bhScr.r * .55) * 1.6 + ov(cx, cy, stScr.x, stScr.y, stScr.r, stScr.r) + (Math.abs(cx - x) + Math.abs(cy - y)) * 40;
        };
        let best = f.cand ?? 0, bestS = score(cands[best]) * .8;
        cands.forEach((c, k) => { const sc = score(c); if (sc < bestS) { best = k; bestS = sc; } });
        f.cand = best;
        const right = best % 2 === 0;
        px = clamp(cands[best][0], 70, W - pw - 90); py = clamp(cands[best][1], 100, H - ph - 70);
        if (f.x == null) { f.x = px; f.y = py; }
        f.x += (px - f.x) * Math.min(1, dt * 5); f.y += (py - f.y) * Math.min(1, dt * 5);
        el.style.transform = `translate(${f.x.toFixed(1)}px, ${(f.y + (1 - f.op) * 14).toFixed(1)}px)`;
        ex = right ? f.x : f.x + pw; ey = clamp(a.y, f.y + 16, f.y + ph - 16);
      }
      const mx = a.x + (ex - a.x) * .45;
      L.path.setAttribute('d', `M${a.x.toFixed(1)},${a.y.toFixed(1)} L${mx.toFixed(1)},${ey.toFixed(1)} L${ex.toFixed(1)},${ey.toFixed(1)}`);
      L.path.style.opacity = f.op * (a.front ? 1 : 0);
      L.dot.setAttribute('cx', a.x); L.dot.setAttribute('cy', a.y); L.dot.setAttribute('r', 2.2); L.dot.style.opacity = f.op;
      const pr = 6 + (S.time * 1.2 % 1) * 14;
      L.ring.setAttribute('cx', a.x); L.ring.setAttribute('cy', a.y); L.ring.setAttribute('r', pr.toFixed(1));
      L.ring.style.opacity = f.op * (1 - (S.time * 1.2 % 1));
    });

    // панели услуг — с противоположной от планеты стороны
    services.forEach((el, i) => {
      const f = fades.find(x => x.el === el);
      if (f.op < .01 || mobile()) return;
      const a = project(PLANETS[i].pos);
      const W = innerWidth, H = innerHeight, pw = el.offsetWidth, ph = el.offsetHeight;
      const px = a.x < W * .5 ? W - pw - Math.max(90, W * .08) : Math.max(60, W * .07);
      const py = clamp(H - ph - Math.max(70, H * .1), 110, H - ph - 60);
      if (f.x == null) { f.x = px; f.y = py; }
      f.x += (px - f.x) * Math.min(1, dt * 3); f.y += (py - f.y) * Math.min(1, dt * 3);
      el.style.transform = `translate(${f.x.toFixed(1)}px, ${(f.y + (1 - f.op) * 16).toFixed(1)}px)`;
    });

    // подпись наведения
    if (hovered.kind && !touch) {
      let name = '', sub = '', anchor = null;
      if (hovered.kind === 'module') {
        name = station.labels[hovered.key][0]; sub = i18n.d.labels[hovered.key];
        anchor = project(station.anchorWorld(hovered.key, new THREE.Vector3()));
      } else if (hovered.kind === 'bh') {
        name = i18n.d.bhName; sub = i18n.d.bhHint;
        anchor = project(new THREE.Vector3(0, 0, 0));
      } else {
        name = PLANET_INFO[hovered.key].id; sub = `${PLANET_INFO[hovered.key][i18n.lang].t} · ${i18n.d.planetHint}`;
        anchor = project(PLANETS[hovered.key].pos);
      }
      label.querySelector('b').textContent = name;
      label.querySelector('span').textContent = sub;
      const lx = (S.mx * .5 + .5) * innerWidth + 26, ly = (S.my * .5 + .5) * innerHeight - 46;
      label.style.transform = `translate(${lx}px, ${ly}px)`;
      label.classList.add('show');
      hoverLd.path.setAttribute('d', `M${anchor.x},${anchor.y} L${lx},${ly + 18}`);
      hoverLd.path.style.opacity = .55; hoverLd.dot.setAttribute('cx', anchor.x); hoverLd.dot.setAttribute('cy', anchor.y); hoverLd.dot.setAttribute('r', 2.5); hoverLd.dot.style.opacity = 1;
    } else {
      label.classList.remove('show'); hoverLd.path.style.opacity = 0; hoverLd.dot.style.opacity = 0;
    }
  }

  // ── телеметрия, мини-карта ─────────────────────────────
  const mmBtns = $$('.minimap button');
  const navLinks = $$('.nav-links a');
  const SCN = ['SCN 00 · SUPERMASSIVE', 'SCN 01 · STATION L-7', 'SCN 02 · PLANETARY SYSTEM', 'SCN 03 · WORMHOLE', 'SCN 04 · EVENT HORIZON', 'SCN 05 · TESSERACT'];
  const tm = { dist: $('#tm-dist'), dil: $('#tm-dil'), vel: $('#tm-vel'), met: $('#tm-met'), tag: $('#scene-tag'), fill: $('#mm-fill'), ship: $('#mm-ship'), hd: $('#hero-dist'), wdt: $('#worm-dt'), ws: $('#worm-stress') };
  let lastHud = 0, lastScene = -1;
  const pad = (n, l = 2) => String(Math.floor(n)).padStart(l, '0');
  const footer = $('.footer');
  const ftMark = $('.ft-mark');
  // часы «на Земле прошло»: замедление времени у горизонта
  const earthEl = $('#earth-time');
  let earthShown = '';
  function earthTime(T) {
    if (T >= 4.95) return '∞';
    const years = Math.pow(10, (T - 4.08) * 4.6) * .35;  // от месяцев до тысячелетий
    const ru = i18n.lang === 'ru';
    const pl = (n, a, b, c) => { const m = n % 100, k = n % 10; return m > 10 && m < 20 ? c : k > 1 && k < 5 ? b : k === 1 ? a : c; };
    if (years < 1) { const d = Math.max(1, Math.round(years * 365)); return ru ? `${d} ${pl(d, 'день', 'дня', 'дней')}` : `${d} day${d > 1 ? 's' : ''}`; }
    const y = Math.floor(years), d = Math.floor((years - y) * 365);
    const ys = y.toLocaleString(ru ? 'ru-RU' : 'en-US');
    if (y >= 100) return ru ? `${ys} ${pl(y, 'год', 'года', 'лет')}` : `${ys} years`;
    return ru ? `${ys} ${pl(y, 'год', 'года', 'лет')} ${d} ${pl(d, 'день', 'дня', 'дней')}` : `${ys} yr ${d} d`;
  }
  function updateHud(st) {
    const T = S.T;
    if (T > 4.0 && T < 5.05) { const v = earthTime(S.camT); if (v !== earthShown) { earthShown = v; earthEl.textContent = v; } }
    const fr = footer.getBoundingClientRect();
    html.classList.toggle('at-footer', fr.top < innerHeight - 30);
    const ftp = clamp((innerHeight - fr.top) / fr.height, 0, 1);
    if (Math.abs(ftp - (S.ftp ?? -1)) > .004) { S.ftp = ftp; ftMark.style.setProperty('--ft', smooth(.55, 1, ftp).toFixed(3)); }
    const p = clamp(T / 5.85, 0, 1);
    tm.fill.style.transform = `scaleY(${p.toFixed(4)})`;
    tm.ship.style.top = `${(p * 100).toFixed(2)}%`;
    const sc = clamp(Math.floor(T + .03), 0, 5);
    if (sc !== lastScene) {
      lastScene = sc;
      mmBtns.forEach((b, i) => { b.classList.toggle('active', i === sc); b.classList.toggle('passed', i < sc); });
      navLinks.forEach(a => a.classList.toggle('active', +a.dataset.goto === sc || (sc === 3 && +a.dataset.goto === 2)));
      tm.tag.textContent = SCN[sc];
      stats.scene(sc);
      if (!reduced) scramble(tm.tag, 600);
    }
    if (S.time - lastHud < .1) return;
    lastHud = S.time;
    const r = camera.position.length();
    const inTess = st.tess > .5, inTunnel = st.tunnel > .5;
    tm.dist.textContent = inTess ? '∞ · 5D' : inTunnel ? '— — —' : `${(r * .046).toFixed(3)} AU · ${r.toFixed(2)} Rs`;
    tm.dil.textContent = inTess ? 'Δt = 0' : inTunnel ? 'UNDEFINED' : `×${(1 / Math.sqrt(Math.max(1e-4, 1 - 1 / r))).toFixed(5)}`;
    tm.vel.textContent = `${(Math.min(.99, S.vel * .35)).toFixed(3)} c${S.hyper ? ' · HYPER' : ''}`;
    const met = S.launched ? (performance.now() / 1000 - S.launchAt) : 0;
    tm.met.textContent = `${pad(met / 3600)}:${pad(met / 60 % 60)}:${pad(met % 60)}`;
    tm.hd.textContent = `${(r * .046).toFixed(1)} AU`;
    tm.wdt.textContent = st.tunnel > .1 ? 'UNDEFINED' : `${(1 + st.wormProg * 40).toFixed(2)} s`;
    tm.ws.textContent = `${pad(12 + st.wormProg * 80 + Math.random() * 3, 3)}%`;
    // часы замедления времени у планет
    $$('.dilation b').forEach(b => {
      const k = +b.dataset.dil;
      const local = met;
      const earth = local * k;
      const yrs = Math.floor(earth / 31557600), days = Math.floor(earth % 31557600 / 86400);
      b.textContent = `LOCAL ${pad(local / 3600)}:${pad(local / 60 % 60)}:${pad(local % 60)} · EARTH ${yrs}y ${pad(days, 3)}d ${pad(earth / 3600 % 24)}:${pad(earth / 60 % 60)}:${pad(earth % 60)}`;
    });
  }

  // ── качество: адаптивный регулятор ─────────────────────
  const gov = { acc: 0, n: 0, t: 0, ups: 0 };
  const noGov = new URLSearchParams(location.search).has('nogov');
  function governor(dt) {
    if (noGov || !S.launched || S.time - S.launchAt < 4) return;
    gov.acc += dt; gov.n++; gov.t += dt;
    if (gov.t < 2) return;
    const ms = gov.acc / gov.n * 1000;
    gov.acc = 0; gov.n = 0; gov.t = 0;
    const q = pipe.q;
    if (ms > 23) {
      if (q.bg > .34) { pipe.setQuality({ bg: +(q.bg - .08).toFixed(2) }); }
      else if (q.dpr > 1) { pipe.setQuality({ dpr: Math.max(1, q.dpr - .25) }); }
      cosmos.bh.uniforms.uSteps.value = Math.max(64, Math.round(cosmos.bh.uniforms.uSteps.value * .85));
      title.u.uDpr.value = pipe.q.dpr;
    } else if (ms < 12.5 && gov.ups < 3 && q.bg < tierMax.bg) {
      gov.ups++;
      pipe.setQuality({ bg: Math.min(tierMax.bg, +(q.bg + .06).toFixed(2)) });
      cosmos.bh.uniforms.uSteps.value = Math.min(tierMax.steps, Math.round(cosmos.bh.uniforms.uSteps.value * 1.12));
    }
  }

  // ── ресайз ─────────────────────────────────────────────
  let rebuildTitle = 0;
  let lastW = innerWidth, lastH = innerHeight;
  const onResize = () => {
    // телефон: адресная строка прячется при скролле — это не настоящий ресайз
    const onlyBar = touch && innerWidth === lastW && Math.abs(innerHeight - lastH) < 160;
    measure();
    if (onlyBar) return;
    lastW = innerWidth; lastH = innerHeight;
    pipe.resize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    gallery.resize(innerWidth, innerHeight);
    measure();
    clearTimeout(rebuildTitle);
    rebuildTitle = setTimeout(() => title.build(heroTitle), 200);
  };
  addEventListener('resize', onResize);
  i18n.onChange(() => setTimeout(() => title.build(heroTitle), 50));
  title.build(heroTitle);

  // ── пауза во вкладке в фоне ─────────────────────────────
  let raf = 0, last = performance.now();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; audio.suspend(true); }
    else { last = performance.now(); audio.suspend(false); if (!raf) raf = requestAnimationFrame(frame); }
  });

  // ── запуск ─────────────────────────────────────────────
  function launch(withSound) {
    if (S.launched) return;
    S.launched = true;
    S.launchAt = performance.now() / 1000;
    S.launchTime = S.time;
    if (withSound) { audio.setOn(true); audio.boom(); audio.onSync?.(); }
    stats.launch(withSound);
    if (window.DeviceOrientationEvent) {
      const req = DeviceOrientationEvent.requestPermission;
      if (typeof req === 'function') req().then(s => s === 'granted' && addEventListener('deviceorientation', onOrient)).catch(() => {});
      else if (touch) addEventListener('deviceorientation', onOrient);
    }
    const p = $('#preloader');
    p.classList.add('off');
    setTimeout(() => { p.classList.add('gone'); html.classList.remove('is-loading'); }, 2300);
    html.classList.add('launched');
    pre.stop();
  }
  $('#btn-launch').addEventListener('click', () => launch(true));
  $('#btn-quiet').addEventListener('click', () => launch(false));
  $('#preloader').addEventListener('pointerdown', e => {
    if (e.target.closest('#btn-quiet')) return;
    if (!audio.ctx) { audio.setOn(true); audio.onSync?.(); }
  });

  window.__eh = {
    launch, state: S, lenis: () => lenis, jump(T) { lenis.scrollTo(yFromT(T), { immediate: true, force: true }); S.camT = T; S.T = T; },
    audio, openPlanet, closePlanet, openWork, playMorse, comet: () => { comets.next = 0; }, quality: () => ({ tier: tierName, ...pipe.q, steps: cosmos.bh.uniforms.uSteps.value }),
  };
  if (new URLSearchParams(location.search).has('autostart')) launch(false);

  // ═══════════ кадр ═══════════
  const st = { bh: 1, worm: 0, tunnel: 0, tess: 0, wormProg: 0 };
  const shakeV = new THREE.Vector2();
  let introTitleDone = false;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(.05, Math.max(.001, (now - last) / 1000));
    last = now;
    S.time += dt;
    lenis.raf(now);

    const y = lenis.animatedScroll ?? scrollY;
    S.T = tFromY(y);
    const prevCam = S.camT;
    S.camT += (S.T - S.camT) * Math.min(1, dt * (reduced ? 20 : 7));
    S.vel += (Math.abs(S.camT - prevCam) / dt - S.vel) * Math.min(1, dt * 4);

    // интро
    const ti = S.launched ? S.time - S.launchTime : 0;
    const gwAge = S.time - gw.t0;
    const gwHit = gwAge > .5 && gwAge < 3.6 ? Math.exp(-(gwAge - .5) * 1.4) : 0;
    if (touch && S.introDone && !gw.used && !gw.hinted && ti > 9 && S.T < .05) { gw.hinted = true; toast(i18n.d.gwTouch, 3500); }
    // метка у горизонта: появляется после интро, пока волну не запустили
    const hintOn = !touch && S.introDone && !gw.used && ti > 6.5 && S.T < .05 && !reduced;
    const hintEl = $('#bh-hint');
    if (hintOn) {
      const c = bhScreen();
      hintEl.style.transform = `translate(${(c.x + c.r * 1.25).toFixed(0)}px, ${(c.y - c.r * 1.15).toFixed(0)}px)`;
    }
    if (hintOn !== hintEl.classList.contains('show')) hintEl.classList.toggle('show', hintOn);
    // свист при нырке сквозь пояс астероидов
    if ((S.prevCam ?? 0) < 1.985 !== S.camT < 1.985 && Math.abs(S.camT - 1.985) < .05) audio.whoosh();
    S.prevCam = S.camT;
    const arrive = reduced ? 1 : smooth(0, 5.2, ti);
    const introOffset = -.2 * (1 - (1 - Math.pow(1 - arrive, 3)));
    if (S.launched && !introTitleDone && ti > (reduced ? 1.2 : 4.6)) {
      introTitleDone = true; S.introDone = true;
      html.classList.add('title-ready', 'intro-done');
      lenis.start();
      $$('.hero-copy [data-scramble]').forEach(n => !reduced && scramble(n, 1100));
    }
    const horizonFreeze = smooth(4.06, 4.7, S.camT) * (1 - smooth(4.96, 5.02, S.camT));
    const timeScale = (S.hyper ? 5 : 1) * (1 - .93 * horizonFreeze) * (S.rewinding ? -3 : 1);
    S.sim += dt * timeScale;

    // камера по траектории
    const ct = S.camT + introOffset;
    sampleCamera(ct, cam);
    // облёт: вращаем камеру и цель вокруг ЧД; при скролле плавно возвращаемся
    if (S.T > .2 && !orbit.drag) { orbit.ty = 0; orbit.tp = 0; }
    orbit.yaw += (orbit.ty - orbit.yaw) * Math.min(1, dt * 4);
    orbit.pitch += (orbit.tp - orbit.pitch) * Math.min(1, dt * 4);
    const ow = 1 - smooth(.02, .16, S.camT);
    if (ow > 0 && (Math.abs(orbit.yaw) > 1e-4 || Math.abs(orbit.pitch) > 1e-4)) {
      const yaw = orbit.yaw * ow, pitch = orbit.pitch * ow;
      const rotP = v => {
        const r = Math.hypot(v.x, v.z), el = Math.atan2(v.y, r);
        const el2 = clamp(el + pitch, -1.35, 1.45), az = Math.atan2(v.x, v.z) + yaw, len = v.length();
        return v.set(Math.sin(az) * Math.cos(el2) * len, Math.sin(el2) * len, Math.cos(az) * Math.cos(el2) * len);
      };
      rotP(cam.pos); cam.tgt.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    }
    // фокус на планете
    focus.mix += (focus.target - focus.mix) * Math.min(1, dt * 2.0);
    if (focus.idx >= 0) {
      const P = PLANETS[focus.idx].pos, R = PLANETS[focus.idx].radius;
      focus.ang += dt * .1;
      const base = vtmp.copy(cam.pos).sub(P).setY(0).normalize();
      const ca = Math.cos(focus.ang), sa = Math.sin(focus.ang);
      const dir = new THREE.Vector3(base.x * ca - base.z * sa, .28, base.x * sa + base.z * ca).normalize();
      const opos = P.clone().addScaledVector(dir, R * (mobile() ? 4.4 : 3.5));
      const fwd = P.clone().sub(opos).normalize();
      const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
      const otgt = mobile() ? P.clone().add(new THREE.Vector3(0, -R * 1.05, 0)) : P.clone().addScaledVector(right, R * 1.05);
      const e = focus.mix * focus.mix * (3 - 2 * focus.mix);
      cam.pos.lerp(opos, e); cam.tgt.lerp(otgt, e); cam.fov += (40 - cam.fov) * e; cam.roll *= 1 - e;
      if (focus.target === 0 && focus.mix < .002) focus.idx = -1;
    }
    camera.position.copy(cam.pos);
    camera.up.set(0, 1, 0);
    camera.lookAt(cam.tgt);
    // параллакс за курсором / гироскопом: ±3°
    S.pmx += (S.mx - S.pmx) * Math.min(1, dt * 2.5);
    S.pmy += (S.my - S.pmy) * Math.min(1, dt * 2.5);
    const par = reduced ? .3 : 1;
    camera.rotateY(-S.pmx * .052 * par);
    camera.rotateX(-S.pmy * .035 * par);
    camera.rotateZ(cam.roll);
    // медленное «дыхание» камеры
    if (!reduced) { camera.rotateY(Math.sin(S.time * .11) * .007); camera.rotateX(Math.sin(S.time * .083 + 1.3) * .005); }

    // веса слоёв
    st.worm = win(S.camT, 2.93, 3.05, 3.6, 3.66);
    st.wormProg = smooth(2.95, 3.62, S.camT);
    st.tunnel = win(S.camT, 3.53, 3.6, 3.89, 3.97);
    st.tess = smooth(4.99, 5.09, S.camT);
    st.bh = st.tunnel > .995 || st.tess > .995 ? 0 : 1;
    const tunnelProg = smooth(3.58, 3.95, S.camT);

    // тряска в туннеле
    const shake = reduced ? 0 : gwHit * .004 + (st.tunnel * (.0035 + tunnelProg * .004) + st.wormProg * st.worm * .0015) * (S.hyper ? 1.6 : 1);
    if (shake > 0) { shakeV.set((Math.random() - .5) * shake, (Math.random() - .5) * shake); camera.rotateZ((Math.random() - .5) * shake * 2); }
    else shakeV.set(0, 0);

    // портрет: расширяем угол, чтобы диск помещался по ширине
    const aspect = innerWidth / innerHeight;
    const widen = Math.max(1, 1.15 / aspect * .82);
    const vf = THREE.MathUtils.degToRad(cam.fov + (S.hyper ? 6 : 0));
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(vf / 2) * widen));
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    // объекты
    station.group.visible = S.camT > .42 && S.camT < 2.4;
    planets.group.visible = (S.camT > .95 && S.camT < 3.35) || focus.idx >= 0;
    if (station.group.visible) station.update(S.sim, dt * Math.abs(timeScale));
    if (planets.group.visible) planets.update(S.sim, dt * Math.abs(timeScale), hovered.kind === 'planet' ? hovered.key : -1);
    const beltReveal = Math.max(smooth(1.8, 1.99, S.camT), focus.idx >= 0 ? 1 : 0);
    belt.group.visible = beltReveal > .001 && (S.camT < 2.96 || focus.idx >= 0);
    if (belt.group.visible) belt.update(S.sim, camera, innerHeight * pipe.q.dpr * .012, beltReveal);

    // наведение
    if (!touch && S.launched) {
      const h = pick();
      if (h.kind !== hovered.kind || h.key !== hovered.key) {
        hovered = h;
        station.setHover(h.kind === 'module' ? h.key : null);
        cursor.target3d = !!h.kind;
        if (h.kind) audio.hover();
      }
    }

    // космос
    const bhu = cosmos.bh.uniforms;
    bhu.uTime.value = S.time;
    bhu.uDiskTime.value = S.sim * 1.1;
    bhu.uDiskBright.value = (S.launched ? smooth(.2, 2.8, ti) : .0) * (1 + st.tess * 0);
    bhu.uStarBright.value = S.launched ? .25 + .75 * smooth(0, 1.6, ti) : .25;
    bhu.uFade.value = smooth(4.84, 5.0, S.camT);
    bhu.uDiskBright.value *= 1 + gwHit * .9;
    cosmos.worm.uniforms.uTime.value = S.sim;
    const tu = cosmos.tunnel.uniforms;
    tu.uTime.value = S.sim; tu.uProg.value = tunnelProg; tu.uSpeed.value = reduced ? .12 : 1.4 + tunnelProg * 2.4;
    const te = cosmos.tess.uniforms;
    te.uTime.value = S.sim; te.uProg.value = smooth(5, 6, S.camT);
    te.uLook.value.set(S.pmx, S.pmy);
    const wt = fx.waveStart > 0 ? performance.now() / 1000 - fx.waveStart : -1;
    te.uWave.value = wt >= 0 && wt < 4 ? wt * 12 : -1;
    fx.morse += (fx.morseTarget - fx.morse) * Math.min(1, dt * 40);
    te.uMorse.value = fx.morse;
    te.uPluck.value = performance.now() / 1000 - fx.pluck;
    te.uFlicker.value = .96 + .04 * Math.sin(S.time * 23) * Math.sin(S.time * 7);
    cosmos.syncCamera(camera);
    cosmos.render(st);

    // сцена
    pipe.beginScene();
    motes.update(S.sim, camera, reduced ? 0 : st.tess, innerHeight * pipe.q.dpr * .02);
    comets.update(dt, camera, S.introDone && !reduced && S.camT < 2.9 && !focus.target);
    if (station.group.visible || planets.group.visible || belt.group.visible || motes.points.visible || comets.group.visible) pipe.renderScene(world, camera);

    // частицы заголовка
    const holeP = project(new THREE.Vector3(0, 0, 0));
    const tu2 = title.u;
    tu2.uRes.value.set(innerWidth, innerHeight);
    tu2.uHole.value.set(holeP.x, holeP.y);
    tu2.uIntro.value = reduced ? (ti > .3 ? 1 : 0) : clamp((ti - 1.0) / 3.6, 0, 1);
    tu2.uSuck.value = smooth(.05, .5, S.T);
    tu2.uTime.value = S.time;
    const titleDom = S.introDone ? 1 - smooth(.04, .16, S.T) : 0;
    const settleFade = S.introDone ? smooth(4.6, 5.6, ti) : 0;
    tu2.uAlpha.value = Math.max(1 - settleFade, 1 - titleDom);
    if (S.launched && S.T < .7) pipe.renderScene(title.scene, title.camera);

    // пост
    const F = pipe.final;
    F.uBloom.value = .85 + st.tunnel * .25 - st.tess * .2;
    F.uFlare.value = .55 + st.tunnel * .3;
    F.uCA.value = (reduced ? .15 : .3 + st.worm * st.wormProg * .6 + st.tunnel * (1.6 + tunnelProg * 1.8)) + (S.hyper ? .5 : 0) + (S.rewinding ? 2.2 : 0);
    F.uExposure.value = (S.launched ? .2 + .8 * smooth(0, 1.4, ti) : .2) * (1 - st.tess * .12);
    F.uShake.value.copy(shakeV);
    F.uSat.value = 1 - horizonFreeze * .35 + st.tess * .1;
    F.uScan.value = S.rewinding ? 1 : 0;
    // кино-полосы в кульминации (кротовая нора) и при падении за горизонт
    const lb = Math.max(win(S.camT, 3.28, 3.48, 3.9, 4.06), win(S.camT, 4.66, 4.82, 5.02, 5.12), focus.mix * .55);
    if (Math.abs(lb - (S.lb ?? -1)) > .003) { S.lb = lb; html.style.setProperty('--lb', lb.toFixed(3)); }
    // гравитационный курсор
    {
      const heroLens = S.introDone && !reduced && !modalOpen ? 1 - smooth(.03, .2, S.T) : 0;
      const on = touch ? lens.touchOn : cursor.active && !cursor.mag && !cursor.el.classList.contains('hidden');
      const px = touch ? lens.tx : cursor.x, py = touch ? lens.ty : cursor.y;
      const k = Math.min(1, dt * 22);
      lens.x += (px / innerWidth - lens.x) * k; lens.y += (1 - py / innerHeight - lens.y) * k;
      lens.s += ((on ? heroLens : 0) - lens.s) * Math.min(1, dt * (on ? 3 : 5));
      F.uLens.value.set(lens.x, lens.y, touch ? .056 : .044, lens.s < .002 ? 0 : lens.s);
      cursor.el.classList.toggle('lens', lens.s > .35);
    }
    F.uRipple.value.set(gw.x, gw.y, Math.max(0, gwAge - .5), gwAge > .5 && gwAge < 3.6 && !reduced ? 1 : 0);
    const exitFlash = win(S.camT, 3.88, 3.93, 3.96, 4.04);
    const tessFlash = win(S.camT, 4.97, 5.0, 5.03, 5.1);
    F.uFlash.value = reduced ? 0 : Math.max(exitFlash * .9, tessFlash * .75);
    F.uFlashColor.value.setRGB(...(tessFlash > exitFlash ? [1, .72, .38] : [.88, .94, 1]));
    F.uFade.value = 0;
    F.uZoom.value = reduced ? 0 : win(S.camT, 4.8, 4.94, 4.99, 5.03) * (S.hyper ? 1.4 : 1);
    pipe.post(S.time);

    // галерея
    gallery.update(dt * Math.abs(timeScale), camera, win(S.camT, 3.96, 4.06, 4.6, 4.72), smooth(4, 4.7, S.camT));

    // DOM
    if (S.launched) { updateDom(dt); updateHud(st); }
    cursor.update(dt);
    governor(dt);

    // звук
    const planetsMix = win(S.camT, 1.85, 2.0, 3.0, 3.2);
    audio.update({
      hero: 1 - smooth(.4, 1.0, S.camT), station: win(S.camT, .7, 1.0, 1.85, 2.1),
      worm: st.worm, wormProg: st.wormProg, tunnel: st.tunnel,
      organ: smooth(3.3, 3.75, S.camT) * (1 - smooth(4.0, 4.5, S.camT)),
      tess: st.tess, life: 1 - horizonFreeze * .7,
      horizonCut: 18000 - horizonFreeze * 17300,
      tick: st.tess * .7, hyper: S.hyper,
      // музыка молчит в туннеле, у горизонта замедляется вместе со временем
      music: (S.introDone ? 1 : 0) * (.55 + .25 * planetsMix) * (1 - st.tunnel) * (1 - .55 * st.worm * st.wormProg) * (1 - .35 * horizonFreeze),
      slow: Math.abs(timeScale) / (S.hyper ? 5 : 1),
      planets: PLANETS.map(p => {
        const d = camera.position.distanceTo(p.pos);
        const sp = project(p.pos);
        return { gain: planetsMix * clamp(1 - (d - p.radius * 2) / 22, 0, 1), pan: (sp.x / innerWidth) * 2 - 1 };
      }),
    });
  }
  const cursor = new Cursor(audio);
  raf = requestAnimationFrame(frame);
}

// ═══════════════ определение мощности GPU ═══════════════
function detectTier(r) {
  const gl = r.getContext();
  let name = '';
  try { const e = gl.getExtension('WEBGL_debug_renderer_info'); if (e) name = gl.getParameter(e.UNMASKED_RENDERER_WEBGL) || ''; } catch (e) {}
  const forced = new URLSearchParams(location.search).get('q');
  if (forced) return forced;
  const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (touch && Math.min(screen.width, screen.height) < 820);
  if (/SwiftShader|llvmpipe|softpipe|Software/i.test(name)) return 'low';
  if (mobile) return /Apple/i.test(name) ? 'medium' : 'low';
  if (/Intel|Mali|Adreno|PowerVR|Iris|UHD/i.test(name)) return 'medium';
  return 'high';
}

// ═══════════════ прелоадер ═══════════════
function startPreloader() {
  const num = $('#pl-num'), bar = $('#pl-bar'), log = $('#pl-log'), clock = $('#pl-clock');
  const actions = $('#pl-actions');
  let target = 0, shown = 0, logged = 0, running = true;
  const t0 = performance.now();
  const MIN = reduced ? 600 : 2600;
  // часы: 48 делений, стрелка прыгает раз в 1,25 с
  const ticksG = $('#pd-ticks');
  let tl = '';
  for (let i = 0; i < 48; i++) { const a = i / 48 * Math.PI * 2, r1 = i % 4 ? 41 : 37; tl += `<line x1="${50 + Math.sin(a) * r1}" y1="${50 - Math.cos(a) * r1}" x2="${50 + Math.sin(a) * 45}" y2="${50 - Math.cos(a) * 45}"/>`; }
  ticksG.innerHTML = tl;
  const tickEls = [...ticksG.children];
  let tickN = 0;
  const hand = $('#pd-hand'), pulse = $('#pd-pulse');
  const tickTimer = setInterval(() => {
    if (!running) { clearInterval(tickTimer); return; }
    tickN++;
    hand.style.transform = `rotate(${tickN * 7.5}deg)`;
    tickEls[tickN % 48].classList.add('on');
    pulse.classList.remove('go'); void pulse.getBoundingClientRect(); pulse.classList.add('go');
    if (audio.ready && audio.on) audio.tick(audio.ctx.currentTime + .01, .8);
  }, 1250);
  const loop = (now) => {
    if (!running) return;
    const timeCap = Math.min(1, (now - t0) / MIN);
    const goal = Math.min(target, timeCap);
    shown += (goal - shown) * .08 + (goal > shown ? .002 : 0);
    shown = Math.min(shown, goal);
    const v = Math.round(shown * 100);
    num.textContent = String(v).padStart(3, '0');
    bar.style.transform = `scaleX(${shown})`;
    const L = i18n.d.log;
    while (logged < L.length && shown >= (logged + 1) / (L.length + .5)) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${L[logged][0]} ${'.'.repeat(22 - L[logged][0].length)}</span><b class="${logged === 4 ? 'warn' : ''}">${L[logged][1]}</b>`;
      log.appendChild(li); logged++;
    }
    const rem = Math.max(0, (1 - shown) * 9.99);
    clock.textContent = `T− 00:00:${rem.toFixed(2).padStart(5, '0')}`;
    if (v >= 100) {
      actions.classList.add('ready');
      $('#btn-launch').disabled = false; $('#btn-quiet').disabled = false;
      clock.textContent = 'T− 00:00:00.00 · GO';
      if (!actions.dataset.focused) { actions.dataset.focused = 1; $('#btn-launch').focus({ preventScroll: true }); }
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  return { set(v) { target = Math.max(target, v); }, stop() { running = false; } };
}
