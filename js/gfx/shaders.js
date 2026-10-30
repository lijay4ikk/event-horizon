// ═══════════════════════════════════════════════════════════════════
//  GLSL — EVENT HORIZON
//  Единицы чёрной дыры: радиус Шварцшильда Rs = 1, центр в начале мира.
// ═══════════════════════════════════════════════════════════════════

export const quadVert = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// ── общие функции: хэши, шум, звёзды ───────────────────────────────
export const common = /* glsl */`
#define PI 3.14159265
#define TAU 6.2831853

float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3) { p3 = fract(p3 * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }

float vnoise2(vec2 p) {
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p), f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash13(i), hash13(i + vec3(1,0,0)), u.x), mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), u.x), u.y),
             mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), u.x), mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), u.x), u.y), u.z);
}
float fbm2(vec2 p) { float a = .5, s = 0.; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for (int i = 0; i < 5; i++) { s += a * vnoise2(p); p = m * p; a *= .5; } return s; }
float fbm3(vec3 p) { float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * vnoise3(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= .5; } return s; }

uniform float uPix; // угловой размер пикселя (рад)

// один слой звёзд: ячейки на сфере направлений
vec3 starLayer(vec3 d, float scale, float density, float seed, float gain) {
  vec3 p = d * scale;
  vec3 id = floor(p);
  vec3 h = hash33(id + seed);
  if (h.x > density) return vec3(0.0);
  vec3 sp = .2 + .6 * hash33(id + seed + 7.13);
  vec3 dv = fract(p) - sp;
  dv -= d * dot(dv, d);
  float w = uPix * scale * .75;
  float mag = .18 + 4.0 * pow(h.y, 12.0);
  float I = exp(-dot(dv, dv) / (w * w)) * mag * gain;
  vec3 tint = mix(vec3(1.0, .78, .58), vec3(.72, .84, 1.0), h.z);
  tint = mix(tint, vec3(1.0), .45);
  return tint * I;
}

vec3 starfield(vec3 d) {
  vec3 c = starLayer(d, 150.0, .014, 1.0, 1.6);
  c += starLayer(d, 330.0, .004, 11.0, .8);
  c += starLayer(d, 700.0, .0012, 23.0, .45);
  // пылевая полоса галактики
  vec3 gn = normalize(vec3(.35, 1.0, .22));
  float band = exp(-pow(dot(d, gn) * 3.4, 2.0));
  float n = fbm3(d * 5.0 + 3.0);
  float dust = smoothstep(.35, .75, fbm3(d * 11.0 + 9.0));
  c += band * (vec3(.36, .33, .42) * .055 * n * n * (1.0 - .8 * dust) + vec3(.9, .7, .5) * .012 * pow(n, 4.0));
  // слабые цветные облака
  float neb = pow(fbm3(d * 2.2 + 17.0), 3.0);
  c += neb * (vec3(.10, .14, .30) * .10);
  return c;
}
`;

// ── камера для полноэкранных шейдеров ─────────────────────────────
const camRay = /* glsl */`
uniform mat4 uCamWorld;
uniform mat4 uProjInv;
uniform vec3 uCamPos;
vec3 cameraRay(vec2 uv) {
  vec4 v = uProjInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  v.xyz /= v.w;
  return normalize((uCamWorld * vec4(normalize(v.xyz), 0.0)).xyz);
}
`;

// ═══════════ ЧЁРНАЯ ДЫРА ═══════════
export const blackHoleFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uDiskTime;
uniform int uSteps;
uniform float uDiskBright;
uniform float uStarBright;
uniform float uFade;
${common}
${camRay}

const float RIN = 2.35;
const float ROUT = 12.5;

vec3 diskRamp(float t) {
  vec3 c0 = vec3(.35, .06, .01);
  vec3 c1 = vec3(1.0, .38, .08);
  vec3 c2 = vec3(1.0, .70, .28);   // #FFB347
  vec3 c3 = vec3(1.0, .955, .88);  // #FFF4E0
  vec3 c4 = vec3(.80, .89, 1.0);
  vec3 c = mix(c0, c1, smoothstep(.0, .35, t));
  c = mix(c, c2, smoothstep(.3, .65, t));
  c = mix(c, c3, smoothstep(.65, 1.05, t));
  c = mix(c, c4, smoothstep(1.25, 1.9, t));
  return c;
}

// v — направление трассировки (от камеры). Фотон летел в направлении -v.
vec4 diskSample(vec3 q, vec3 v) {
  float r = length(q.xz);
  // дифференциальное вращение (кеплерово), закручивающее турбулентность в спирали
  float omega = pow(r, -1.5);
  float a = uDiskTime * omega;
  float ca = cos(a), sa = sin(a);
  vec2 p = mat2(ca, -sa, sa, ca) * q.xz;
  float turb = fbm2(p * .85);
  float fine = fbm2(p * 3.1 + turb * 1.7);
  float rings = vnoise2(vec2(r * 5.5 + turb * 2.2, 0.5)) * .7 + vnoise2(vec2(r * 17.0 + fine * 1.5, 3.1)) * .3;
  float streaks = vnoise2(vec2(r * 31.0 + fine * 2.0, 7.7));
  float lanes = smoothstep(.18, .78, rings);
  float dens = (.12 + 1.05 * lanes) * (.3 + 1.5 * turb * turb) * (.62 + .7 * fine) * (.75 + .5 * streaks);

  float inner = smoothstep(RIN, RIN + .35, r);
  float outer = 1.0 - smoothstep(ROUT * .38, ROUT, r);
  dens *= inner * outer;

  // Доплер + гравитационное красное смещение
  vec3 t = normalize(vec3(-q.z, 0.0, q.x));
  float beta = min(sqrt(.5 / r), .62);
  float gam = 1.0 / sqrt(1.0 - beta * beta);
  float cosT = dot(t, -normalize(v));
  float D = 1.0 / (gam * (1.0 - beta * cosT));
  float g = D * sqrt(max(1.0 - 1.0 / r, .02));

  float T = pow(RIN / r, .78);
  float Tobs = T * mix(1.0, g, .45);
  float boost = mix(1.0, pow(g, 2.4), .5);
  vec3 col = diskRamp(Tobs * 1.02) * (pow(T, 2.0) * 2.6 * boost) * uDiskBright;
  float alpha = clamp(dens * (1.2 - .5 * smoothstep(RIN, ROUT, r)), 0.0, .96);
  return vec4(col * (.25 + 1.0 * dens), alpha);
}

void main() {
  vec3 rd = cameraRay(vUv);
  vec3 p = uCamPos;
  vec3 v = rd;
  vec3 col = vec3(0.0);
  float alpha = 0.0;
  bool captured = false;
  const float RB = 34.0;

  float b = dot(p, v);
  float c = dot(p, p) - RB * RB;
  bool inside = true;
  if (c > 0.0) {
    float disc = b * b - c;
    if (disc < 0.0 || b > 0.0) inside = false;
    else p += v * (-b - sqrt(disc));
  }

  if (inside) {
    vec3 hv = cross(p, v);
    float h2 = dot(hv, hv);
    for (int i = 0; i < 400; i++) {
      if (i >= uSteps) break;
      float r2 = dot(p, p);
      float r = sqrt(r2);
      float dt = clamp(.075 * r * (r - .55) / max(r, 1.0), .02, 1.6);
      vec3 acc = -1.5 * h2 * p / (r2 * r2 * r);
      vec3 vn = v + acc * dt;
      vec3 pn = p + vn * dt;

      // мягкое свечение вокруг диска (рассеянный свет)
      float hz = abs(p.y);
      col += (1.0 - alpha) * vec3(1.0, .55, .22) * (.0045 * dt) * exp(-hz * 1.6) * smoothstep(ROUT * 1.1, RIN, r) * uDiskBright;

      if (p.y * pn.y < 0.0) {
        float k = p.y / (p.y - pn.y);
        vec3 q = mix(p, pn, k);
        float rq = length(q.xz);
        if (rq > RIN * .9 && rq < ROUT) {
          vec4 ds = diskSample(q, vn);
          col += (1.0 - alpha) * ds.rgb * ds.a;
          alpha += (1.0 - alpha) * ds.a;
          if (alpha > .985) break;
        }
      }
      p = pn; v = vn;
      if (dot(p, p) < 1.0) { captured = true; break; }
      if (r > RB + 2.0 && dot(p, v) > 0.0) break;
    }
  }
  if (!captured) col += (1.0 - alpha) * starfield(normalize(v)) * uStarBright;
  col *= (1.0 - uFade);
  gl_FragColor = vec4(col, 1.0);
}
`;

// ═══════════ КРОТОВАЯ НОРА: сфера-линза ═══════════
export const wormholeFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec3 uWormPos;
uniform float uWormR;
uniform float uMix;
${common}
${camRay}

// небо по ту сторону: спиральная галактика и туманности
vec3 otherSky(vec3 d, vec3 G) {
  vec3 c = starLayer(d, 140.0, .02, 101.0, 1.6) * vec3(.85, .92, 1.0);
  c += starLayer(d, 320.0, .006, 131.0, .8);
  vec3 up = abs(G.y) > .9 ? vec3(1, 0, 0) : vec3(0, 1, 0);
  vec3 u = normalize(cross(up, G));
  vec3 w = cross(G, u);
  float z = dot(d, G);
  if (z > .05) {
    vec2 q = vec2(dot(d, u), dot(d, w)) / z;
    float ct = cos(.55), st = sin(.55);
    q = mat2(ct, -st, st, ct) * q;
    q.y *= 2.1;
    float r = length(q);
    float th = atan(q.y, q.x);
    float arms = .5 + .5 * cos(2.0 * (th - 2.6 * log(r + .002)) + fbm2(q * 9.0) * 1.4 - uTime * .05);
    float clump = fbm2(q * 22.0 + 3.0);
    float spiral = pow(arms, 2.5) * exp(-r * 3.4) * (.5 + clump);
    float core = exp(-r * r * 85.0);
    float halo = exp(-r * 6.0);
    c += vec3(.45, .62, 1.0) * spiral * 1.9;
    c += vec3(1.0, .45, .75) * pow(arms * clump, 6.0) * exp(-r * 3.0) * 2.5;
    c += vec3(1.0, .9, .78) * (core * 2.4 + halo * .22);
  }
  float neb = fbm3(d * 3.0 + 40.0);
  c += vec3(.18, .08, .38) * pow(neb, 2.5) * .9 + vec3(.05, .25, .35) * pow(fbm3(d * 5.5 + 7.0), 4.0);
  return c;
}

void main() {
  vec3 rd = cameraRay(vUv);
  vec3 oc = uCamPos - uWormPos;
  float tca = -dot(oc, rd);
  vec3 perp = oc + rd * tca;
  float bimp = length(perp);
  vec3 nrm = perp / max(bimp, 1e-4);
  vec3 G = normalize(uWormPos - uCamPos);
  vec3 col = vec3(0.0);
  float a = 0.0;
  float R = uWormR;
  float camIn = smoothstep(R * 1.05, R * .7, length(oc));

  if (tca > 0.0 && bimp < R) {
    float s = bimp / R;
    float ang = pow(s, 1.25) * PI * .98;
    vec3 od = normalize(rd * cos(ang) - nrm * sin(ang));
    col = otherSky(od, G);
    // кольцо Эйнштейна на краю сферы
    col += vec3(.75, .88, 1.0) * pow(s, 40.0) * 1.1;
    col += vec3(.5, .7, 1.0) * pow(s, 8.0) * .12;
    // отражение «нашего» неба
    col += starfield(reflect(rd, normalize(perp - rd * sqrt(max(R * R - bimp * bimp, 0.0))))) * .25 * pow(s, 3.0);
    a = 1.0;
  } else if (tca > 0.0) {
    float x = R / bimp;
    float defl = min(1.15 * x * x, 1.4);
    vec3 od = normalize(rd * cos(defl) - nrm * sin(defl));
    col = starfield(od);
    col += vec3(.55, .75, 1.0) * pow(x, 18.0) * .3;
    a = smoothstep(.0, .05, defl);
  }
  if (camIn > 0.0) { col = mix(col, otherSky(rd, G), camIn); a = max(a, camIn); }
  gl_FragColor = vec4(col, a * uMix);
}
`;

// ═══════════ ТУННЕЛЬ ═══════════
export const tunnelFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform float uMix;
uniform float uProg;
uniform float uSpeed;
${common}

void main() {
  vec2 uv = (vUv - .5) * vec2(uRes.x / uRes.y, 1.0) * 2.0;
  uv += vec2(sin(uTime * .7), cos(uTime * .53)) * .03;
  float r = length(uv);
  float a = atan(uv.y, uv.x) + uTime * .05;
  float z = .45 / (r + .015);
  float zz = z + uTime * uSpeed;

  // стенки горловины: искажённый свет другой галактики
  vec3 wp = vec3(cos(a) * 1.3, sin(a) * 1.3, zz * .3);
  float n = fbm3(wp);
  float n2 = fbm3(wp * 2.6 + vec3(0, 0, uTime * .25));
  vec3 wall = mix(vec3(.003, .006, .022), vec3(.07, .13, .36), smoothstep(.42, .85, n));
  wall += vec3(.55, .28, .62) * pow(n2, 6.0) * .9;
  wall += vec3(1.0, .7, .45) * pow(n, 9.0) * .8;
  wall *= smoothstep(.0, .7, r);

  // растянутые звёзды
  float N = 260.0;
  float sa = (a + PI) / TAU * N;
  float id = floor(sa);
  float fa = fract(sa) - .5;
  float h = hash12(vec2(id, 3.7));
  float h2 = hash12(vec2(id, 9.1));
  float fz = fract(zz * (.04 + .08 * h) + h2);
  float len = .2 + .45 * h;
  float ang = abs(fa) * TAU / N;
  float px = 2.0 / uRes.y;
  float hw = min(.011, max(.0007, 1.25 * px / max(r, .02))) * (.7 + .6 * h);
  float streak = smoothstep(len, 0.0, fz) * smoothstep(.0, .02, fz) * smoothstep(hw, 0.0, ang) * (.0016 / max(hw, .0016) * .6 + .4);
  streak *= step(.5, h2) * smoothstep(.03, .35, r);
  vec3 sc = mix(vec3(.6, .78, 1.0), vec3(1.0, .82, .58), h) * streak * (1.0 + 2.2 * h);

  vec3 col = wall + sc;
  float endL = exp(-r * mix(16.0, 1.5, pow(uProg, 3.0)));
  col += vec3(1.0, .9, .78) * endL * (.3 + 8.0 * pow(uProg, 4.0));
  gl_FragColor = vec4(col, uMix);
}
`;

// ═══════════ ТЕССЕРАКТ ═══════════
export const tesseractFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform float uMix;
uniform float uProg;
uniform vec2 uLook;
uniform float uWave;    // радиус волны (<0 — нет)
uniform float uMorse;   // 0..1 вспышка
uniform float uFlicker;
uniform float uPluck;   // секунд с последнего нажатия клавиши в форме
${common}

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float lattice(vec3 p, out float strand) {
  const float P = 2.4;
  vec3 q = mod(p + P * .5, P) - P * .5;
  float bx = length(q.yz) - .009;
  float by = length(q.xz) - .006;
  float bz = length(q.xy) - .009;
  // «струны»: вертикальные нити вдоль стен коридоров (x = k·P)
  float sz = mod(p.z + .09, .18) - .09;
  float s = length(vec2(q.x, sz)) - .0028;
  float sy = mod(p.y + .6, 1.2) - .6;           // «полки»
  float shelf = length(vec2(q.x, sy)) - .004;
  strand = min(s, shelf);
  return min(min(bx, by), bz);
}

// светящиеся «книги» на полках вдоль стен коридоров
float books(vec3 p, out float bri) {
  const float P = 2.4;
  float qx = mod(p.x + P * .5, P) - P * .5;
  vec2 cell = vec2(floor(p.z / .36), floor((p.y + .6) / 1.2));
  float h = hash12(cell + floor((p.x + P * .5) / P) * 17.0);
  bri = step(.74, h) * (.4 + 1.6 * hash12(cell * 3.1 + 2.0));
  vec2 lc = vec2(mod(p.z, .36) - .18, mod(p.y + .6, 1.2) - .6 - .2 + .15 * h);
  vec3 b = vec3(abs(qx) - .01, abs(lc.x) - .1, abs(lc.y) - .2 * (.6 + .4 * h));
  return length(max(b, 0.0)) + min(max(b.x, max(b.y, b.z)), 0.0);
}

void main() {
  vec2 uv = (vUv - .5) * vec2(uRes.x / uRes.y, 1.0);
  vec3 ro = vec3(1.2 + sin(uTime * .05) * .25, 1.2 + sin(uTime * .07) * .2 + uProg * .3, uTime * .22 + uProg * 3.0);
  vec3 rd = normalize(vec3(uv, 1.25));
  rd.yz = rot(-uLook.y * .25 - .06) * rd.yz;
  rd.xz = rot(uLook.x * .35 + sin(uTime * .07) * .12) * rd.xz;

  vec3 glow = vec3(0.0);
  float t = 0.0;
  vec3 amber = vec3(1.0, .62, .22);
  vec3 hot = vec3(1.0, .88, .66);
  for (int i = 0; i < 90; i++) {
    vec3 p = ro + rd * t;
    float st, bri;
    float d = lattice(p, st);
    float db = books(p, bri);
    float fog = exp(-t * .1);
    float w = 1.0;
    float wv = 0.0;
    if (uWave > 0.0) {
      float dw = length(p - ro) - uWave;
      wv = exp(-dw * dw * 1.4) * (1.0 - smoothstep(30.0, 46.0, uWave));
      w += 16.0 * wv;
    }
    float flick = .85 + .15 * sin(p.y * 3.0 + uTime * 2.0 + p.x);
    float cellV = .35 + 1.1 * hash13(floor((p + 1.2) / 2.4));
    vec3 beamC = mix(hot, vec3(.75, .92, 1.0), min(wv * 1.5, 1.0));
    // щипок струн: при наборе текста по нитям бежит световая волна
    float pl = uPluck < 3.0 ? exp(-uPluck * 1.6) * (.5 + .5 * sin(p.y * 7.0 - uPluck * 28.0 + p.z * 2.0)) : 0.0;
    float bookFl = .8 + .2 * sin(uTime * (1.0 + bri) + p.z * 3.0);
    glow += (beamC * .00038 / (.00025 + d * d) * w * cellV
           + amber * .00007 / (.00003 + st * st) * flick * (.6 + .8 * cellV) * (1.0 + wv * 6.0 + pl * 5.0)
           + vec3(1.0, .5, .16) * bri * bookFl * .00004 / (.00002 + db * db)) * fog * .02;
    t += max(min(min(d, st), db + .01) * .75, .035);
    if (t > 46.0) break;
  }
  vec3 col = glow * (1.0 + uMorse * 3.5) * uFlicker;
  // тёплая дымка и свет из «глубины»
  col += vec3(.20, .09, .02) * (.6 + .4 * fbm3(rd * 3.0 + uTime * .03)) * .14;
  col += vec3(1.0, .7, .35) * pow(max(dot(rd, normalize(vec3(.0, .2, 1.0))), 0.0), 18.0) * .5;
  col += vec3(.9, .6, .3) * uMorse * .15;
  gl_FragColor = vec4(col, uMix);
}
`;

// ═══════════ ФОН (апскейл трассировки) ═══════════
export const bgFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tBg;
uniform vec2 uTexel;
void main() {
  // лёгкий бикубик-подобный апскейл: 4 бил. выборки + центр
  vec3 c = texture2D(tBg, vUv).rgb * .5;
  c += texture2D(tBg, vUv + vec2( uTexel.x, 0.0) * .5).rgb * .125;
  c += texture2D(tBg, vUv + vec2(-uTexel.x, 0.0) * .5).rgb * .125;
  c += texture2D(tBg, vUv + vec2(0.0,  uTexel.y) * .5).rgb * .125;
  c += texture2D(tBg, vUv + vec2(0.0, -uTexel.y) * .5).rgb * .125;
  gl_FragColor = vec4(c, 1.0);
}
`;

// ═══════════ ПОСТОБРАБОТКА ═══════════
export const brightFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;
uniform float uThresh;
uniform float uKnee;
void main() {
  vec3 c = texture2D(tIn, vUv).rgb;
  c = min(c, vec3(60.0));
  float l = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThresh, uThresh + uKnee, l);
  gl_FragColor = vec4(c * k, 1.0);
}
`;

export const downFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;
uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tIn, vUv).rgb * 4.0;
  c += texture2D(tIn, vUv + vec2(-o.x, -o.y)).rgb;
  c += texture2D(tIn, vUv + vec2( o.x, -o.y)).rgb;
  c += texture2D(tIn, vUv + vec2(-o.x,  o.y)).rgb;
  c += texture2D(tIn, vUv + vec2( o.x,  o.y)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}
`;

export const upFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;    // меньший уровень
uniform sampler2D tBase;  // текущий уровень
uniform vec2 uTexel;
uniform float uRadius;
void main() {
  vec2 o = uTexel * uRadius;
  vec3 c = vec3(0.0);
  c += texture2D(tIn, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  c += texture2D(tIn, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  c += texture2D(tIn, vUv + vec2(0.0, o.y * 2.0)).rgb;
  c += texture2D(tIn, vUv + vec2(o.x, o.y)).rgb * 2.0;
  c += texture2D(tIn, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  c += texture2D(tIn, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  c += texture2D(tIn, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  c += texture2D(tIn, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  gl_FragColor = vec4(c / 12.0 + texture2D(tBase, vUv).rgb, 1.0);
}
`;

// анаморфный блик: широкое горизонтальное размытие
export const flareFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;
uniform vec2 uTexel;
uniform float uSpread;
void main() {
  vec3 c = vec3(0.0);
  float wsum = 0.0;
  for (int i = -14; i <= 14; i++) {
    float fi = float(i);
    float w = exp(-fi * fi / 70.0);
    c += texture2D(tIn, vUv + vec2(fi * uTexel.x * uSpread, 0.0)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(c / wsum, 1.0);
}
`;

export const finalFrag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform sampler2D tFlare;
uniform vec2 uRes;
uniform float uTime;
uniform float uBloom;
uniform float uFlare;
uniform float uCA;
uniform float uExposure;
uniform float uFade;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform vec2 uShake;
uniform float uSat;
uniform float uScan;
uniform vec4 uRipple;   // xy центр (uv), z возраст (с), w сила
uniform float uAspect;

vec3 aces(vec3 x) {
  const float a = 2.51, b = .03, c = 2.43, d = .59, e = .14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

void main() {
  vec2 uv = vUv + uShake;
  // гравитационная волна: кольцо с квадрупольной поляризацией (растяжение/сжатие по осям)
  float gwGlow = 0.0;
  if (uRipple.w > 0.0) {
    vec2 dv = (uv - uRipple.xy) * vec2(uAspect, 1.0);
    float d = length(dv);
    float ang = atan(dv.y, dv.x);
    float fade = 1.0 - smoothstep(.4, 2.6, uRipple.z);
    for (int k = 0; k < 2; k++) {
      float r = max(uRipple.z - float(k) * .35, 0.0) * .75;
      float band = exp(-pow((d - r) * 7.0, 2.0));
      float wave = sin((d - r) * 55.0) * band * (.55 + .45 * cos(2.0 * ang));
      uv -= (dv / max(d, 1e-4)) / vec2(uAspect, 1.0) * wave * .014 * uRipple.w * fade * (k == 0 ? 1.0 : .5);
      gwGlow += exp(-pow((d - r) * 26.0, 2.0)) * fade * (k == 0 ? 1.0 : .4) * (.55 + .45 * cos(2.0 * ang));
    }
  }
  uv = clamp(uv, .002, .998);
  vec2 dir = uv - .5;
  float d2 = dot(dir, dir);
  vec2 off = dir * uCA * (.3 + d2 * 1.6) * .012;
  vec3 col;
  col.r = texture2D(tScene, uv + off).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - off).b;
  vec3 bl;
  bl.r = texture2D(tBloom, uv + off * 1.5).r;
  bl.g = texture2D(tBloom, uv).g;
  bl.b = texture2D(tBloom, uv - off * 1.5).b;
  col += bl * uBloom;
  vec3 fl = texture2D(tFlare, uv).rgb;
  col += fl * vec3(.55, .78, 1.0) * uFlare;
  col *= uExposure;
  col += vec3(.55, .75, 1.0) * gwGlow * .045 * uRipple.w;
  col = aces(col);
  float l = dot(col, vec3(.2126, .7152, .0722));
  col = mix(vec3(l), col, uSat);
  col = pow(col, vec3(1.0 / 2.2));
  // лёгкий сплит-тон: холодные тени, тёплые света
  col += vec3(-.004, .0, .012) * (1.0 - l) + vec3(.01, .004, -.01) * l;
  col = max(col, vec3(.0118, .0118, .0196)); // #030305
  if (uScan > 0.0) {
    col *= 1.0 - uScan * .25 * step(.5, fract(vUv.y * uRes.y * .25));
    col += uScan * .08 * h12(vec2(floor(vUv.y * 90.0), floor(uTime * 30.0)));
  }
  col = mix(col, vec3(0.0), uFade);
  col = mix(col, uFlashColor, uFlash);
  col += (h12(vUv * uRes + fract(uTime) * 100.0) - .5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;
