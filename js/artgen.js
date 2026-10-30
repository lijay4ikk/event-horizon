// Генеративные обложки. Каждая картинка рисуется кодом, поэтому чужих изображений на сайте нет.
const cache = new Map();

function rng(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function noise2(seed) {
  const r = rng(seed), P = new Float32Array(512);
  for (let i = 0; i < 512; i++) P[i] = r();
  const h = (x, y) => P[((x * 73856093) ^ (y * 19349663)) & 511];
  return (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = h(xi, yi), b = h(xi + 1, yi), c = h(xi, yi + 1), d = h(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
}
const fbm = (n, x, y) => n(x, y) * .5 + n(x * 2.03, y * 2.03) * .25 + n(x * 4.1, y * 4.1) * .125 + n(x * 8.3, y * 8.3) * .0625;

function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
}

const ART = {
  orbits(g, W, H, [bg, a, b], r) {
    const cx = W * .62, cy = H * .55;
    for (let i = 0; i < 26; i++) {
      const rx = 40 + i * 19, ry = rx * (.28 + r() * .06);
      g.strokeStyle = hexA(i % 4 ? a : b, .08 + (i % 5 === 0 ? .4 : .12));
      g.lineWidth = i % 5 === 0 ? 1.6 : .8;
      g.beginPath(); g.ellipse(cx, cy, rx, ry, -.25, 0, Math.PI * 2); g.stroke();
      const t = r() * Math.PI * 2;
      const x = cx + Math.cos(t) * rx * Math.cos(-.25) - Math.sin(t) * ry * Math.sin(-.25);
      const y = cy + Math.cos(t) * rx * Math.sin(-.25) + Math.sin(t) * ry * Math.cos(-.25);
      g.fillStyle = b; g.shadowColor = a; g.shadowBlur = 14;
      g.beginPath(); g.arc(x, y, 1.5 + r() * 3, 0, 7); g.fill(); g.shadowBlur = 0;
    }
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, 70);
    gr.addColorStop(0, '#000'); gr.addColorStop(.6, '#000'); gr.addColorStop(.75, hexA(b, .9)); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, 70, 0, 7); g.fill();
  },
  flow(g, W, H, [bg, a, b], r, n) {
    g.lineCap = 'round';
    for (let i = 0; i < 900; i++) {
      let x = r() * W, y = r() * H;
      g.strokeStyle = hexA(r() < .78 ? a : b, .05 + r() * .35);
      g.lineWidth = .5 + r() * 1.2;
      g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 40; k++) {
        const ang = fbm(n, x * .004, y * .004) * Math.PI * 4;
        x += Math.cos(ang) * 4; y += Math.sin(ang) * 4;
        g.lineTo(x, y);
      }
      g.stroke();
    }
  },
  contour(g, W, H, [bg, a, b], r, n) {
    const img = g.getImageData(0, 0, W, H), d = img.data;
    const A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const v = fbm(n, x * .0055, y * .0055) * 14;
      const f = v - Math.floor(v);
      const line = Math.max(0, 1 - Math.abs(f - .5) * 18);
      const major = Math.floor(v) % 4 === 0 ? 1 : .45;
      const c = Math.floor(v) % 4 === 0 ? B : A;
      const i = (y * W + x) * 4, k = line * major;
      d[i] = d[i] * (1 - k) + (c >> 16 & 255) * k; d[i + 1] = d[i + 1] * (1 - k) + (c >> 8 & 255) * k; d[i + 2] = d[i + 2] * (1 - k) + (c & 255) * k;
    }
    g.putImageData(img, 0, 0);
  },
  waves(g, W, H, [bg, a, b], r, n) {
    for (let row = 0; row < 46; row++) {
      const y0 = 40 + row * (H - 60) / 46;
      g.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const c = 1 - Math.abs(x - W / 2) / (W / 2);
        const amp = Math.pow(c, 2) * 70 * fbm(n, x * .012, row * .3);
        const y = y0 - amp;
        x === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
      }
      g.lineTo(W, H); g.lineTo(0, H); g.closePath();
      g.fillStyle = bg; g.fill();
      g.strokeStyle = hexA(row % 7 === 0 ? b : a, row % 7 === 0 ? .9 : .5); g.lineWidth = 1.1; g.stroke();
    }
  },
  monolith(g, W, H, [bg, a, b], r) {
    const sky = g.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#120c08'); sky.addColorStop(.7, hexA(b, .35)); sky.addColorStop(1, '#0a0806');
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    const sun = g.createRadialGradient(W * .7, H * .62, 0, W * .7, H * .62, 160);
    sun.addColorStop(0, hexA(b, .9)); sun.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = sun; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 9; i++) {
      const w = 40 + r() * 110, h = 120 + r() * 300, x = r() * W, y = H - h * .9;
      const gr = g.createLinearGradient(x, 0, x + w, 0);
      gr.addColorStop(0, hexA(a, .95)); gr.addColorStop(.5, hexA(a, .55)); gr.addColorStop(1, '#100d0a');
      g.fillStyle = gr; g.fillRect(x, y, w, h);
      g.fillStyle = 'rgba(0,0,0,.45)'; g.beginPath(); g.moveTo(x + w, H); g.lineTo(x + w + h * .7, H); g.lineTo(x + w, y + h * .3); g.fill();
    }
  },
  sphere(g, W, H, [bg, a, b], r) {
    const cx = W * .5, cy = H * .52, R = H * .36;
    for (let y = -R; y < R; y += 7) for (let x = -R; x < R; x += 7) {
      const d = Math.hypot(x, y) / R; if (d > 1) continue;
      const z = Math.sqrt(1 - d * d);
      const l = Math.max(0, -x / R * .5 - y / R * .6 + z * .7);
      const s = 3.4 * Math.pow(l, 1.2);
      g.fillStyle = l > .55 ? b : a;
      g.globalAlpha = .25 + .75 * l;
      g.beginPath(); g.arc(cx + x, cy + y, s, 0, 7); g.fill();
    }
    g.globalAlpha = 1;
    g.strokeStyle = hexA(b, .5); g.lineWidth = 1;
    g.beginPath(); g.ellipse(cx, cy, R * 1.5, R * .28, -.3, 0, Math.PI * 2); g.stroke();
  },
  galaxy(g, W, H, [bg, a, b], r) {
    const cx = W / 2, cy = H / 2;
    g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 5200; i++) {
      const arm = i % 3, t = Math.pow(r(), .7) * 6;
      const ang = t * 1.15 + arm * Math.PI * 2 / 3 + (r() - .5) * .6;
      const rad = t * 38 + (r() - .5) * 18;
      const x = cx + Math.cos(ang) * rad, y = cy + Math.sin(ang) * rad * .55;
      g.fillStyle = hexA(r() < .6 ? a : b, .25 + r() * .5);
      const s = r() < .02 ? 2.4 : .9;
      g.fillRect(x, y, s, s);
    }
    const core = g.createRadialGradient(cx, cy, 0, cx, cy, 90);
    core.addColorStop(0, 'rgba(255,244,224,.95)'); core.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = core; g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = 'source-over';
  },
  bands(g, W, H, [bg, a, b], r, n) {
    for (let i = 0; i < 14; i++) {
      const y = H * (i / 14);
      const gr = g.createLinearGradient(0, y, W, y + H / 14);
      gr.addColorStop(0, hexA(i % 2 ? a : b, .04 + i * .035));
      gr.addColorStop(1, hexA(i % 3 ? b : a, .02 + (14 - i) * .02));
      g.fillStyle = gr; g.fillRect(0, y, W, H / 14 + 1);
    }
    const sun = g.createRadialGradient(W * .3, H * .78, 0, W * .3, H * .78, 220);
    sun.addColorStop(0, hexA(a, .95)); sun.addColorStop(.3, hexA(a, .35)); sun.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = sun; g.fillRect(0, 0, W, H);
    g.fillStyle = '#060403';
    g.beginPath(); g.moveTo(0, H);
    for (let x = 0; x <= W; x += 6) g.lineTo(x, H * .7 - fbm(n, x * .006, 1) * 140);
    g.lineTo(W, H); g.fill();
  },
};

export function makeArt(kind, pal, seed = 1, W = 960, H = 600) {
  const key = `${kind}|${pal.join()}|${seed}|${W}`;
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d', { willReadFrequently: kind === 'contour' });
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, pal[0]); bg.addColorStop(1, '#000');
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  const r = rng(seed * 9973 + kind.length * 31);
  ART[kind](g, W, H, pal, r, noise2(seed * 7 + 3));
  // плёночное зерно и HUD-рамка
  const img = g.getImageData(0, 0, W, H), d = img.data;
  for (let i = 0; i < d.length; i += 4) { const k = (r() - .5) * 16; d[i] += k; d[i + 1] += k; d[i + 2] += k; }
  g.putImageData(img, 0, 0);
  g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 1;
  const m = 14, L = 16;
  [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]].forEach(([x, y, sx, sy]) => {
    g.beginPath(); g.moveTo(x, y + L * sy); g.lineTo(x, y); g.lineTo(x + L * sx, y); g.stroke();
  });
  g.font = '500 11px "JetBrains Mono", monospace'; g.fillStyle = 'rgba(255,255,255,.55)';
  g.fillText(`EH/${kind.toUpperCase()}/${String(seed).padStart(3, '0')}`, m + 8, H - m - 8);
  const url = c.toDataURL('image/jpeg', .86);
  cache.set(key, url);
  return url;
}
