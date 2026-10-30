// Интерфейс: курсор с магнитом, скремблер текста, тосты, Konami-код
const lerp = (a, b, t) => a + (b - a) * t;

export class Cursor {
  constructor(audio) {
    this.el = document.getElementById('cursor');
    this.ring = this.el.querySelector('.c-ring');
    this.pt = this.el.querySelector('.c-pt');
    this.x = innerWidth / 2; this.y = innerHeight / 2;
    this.rx = this.x; this.ry = this.y;
    this.mag = null;
    this.audio = audio;
    this.target3d = false;
    this.active = false;
    addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      this.active = true;
      this.x = e.clientX; this.y = e.clientY;
      this.el.classList.remove('hidden');
    }, { passive: true });
    document.addEventListener('mouseleave', () => this.el.classList.add('hidden'));
    addEventListener('pointerdown', () => this.el.classList.add('down'));
    addEventListener('pointerup', () => this.el.classList.remove('down'));
    document.addEventListener('pointerover', e => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const m = e.target.closest?.('[data-magnetic], .card3d');
      if (m && m !== this.mag) { this.mag = m; this.audio?.hover(); }
      else if (!m) this.mag = null;
    });
  }

  update(dt) {
    if (!this.active) return; // сенсорный экран: кнопки не двигаем
    const k = 1 - Math.pow(.0005, dt);
    let tx = this.x, ty = this.y, w = 34, h = 34, br = '50%';
    const m = this.mag;
    if (m && m.isConnected && !m.classList.contains('card3d')) {
      const r = m.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      tx = lerp(this.x, cx, .55); ty = lerp(this.y, cy, .55);
      w = Math.min(r.width + 18, 240); h = Math.min(r.height + 14, 120); br = '6px';
      if (r.width < 60 && r.height < 60) { w = h = Math.max(r.width, r.height) + 22; br = '50%'; }
      const dx = (this.x - cx) * .18, dy = (this.y - cy) * .25;
      m.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      this.lastMag = m;
    } else if (this.lastMag) { this.lastMag.style.transform = ''; this.lastMag = null; }
    this.rx = lerp(this.rx, tx, k); this.ry = lerp(this.ry, ty, k);
    this.el.classList.toggle('magnet', !!(m && !m.classList.contains('card3d')));
    this.el.classList.toggle('target', this.target3d && !m);
    this.pt.style.transform = `translate(${this.x}px, ${this.y}px)`;
    const ring = this.ring;
    if (this.target3d && !m) { ring.style.width = ring.style.height = ''; ring.style.margin = ''; ring.style.borderRadius = ''; }
    else { ring.style.width = w + 'px'; ring.style.height = h + 'px'; ring.style.margin = `${-h / 2}px 0 0 ${-w / 2}px`; ring.style.borderRadius = br; }
    ring.style.transform = `translate(${this.rx}px, ${this.ry}px)`;
  }
}

// Текст «проявляется» через перебор символов
const GLYPHS = '!<>-_\\/[]{}—=+*^?#ΔΣΩ01';
export function scramble(el, dur = 900) {
  if (el._scr) cancelAnimationFrame(el._scr);
  const nodes = [];
  const walk = n => n.childNodes.forEach(c => c.nodeType === 3 ? (c._orig ??= c.textContent, nodes.push(c)) : walk(c));
  walk(el);
  const start = performance.now();
  const total = nodes.reduce((s, n) => s + n._orig.length, 0) || 1;
  const step = now => {
    const t = Math.min(1, (now - start) / dur);
    let idx = 0;
    for (const n of nodes) {
      const o = n._orig;
      let out = '';
      for (let i = 0; i < o.length; i++, idx++) {
        const reveal = idx / total * .7 + .3 * Math.random();
        out += (t >= reveal || o[i] === ' ') ? o[i] : GLYPHS[Math.random() * GLYPHS.length | 0];
      }
      n.textContent = out;
    }
    if (t < 1) el._scr = requestAnimationFrame(step);
    else { nodes.forEach(n => { n.textContent = n._orig; }); el._scr = 0; }
  };
  el._scr = requestAnimationFrame(step);
}
export function resetScrambleCache(root = document) {
  const walk = n => n.childNodes.forEach(c => c.nodeType === 3 ? (c._orig = undefined) : walk(c));
  root.querySelectorAll('[data-scramble], .thesis, .service').forEach(walk);
}

let toastTimer = 0;
export function toast(msg, ms = 2600) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), ms);
}

export function konami(fn) {
  const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let i = 0;
  addEventListener('keydown', e => {
    if (e.target.closest?.('input, textarea')) return;
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    i = (k === seq[i]) ? i + 1 : (k === seq[0] ? 1 : 0);
    if (i === seq.length) { i = 0; fn(); }
  });
}
