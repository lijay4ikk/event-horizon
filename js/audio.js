// Звук целиком синтезируется Web Audio API, сэмплов и чужой музыки нет.
// Слои: гул, орган, тиканье, ветер туннеля, гул станции, голоса планет (с панорамой), UI.
const midi = n => 440 * Math.pow(2, (n - 69) / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.on = false;
    this.ready = false;
    this.tickLevel = 0;
    this.nextTick = 0;
    this.layers = {};
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC({ latencyHint: 'interactive' });
    this.master = ctx.createGain(); this.master.gain.value = 0;
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -16; this.comp.ratio.value = 3.5; this.comp.attack.value = .01; this.comp.release.value = .4;
    this.horizon = ctx.createBiquadFilter(); this.horizon.type = 'lowpass'; this.horizon.frequency.value = 18000; this.horizon.Q.value = .5;
    this.bus = ctx.createGain(); this.bus.gain.value = 1;
    this.bus.connect(this.horizon); this.horizon.connect(this.master); this.master.connect(this.comp); this.comp.connect(ctx.destination);

    // реверберация: сгенерированный импульсный отклик ~5 с
    this.verb = ctx.createConvolver();
    this.verb.buffer = this.impulse(5.2, 2.4);
    this.verbIn = ctx.createGain(); this.verbIn.gain.value = 1;
    const verbOut = ctx.createGain(); verbOut.gain.value = .55;
    this.verbIn.connect(this.verb); this.verb.connect(verbOut); verbOut.connect(this.bus);

    this.noiseBuf = this.noise(4, 'white');
    this.brownBuf = this.noise(6, 'brown');

    this.buildDrone();
    this.buildOrgan();
    this.buildPads();
    this.buildWind();
    this.buildStation();
    this.buildPlanets();
    this.buildMusic();
    this.ui = ctx.createGain(); this.ui.gain.value = .5; this.ui.connect(this.bus); this.ui.connect(this.verbIn);
    this.ready = true;
    this.scheduler = setInterval(() => this.schedule(), 60);
  }

  impulse(sec, decay) {
    const ctx = this.ctx, len = ctx.sampleRate * sec | 0, b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay) * (i < 400 ? i / 400 : 1);
    }
    return b;
  }
  noise(sec, type) {
    const ctx = this.ctx, len = ctx.sampleRate * sec | 0, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (type === 'brown') { last = (last + .02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
    }
    return b;
  }
  src(buf, loop = true) { const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = loop; return s; }
  gain(v = 0, dest = this.bus) { const g = this.ctx.createGain(); g.gain.value = v; if (dest) g.connect(dest); return g; }
  lfo(freq, depth, target) {
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.frequency.value = freq; g.gain.value = depth; o.connect(g); g.connect(target); o.start(); return o;
  }

  buildDrone() {
    const ctx = this.ctx;
    const out = this.layers.drone = this.gain(0);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 170; lp.Q.value = 1.2;
    lp.connect(out);
    [[55, 'sawtooth', .22], [55.35, 'sawtooth', .22], [27.5, 'sine', .7], [82.4, 'triangle', .08]].forEach(([f, t, v]) => {
      const o = ctx.createOscillator(); o.type = t; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = v; o.connect(g); g.connect(lp); o.start();
    });
    this.lfo(.045, 70, lp.frequency);
    const rum = this.src(this.brownBuf), rlp = ctx.createBiquadFilter(); rlp.type = 'lowpass'; rlp.frequency.value = 110;
    const rg = ctx.createGain(); rg.gain.value = .9;
    rum.connect(rlp); rlp.connect(rg); rg.connect(out); rum.start();
    this.droneFilter = lp;
  }

  // орган: PeriodicWave с «регистрами» 16' 8' 4' 2⅔' 2' 1⅗' 1⅓' 1'
  organWave() {
    const real = new Float32Array(17), imag = new Float32Array(17);
    const bars = { 1: .9, 2: 1, 3: .55, 4: .62, 5: .2, 6: .32, 8: .28, 10: .08, 12: .1, 16: .06 };
    for (const k in bars) imag[k] = bars[k];
    return this.ctx.createPeriodicWave(real, imag);
  }
  buildOrgan() {
    const ctx = this.ctx;
    const out = this.layers.organ = this.gain(0, null);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 600; lp.Q.value = .4;
    out.connect(lp); lp.connect(this.bus); lp.connect(this.verbIn);
    this.organFilter = lp;
    const wave = this.organWave();
    // ре минор add9 с органным пунктом
    [38, 50, 57, 62, 65, 69, 76].forEach((n, i) => {
      for (const det of [-2.5, 2.5]) {
        const o = ctx.createOscillator(); o.setPeriodicWave(wave); o.frequency.value = midi(n); o.detune.value = det;
        const g = ctx.createGain(); g.gain.value = (i === 0 ? .16 : .09) / 2;
        o.connect(g); g.connect(out); o.start();
      }
    });
  }
  buildPads() {
    const ctx = this.ctx;
    const mk = (notes, type, vol, lpF) => {
      const out = this.gain(0, null);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = lpF;
      out.connect(lp); lp.connect(this.bus); lp.connect(this.verbIn);
      notes.forEach((n, i) => {
        const o = ctx.createOscillator(); o.type = type; o.frequency.value = midi(n); o.detune.value = (i % 2 ? 4 : -4);
        const g = ctx.createGain(); g.gain.value = vol;
        const trem = this.lfo(.07 + i * .031, vol * .5, g.gain);
        o.connect(g); g.connect(out); o.start();
      });
      return out;
    };
    this.layers.heroPad = mk([45, 52, 59, 64, 71], 'sine', .05, 1400);   // A sus2
    this.layers.tessPad = mk([48, 55, 64, 67, 72], 'triangle', .035, 1800); // C major add
  }
  buildWind() {
    const ctx = this.ctx;
    const out = this.layers.wind = this.gain(0);
    const n = this.src(this.noiseBuf);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 1.4;
    const bp2 = ctx.createBiquadFilter(); bp2.type = 'bandpass'; bp2.frequency.value = 1400; bp2.Q.value = 6;
    n.connect(bp); n.connect(bp2); bp.connect(out); bp2.connect(out); n.start();
    this.windFilter = bp; this.windFilter2 = bp2;
    out.connect(this.verbIn);
  }
  buildStation() {
    const ctx = this.ctx;
    const out = this.layers.station = this.gain(0);
    [60, 120, 180.5].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = [.35, .12, .05][i]; o.connect(g); g.connect(out); o.start();
    });
    const n = this.src(this.noiseBuf), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 380; bp.Q.value = 2;
    const g = ctx.createGain(); g.gain.value = .25; n.connect(bp); bp.connect(g); g.connect(out); n.start();
    // телеметрические «пики»
    this.beepOut = this.gain(.0, out); this.beepOut.gain.value = 1;
  }
  buildPlanets() {
    const ctx = this.ctx;
    this.planetVoices = [0, 1, 2, 3, 4].map(i => {
      const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      const g = ctx.createGain(); g.gain.value = 0;
      if (pan) { g.connect(pan); pan.connect(this.bus); } else g.connect(this.bus);
      g.connect(this.verbIn);
      if (i === 0) { // океан: прибой
        const n = this.src(this.brownBuf), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 600;
        const sw = ctx.createGain(); sw.gain.value = .6; this.lfo(.11, .55, sw.gain);
        n.connect(lp); lp.connect(sw); sw.connect(g); n.start();
      } else if (i === 1) { // лёд: стеклянные обертоны
        [1318.5, 1975.5, 2637].forEach((f, k) => {
          const o = ctx.createOscillator(); o.frequency.value = f; const og = ctx.createGain(); og.gain.value = .03;
          this.lfo(.3 + k * .17, .03, og.gain); o.connect(og); og.connect(g); o.start();
        });
      } else if (i === 2) { // пустыня: ветер
        const n = this.src(this.noiseBuf), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 3;
        this.lfo(.08, 500, bp.frequency);
        const ng = ctx.createGain(); ng.gain.value = .25; n.connect(bp); bp.connect(ng); ng.connect(g); n.start();
      } else if (i === 4) { // газовый гигант: медленный «дышащий» гул бурь
        [36.7, 55, 73.4].forEach((f, k) => {
          const o = ctx.createOscillator(); o.type = k ? 'sine' : 'triangle'; o.frequency.value = f;
          const og = ctx.createGain(); og.gain.value = [.12, .06, .04][k];
          this.lfo(.05 + k * .03, [.08, .04, .03][k], og.gain);
          o.connect(og); og.connect(g); o.start();
        });
        const n = this.src(this.brownBuf), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 240; bp.Q.value = 1.5;
        this.lfo(.04, 120, bp.frequency);
        const ng = ctx.createGain(); ng.gain.value = .5; n.connect(bp); bp.connect(ng); ng.connect(g); n.start();
      } else { // вулкан: низкий рокот
        const n = this.src(this.brownBuf), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 160;
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 41; const og = ctx.createGain(); og.gain.value = .08;
        const lp2 = ctx.createBiquadFilter(); lp2.type = 'lowpass'; lp2.frequency.value = 120;
        o.connect(og); og.connect(lp2); lp2.connect(g); o.start();
        n.connect(lp); lp.connect(g); n.start();
      }
      return { g, pan };
    });
  }

  // ── музыка: арпеджио «стеклянного пиано» в ритм часам (восьмая = полтика) ──
  buildMusic() {
    const ctx = this.ctx;
    this.music = this.gain(0, null);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200; lp.Q.value = .3;
    this.music.connect(lp); lp.connect(this.bus);
    const wet = ctx.createGain(); wet.gain.value = 1.4; lp.connect(wet); wet.connect(this.verbIn);
    this.musicFilter = lp;
    this.musicLevel = 0; this.musicSlow = 1; this.musicKey = 0;
    this.nextNote = 0; this.step = 0;
    // 0 — путь (ля минор), 1 — тессеракт (до мажор)
    this.PROG = [
      [[45, 57, 60, 64, 71], [41, 53, 57, 60, 64], [36, 52, 55, 60, 67], [43, 55, 59, 62, 69]],
      [[36, 55, 60, 64, 67], [41, 57, 60, 65, 69], [43, 55, 62, 67, 71], [36, 55, 64, 67, 72]],
    ];
    this.ARP = [1, 2, 3, 4, 3, 2, 3, 1];
  }
  note(t, n, vol, dur = 2.6) {
    const ctx = this.ctx, f = midi(n);
    const g = ctx.createGain();
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    [[1, .8], [2, .18], [4.01, .05]].forEach(([m, v]) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * m;
      const og = ctx.createGain(); og.gain.value = v; o.connect(og); og.connect(g); o.start(t); o.stop(t + dur + .05);
    });
    g.connect(this.music);
  }
  playStep(t) {
    const prog = this.PROG[this.musicKey];
    const chord = prog[Math.floor(this.step / 8) % prog.length];
    const i = this.step % 8;
    if (i === 0) this.note(t, chord[0], .3, 5.5);                       // бас на смене аккорда
    if (Math.random() > .14 || i === 0) this.note(t, chord[this.ARP[i]] + (i === 6 && Math.random() < .3 ? 12 : 0), .17 + (i === 0 ? .05 : 0));
    this.step++;
  }

  // ── тиканье: 1 тик = 1,25 с ─────────────────────────────────────
  schedule() {
    if (!this.ready) return;
    const ctx = this.ctx;
    if (this.nextTick < ctx.currentTime) this.nextTick = ctx.currentTime + .05;
    while (this.nextTick < ctx.currentTime + .2) {
      if (this.tickLevel > .02) this.tick(this.nextTick, this.tickLevel);
      this.nextTick += 1.25 / (this.hyper ? 2 : 1);
    }
    if (this.nextNote < ctx.currentTime) this.nextNote = ctx.currentTime + .05;
    while (this.nextNote < ctx.currentTime + .25) {
      if (this.musicLevel > .02) this.playStep(this.nextNote);
      this.nextNote += .625 / Math.max(this.musicSlow, .1) / (this.hyper ? 1.5 : 1);
    }
  }
  tick(t, level = 1) {
    const ctx = this.ctx;
    const n = this.src(this.noiseBuf, false);
    const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 4200; hp.Q.value = 2.5;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.55 * level, t + .002); g.gain.exponentialRampToValueAtTime(.0001, t + .045);
    n.connect(hp); hp.connect(g); g.connect(this.bus); g.connect(this.verbIn);
    n.start(t, Math.random() * 2, .06);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(2300, t); o.frequency.exponentialRampToValueAtTime(900, t + .03);
    const og = ctx.createGain(); og.gain.setValueAtTime(.18 * level, t); og.gain.exponentialRampToValueAtTime(.0001, t + .05);
    o.connect(og); og.connect(this.bus); o.start(t); o.stop(t + .06);
  }

  blip(f1 = 2200, f2 = 1400, vol = .12, dur = .05) {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(f1, t); o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur * 1.6);
    o.connect(g); g.connect(this.ui); o.start(t); o.stop(t + dur * 2);
  }
  click() { this.blip(2400, 1300, .1, .04); }
  hover() { this.blip(3200, 2800, .025, .025); }

  boom() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(28, t + 2.5);
    const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.9, t + .05); g.gain.exponentialRampToValueAtTime(.0001, t + 3);
    o.connect(g); g.connect(this.bus); g.connect(this.verbIn); o.start(t); o.stop(t + 3.1);
    const n = this.src(this.noiseBuf, false), lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(5000, t); lp.frequency.exponentialRampToValueAtTime(80, t + 1.8);
    const ng = ctx.createGain(); ng.gain.setValueAtTime(.4, t); ng.gain.exponentialRampToValueAtTime(.0001, t + 2);
    n.connect(lp); lp.connect(ng); ng.connect(this.bus); ng.connect(this.verbIn); n.start(t); n.stop(t + 2.1);
  }

  // гравитационная волна: «чирп» с нарастающей частотой и низкий удар
  gwave() {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(34, t); o.frequency.exponentialRampToValueAtTime(260, t + .55);
    const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.32, t + .5); g.gain.exponentialRampToValueAtTime(.0001, t + .62);
    o.connect(g); g.connect(this.bus); g.connect(this.verbIn); o.start(t); o.stop(t + .7);
    const b = ctx.createOscillator(); b.frequency.setValueAtTime(70, t + .55); b.frequency.exponentialRampToValueAtTime(24, t + 2.6);
    const bg = ctx.createGain(); bg.gain.setValueAtTime(.0001, t + .55); bg.gain.exponentialRampToValueAtTime(.85, t + .6); bg.gain.exponentialRampToValueAtTime(.0001, t + 3);
    b.connect(bg); bg.connect(this.bus); bg.connect(this.verbIn); b.start(t + .55); b.stop(t + 3.1);
  }

  // нота-«щипок» струны тессеракта (пентатоника в тональности фона)
  pluck() {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    if (t - (this.lastPluck || 0) < .055) return;
    this.lastPluck = t;
    const scale = [60, 62, 64, 67, 69, 72, 74, 76, 79, 81];
    const n = scale[(this.pluckI = ((this.pluckI || 0) + 1 + (Math.random() * 3 | 0)) % scale.length)];
    const f = 440 * Math.pow(2, (n - 69) / 12);
    const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.07, t + .006); g.gain.exponentialRampToValueAtTime(.0001, t + 1.6);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(4000, t); lp.frequency.exponentialRampToValueAtTime(700, t + 1.2);
    [[1, 'triangle', 1], [2, 'sine', .35], [3.01, 'sine', .12]].forEach(([m, type, v]) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f * m;
      const og = ctx.createGain(); og.gain.value = v; o.connect(og); og.connect(lp); o.start(t); o.stop(t + 1.7);
    });
    lp.connect(g); g.connect(this.ui); g.connect(this.verbIn);
  }

  transmit() {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const s = t + i * .32;
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(320, s); o.frequency.exponentialRampToValueAtTime(2600, s + .45);
      const g = ctx.createGain(); g.gain.setValueAtTime(.0001, s); g.gain.exponentialRampToValueAtTime(.12, s + .05); g.gain.exponentialRampToValueAtTime(.0001, s + .6);
      o.connect(g); g.connect(this.ui); o.start(s); o.stop(s + .65);
    }
  }
  morseTone(dur) {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.frequency.value = 660;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.12, t + .008);
    g.gain.setValueAtTime(.12, t + dur - .01); g.gain.linearRampToValueAtTime(0, t + dur);
    o.connect(g); g.connect(this.ui); o.start(t); o.stop(t + dur + .02);
  }
  rewind(dur) {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const n = this.src(this.noiseBuf), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 4;
    bp.frequency.setValueAtTime(300, t); bp.frequency.exponentialRampToValueAtTime(3800, t + dur * .8); bp.frequency.exponentialRampToValueAtTime(400, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.35, t + .3); g.gain.setValueAtTime(.35, t + dur - .4); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    n.connect(bp); bp.connect(g); g.connect(this.bus); n.start(t); n.stop(t + dur + .1);
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(880, t + dur);
    const og = ctx.createGain(); og.gain.setValueAtTime(.0001, t); og.gain.exponentialRampToValueAtTime(.05, t + .2); og.gain.exponentialRampToValueAtTime(.0001, t + dur);
    const lp = ctx.createBiquadFilter(); lp.frequency.value = 1200;
    o.connect(lp); lp.connect(og); og.connect(this.bus); o.start(t); o.stop(t + dur + .1);
  }
  whoosh() {
    if (!this.ready || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const n = this.src(this.noiseBuf, false), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.5;
    bp.frequency.setValueAtTime(200, t); bp.frequency.exponentialRampToValueAtTime(6000, t + 1.2);
    const g = ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.5, t + .5); g.gain.exponentialRampToValueAtTime(.0001, t + 1.4);
    n.connect(bp); bp.connect(g); g.connect(this.bus); g.connect(this.verbIn); n.start(t); n.stop(t + 1.5);
  }

  // iPhone: без этого Web Audio молчит в беззвучном режиме
  unlockMobile() {
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
    if (!this.silent) {
      const sr = 8000, n = sr / 2, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
      const w = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
      w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true);
      v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true);
      v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
      this.silent = new Audio(URL.createObjectURL(new Blob([buf], { type: 'audio/wav' })));
      this.silent.loop = true; this.silent.setAttribute('playsinline', '');
    }
    this.silent.play().catch(() => {});
    if (this.ctx) {
      if (this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
      // короткий пустой буфер «будит» звук на старых iOS
      const s = this.ctx.createBufferSource(); s.buffer = this.ctx.createBuffer(1, 1, 22050); s.connect(this.ctx.destination); s.start(0);
    }
  }

  setOn(on) {
    if (on) this.init();
    if (!this.ctx) return;
    this.on = on;
    if (on) this.unlockMobile(); else this.silent?.pause();
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(on ? .85 : 0, t, on ? .6 : .15);
  }
  suspend(s) { if (!this.ctx) return; if (s) { this.ctx.suspend(); this.silent?.pause(); } else if (this.on) { this.ctx.resume(); this.silent?.play().catch(() => {}); } }

  // Сведение слоёв по состоянию полёта
  update(s) {
    if (!this.ready || !this.on) return;
    const t = this.ctx.currentTime, k = .35;
    const set = (node, v, tc = k) => node.gain.setTargetAtTime(v, t, tc);
    set(this.layers.drone, (.32 + s.tunnel * .15) * (1 - s.tess * .7) * s.life);
    set(this.layers.heroPad, s.hero * .9 * s.life);
    set(this.layers.station, s.station * .38);
    set(this.layers.wind, s.worm * .55 + s.tunnel * .38);
    this.windFilter.frequency.setTargetAtTime(300 + s.wormProg * 2600, t, .2);
    this.windFilter2.frequency.setTargetAtTime(900 + s.wormProg * 3200, t, .2);
    set(this.layers.organ, s.organ * .55, .8);
    this.organFilter.frequency.setTargetAtTime(400 + s.organ * 4200, t, .8);
    set(this.layers.tessPad, s.tess * .85, 1.2);
    this.horizon.frequency.setTargetAtTime(s.horizonCut, t, .4);
    this.droneFilter.Q.value = 1.2 + s.tunnel * 6;
    s.planets.forEach((p, i) => {
      const v = this.planetVoices[i];
      set(v.g, p.gain * .7, .3);
      if (v.pan) v.pan.pan.setTargetAtTime(Math.max(-1, Math.min(1, p.pan)), t, .2);
    });
    set(this.music, (s.music ?? 0) * 1.1, .8);
    this.musicLevel = s.music ?? 0;
    this.musicSlow = s.slow ?? 1;
    const key = s.tess > .5 ? 1 : 0;
    if (key !== this.musicKey) { this.musicKey = key; this.step = 0; }
    this.tickLevel = s.tick;
    this.hyper = s.hyper;
  }
}
