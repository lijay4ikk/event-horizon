import * as THREE from 'three';

// Заголовок из частиц: их засасывает в дыру и выбрасывает обратно уже в виде букв.
// Точки берутся из реального DOM-заголовка, поэтому частицы и текст совпадают пиксель в пиксель.
const vert = /* glsl */`
attribute vec2 aTarget;
attribute vec4 aSeed;
uniform vec2 uRes;
uniform vec2 uHole;
uniform float uIntro;
uniform float uSuck;
uniform float uTime;
uniform float uSize;
uniform float uDpr;
varying float vHeat;
varying float vA;
#define PI 3.14159265
void main(){
  float delay = aSeed.x * .38;
  float t = clamp((uIntro - delay) / .62, 0.0, 1.0);
  float a0 = aSeed.y * 6.2831853;
  float R = max(uRes.x, uRes.y);
  float r0 = (.22 + .42 * aSeed.z) * R;
  vec2 pos;
  float heat;
  if (t < .5) {
    float k = t / .5;
    float e = k * k * (3.0 - 2.0 * k);
    float r = mix(r0, 3.0, e * e);
    float a = a0 + e * 7.0 + k * 1.5;
    pos = uHole + vec2(cos(a), sin(a) * .42) * r;
    heat = k;
  } else {
    float k = (t - .5) / .5;
    float e = 1.0 - pow(1.0 - k, 4.0);
    vec2 dir = aTarget - uHole;
    vec2 perp = vec2(-dir.y, dir.x);
    pos = uHole + dir * e + perp * sin(k * PI) * .35 * (aSeed.w - .5);
    heat = 1.0 - k;
  }
  float settled = step(1.0, t);
  pos += vec2(sin(uTime * 1.7 + aSeed.y * 60.0), cos(uTime * 1.3 + aSeed.z * 60.0)) * .6 * settled;

  // скролл: буквы снова затягивает в дыру
  float s = clamp((uSuck - aSeed.x * .45) / .55, 0.0, 1.0);
  if (s > 0.0) {
    vec2 d = pos - uHole;
    float ss = s * s;
    float r = length(d) * (1.0 - ss);
    float a = atan(d.y, d.x) + ss * 6.0;
    pos = uHole + vec2(cos(a), sin(a) * mix(1.0, .4, s)) * r;
    heat = max(heat, s);
  }
  vHeat = heat;
  vA = (t > 0.0 ? 1.0 : 0.0) * (1.0 - smoothstep(.85, 1.0, s));
  vec2 ndc = pos / uRes * 2.0 - 1.0;
  gl_Position = vec4(ndc.x, -ndc.y, 0.0, 1.0);
  float inflow = t > 0.0 && t < .5 ? .65 : 1.0;
  gl_PointSize = uSize * uDpr * (1.0 + heat * 1.0) * (.7 + .6 * aSeed.w) * inflow;
}`;

const frag = /* glsl */`
uniform float uAlpha;
varying float vHeat;
varying float vA;
void main(){
  vec2 c = gl_PointCoord - .5;
  float d = length(c);
  float a = smoothstep(.5, .0, d);
  vec3 settled = vec3(1.0, .93, .80) * 1.5;
  vec3 hot = mix(vec3(1.0, .80, .55), vec3(1.0, .52, .16), vHeat) * (2.2 + 2.0 * vHeat);
  vec3 col = mix(settled, hot, vHeat);
  float alpha = a * vA * mix(uAlpha, 1.0, vHeat);
  gl_FragColor = vec4(col * alpha, alpha);
}`;

export class TitleParticles {
  constructor(maxCount) {
    this.max = maxCount;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxCount * 3), 3));
    this.geo.setAttribute('aTarget', new THREE.BufferAttribute(new Float32Array(maxCount * 2), 2));
    const seeds = new Float32Array(maxCount * 4);
    for (let i = 0; i < seeds.length; i++) seeds[i] = Math.random();
    this.geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
    this.geo.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: vert, fragmentShader: frag, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      uniforms: {
        uRes: { value: new THREE.Vector2(1, 1) }, uHole: { value: new THREE.Vector2() }, uIntro: { value: 0 },
        uSuck: { value: 0 }, uTime: { value: 0 }, uSize: { value: 2 }, uDpr: { value: 1 }, uAlpha: { value: 1 },
      },
    });
    this.points = new THREE.Points(this.geo, this.mat);
    this.points.frustumCulled = false;
    this.scene.add(this.points);
    this.u = this.mat.uniforms;
  }

  // Повторяет раскладку DOM-заголовка: каждое слово рисуется по его реальному прямоугольнику
  build(el) {
    const words = el.textContent.trim().split(/\s+/);
    const prev = el.innerHTML;
    el.innerHTML = words.map(w => `<span style="display:inline-block">${w}</span>`).join(' ');
    const cs = getComputedStyle(el);
    const spans = [...el.querySelectorAll('span')];
    const W = innerWidth, H = innerHeight;
    const scale = Math.min(1, 1600 / W);
    const c = document.createElement('canvas');
    c.width = Math.ceil(W * scale); c.height = Math.ceil(H * scale);
    const g = c.getContext('2d', { willReadFrequently: true });
    const fs = parseFloat(cs.fontSize);
    g.font = `${cs.fontWeight} ${fs * scale}px ${cs.fontFamily}`;
    if ('letterSpacing' in g) g.letterSpacing = `${parseFloat(cs.letterSpacing || 0) * scale || fs * .02 * scale}px`;
    g.textBaseline = 'middle';
    g.fillStyle = '#fff';
    const transform = cs.textTransform;
    for (const s of spans) {
      const r = s.getBoundingClientRect();
      let txt = s.textContent;
      if (transform === 'uppercase') txt = txt.toUpperCase();
      g.fillText(txt, r.left * scale, (r.top + r.height * .5) * scale);
    }
    el.innerHTML = prev;

    const img = g.getImageData(0, 0, c.width, c.height).data;
    const pts = [];
    const step = Math.max(2, Math.round(fs * scale / 34));
    for (let y = 0; y < c.height; y += step) {
      for (let x = 0; x < c.width; x += step) {
        if (img[(y * c.width + x) * 4 + 3] > 140) pts.push((x + (Math.random() - .5) * step * .6) / scale, (y + (Math.random() - .5) * step * .6) / scale);
      }
    }
    // перемешать, обрезать до лимита
    const n = Math.min(this.max, pts.length / 2);
    const idx = [...Array(pts.length / 2).keys()];
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [idx[i], idx[j]] = [idx[j], idx[i]]; }
    const tgt = this.geo.attributes.aTarget.array;
    for (let i = 0; i < n; i++) { tgt[i * 2] = pts[idx[i] * 2]; tgt[i * 2 + 1] = pts[idx[i] * 2 + 1]; }
    this.geo.attributes.aTarget.needsUpdate = true;
    this.geo.setDrawRange(0, n);
    this.u.uSize.value = Math.max(1.6, step / scale * .95);
    this.u.uRes.value.set(W, H);
  }
}
