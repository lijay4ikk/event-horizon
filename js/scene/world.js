import * as THREE from 'three';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const polar = (r, a, y = 0) => V(r * Math.sin(a), y, r * Math.cos(a));
const deg = d => d * Math.PI / 180;

// ── объекты мира (ЧД в начале координат, Rs = 1) ─────────────────
export const STATION = { pos: V(7, 1.6, 36), scale: 1 };

export const PLANETS = [
  { key: 'ocean',  type: 0, radius: 3.3, angle: deg(-22),  dist: 48, y: -0.5, tilt: .35, spin: .035, atmo: [0.30, 0.75, 1.0],
    moons: [{ r: .55, orbit: 6.2, speed: .22, phase: 1.2, incl: .25 }] },
  { key: 'ice',    type: 1, radius: 2.6, angle: deg(-49),  dist: 51, y: 2.4,  tilt: -.2, spin: .02,  atmo: [0.40, 0.52, 0.64] },
  { key: 'desert', type: 2, radius: 3.7, angle: deg(-76),  dist: 49, y: -1.6, tilt: .45, spin: .028, atmo: [1.0, 0.62, 0.34], ring: true },
  { key: 'lava',   type: 3, radius: 2.9, angle: deg(-103), dist: 51, y: 1.0,  tilt: .1,  spin: .04,  atmo: [1.0, 0.36, 0.12] },
  { key: 'giant',  type: 4, radius: 6.4, angle: deg(-131), dist: 60, y: 3.5,  tilt: .18, spin: .004, faceLon: .7, atmo: [1.0, 0.80, 0.58],
    moons: [{ r: .75, orbit: 11.5, speed: .16, phase: .4, incl: .12 }, { r: .48, orbit: 15, speed: .1, phase: 2.6, incl: -.2 }] },
];
PLANETS.forEach(p => { p.pos = polar(p.dist, p.angle, p.y); });

export const WORMHOLE = { pos: polar(52, deg(-163), 3.0), radius: 5.0 };

// ── раскладка сцен по шкале T (0..6) ─────────────────────────────
// 0 hero · 1 станция · 2 планеты · 3 кротовая нора · 4 горизонт · 5 тессеракт
export const PLANET_T = PLANETS.map((_, i) => 2.07 + i * 0.18);
export const T = {
  wormEnterStart: 3.42, // сфера заполняет экран
  tunnelIn: 3.56, tunnelOut: 3.94,
  horizonStart: 4.0,
  plungeStart: 4.82, tessIn: 5.0,
};

// ── ключевые кадры камеры ────────────────────────────────────────
function buildKeys() {
  const K = [];
  const add = (t, pos, tgt, fov = 45, roll = 0) => K.push({ t, pos, tgt, fov, roll });
  const s = STATION.pos;

  add(-0.2, V(0, 1.6, 29), V(0, -1.2, 0), 39);
  add(0.0,  V(0, 2.05, 26),   V(0, -1.25, 0), 41);
  add(0.42, V(-1.6, 2.6, 22), V(0, -1.0, 0), 44, -.02);
  add(0.78, V(4, 3.6, 32),    V(2.2, -0.4, 10), 46, .01);

  // облёт станции: станция справа, ЧД слева в глубине
  const around = (phi, rad, h) => s.clone().add(V(Math.sin(phi) * rad, h, Math.cos(phi) * rad));
  const sTgt = (k) => s.clone().lerp(V(0, 0, 0), k);
  add(1.0,  around(0.95, 24, 4.0),  sTgt(0.22), 44);
  add(1.28, around(0.6, 20, 2.6),   sTgt(0.17), 42, .02);
  add(1.55, around(0.12, 19, -1.2), sTgt(0.14), 42, .0);
  add(1.80, around(-0.5, 20.5, 2.0), sTgt(0.18), 44, -.03);
  add(1.97, around(-1.05, 25, 3.2),  sTgt(0.30), 46, -.02);

  // нырок сквозь пояс астероидов
  add(2.0, polar(43.5, deg(-9), 0.9), polar(47, deg(-24), -0.5), 54, .06);

  // планеты: камера скользит вдоль каждой, ЧД остаётся на заднем плане
  PLANETS.forEach((p, i) => {
    const t0 = PLANET_T[i];
    const a = p.angle;
    const camA = (off, r, dy) => polar(r, a + off, p.y + dy);
    const tgtFor = (c) => {
      const toP = p.pos.clone().sub(c).normalize();
      const toO = c.clone().negate().normalize();
      return c.clone().add(toP.multiplyScalar(1.15).add(toO).normalize().multiplyScalar(20));
    };
    // дистанция и боковой сдвиг камеры растут с размером планеты
    const k = p.radius / 3.1;
    const gap = 12 * k, R0 = p.dist + gap;
    const off = o => o * k * 62 / (R0 + 2);
    const c1 = camA(off(.205), R0 + 2, 2.4 * k), c2 = camA(off(.15), R0, 1.2 * k), c3 = camA(off(.095), R0 - 1, .3 * k);
    add(t0 - .04,  c1, tgtFor(c1), 47, .02 * (i % 2 ? 1 : -1));
    add(t0 + .05,  c2, tgtFor(c2), 46, 0);
    p.camMid = c2;
    add(t0 + .125, c3, tgtFor(c3), 46, .02 * (i % 2 ? -1 : 1));
  });

  // кротовая нора
  const w = WORMHOLE.pos;
  const dirIn = w.clone().sub(polar(70, deg(-145), 4)).normalize();
  const approach = (d) => w.clone().sub(dirIn.clone().multiplyScalar(d));
  add(3.06, polar(70, deg(-145), 5.5), w.clone().add(V(0, 0, 0)), 50, .03);
  add(3.22, approach(26).add(V(1.5, 1.2, 0)), w, 50, .06);
  add(3.40, approach(12), w, 54, .14);
  add(3.52, approach(5.6), w, 62, .26);
  add(3.62, approach(2.0), w.clone().add(dirIn.clone().multiplyScalar(10)), 72, .4);
  add(3.78, approach(-4), w.clone().add(dirIn.clone().multiplyScalar(20)), 74, .7);
  // выход у горизонта событий (переход скрыт туннелем)
  add(3.92, V(-6, 6.5, 26), V(0, 0.6, 0), 52, .25);
  add(4.0,  V(-3, 4.6, 19.5), V(0, 0.3, 0), 50, .08);
  add(4.3,  V(3.5, 3.6, 16.5), V(0, 0.1, 0), 50, -.02);
  add(4.6,  V(7.5, 2.4, 11.5), V(0, 0.0, 0), 52, -.05);
  add(4.86, V(4.0, 1.25, 6.4), V(0, 0, 0), 58, -.1);
  add(5.0,  V(1.8, .55, 3.15), V(-.6, -.1, -2), 70, -.2);
  add(5.2,  V(1.2, .4, 2.6), V(-.8, -.1, -3), 74, -.25);
  add(6.3,  V(1.2, .4, 2.6), V(-.8, -.1, -3), 74, -.25);
  K.sort((a, b) => a.t - b.t);
  return K;
}
export const KEYS = buildKeys();

function cr(p0, p1, p2, p3, u) {
  const u2 = u * u, u3 = u2 * u;
  return .5 * ((2 * p1) + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
}
function crV(a, b, c, d, u, out) {
  return out.set(cr(a.x, b.x, c.x, d.x, u), cr(a.y, b.y, c.y, d.y, u), cr(a.z, b.z, c.z, d.z, u));
}

// Точка траектории для глобального времени t
export function sampleCamera(t, out) {
  const K = KEYS;
  let i = 0;
  while (i < K.length - 2 && K[i + 1].t <= t) i++;
  const k0 = K[Math.max(i - 1, 0)], k1 = K[i], k2 = K[Math.min(i + 1, K.length - 1)], k3 = K[Math.min(i + 2, K.length - 1)];
  const u = THREE.MathUtils.clamp((t - k1.t) / Math.max(k2.t - k1.t, 1e-5), 0, 1);
  crV(k0.pos, k1.pos, k2.pos, k3.pos, u, out.pos);
  crV(k0.tgt, k1.tgt, k2.tgt, k3.tgt, u, out.tgt);
  out.fov = cr(k0.fov, k1.fov, k2.fov, k3.fov, u);
  out.roll = cr(k0.roll, k1.roll, k2.roll, k3.roll, u);
  return out;
}

export const smooth = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const win = (x, a, b, c, d) => smooth(a, b, x) * (1 - smooth(c, d, x));
