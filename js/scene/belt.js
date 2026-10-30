import * as THREE from 'three';

// Пояс астероидов и пыли вокруг чёрной дыры между станцией и планетами.
// Всё рисуется инстансингом: тысячи камней — один вызов отрисовки.

const R_IN = 39.5, R_OUT = 45.5;

function rng(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const gauss = r => { let u = 0, v = 0; while (u === 0) u = r(); v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.2831853 * v); };

// неровный «камень»: икосаэдр, вершины смещены шумом по направлению
function rockGeometry() {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  const h = (x, y, z) => { const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453; return s - Math.floor(s); };
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = .8 + .22 * h(Math.round(v.x * 100), Math.round(v.y * 100), Math.round(v.z * 100))
      + .22 * Math.sin(v.x * 2.1 + v.y * 1.3) * Math.cos(v.z * 1.7 - v.x)
      + .1 * Math.sin(v.y * 5.3 + v.z * 3.9);
    v.multiplyScalar(n);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

const occl = /* glsl */`
uniform vec3 uCam;
uniform float uShadowCos;
uniform float uReveal;
float hiddenByHole(vec3 c) {
  vec3 toC = c - uCam; vec3 toB = -uCam;
  float dc = length(toC), db = length(toB);
  return (dc > db && dot(toC / dc, toB / db) > uShadowCos) ? 1.0 : 0.0;
}`;

const rockVert = /* glsl */`
attribute vec3 aOff;   // радиус, угол, высота
attribute vec3 aScl;
attribute vec4 aRot;   // ось вращения + скорость
attribute float aSeed;
uniform float uTime;
varying vec3 vW;
varying vec3 vN;
varying vec3 vObj;
varying float vSeed;
varying float vFade;
${occl}
mat3 rotAxis(vec3 a, float t) {
  float c = cos(t), s = sin(t), o = 1.0 - c;
  return mat3(c + a.x*a.x*o, a.y*a.x*o + a.z*s, a.z*a.x*o - a.y*s,
              a.x*a.y*o - a.z*s, c + a.y*a.y*o, a.z*a.y*o + a.x*s,
              a.x*a.z*o + a.y*s, a.y*a.z*o - a.x*s, c + a.z*a.z*o);
}
void main() {
  float ang = aOff.y + uTime * .012 * pow(aOff.x / 55.0, -1.5);
  vec3 c = vec3(sin(ang) * aOff.x, aOff.z, cos(ang) * aOff.x);
  mat3 R = rotAxis(normalize(aRot.xyz), uTime * aRot.w + aSeed * 6.28);
  float dc = distance(c, uCam);
  float s = smoothstep(.6, 3.5, dc) * (1.0 - hiddenByHole(c)) * smoothstep(aSeed * .6, aSeed * .6 + .4, uReveal);
  vec3 w = c + R * (position * aScl) * s;
  vW = w; vSeed = aSeed; vObj = position * 1.7 + aSeed * 31.0;
  vN = normalize(R * (normal / aScl));
  vFade = 1.0 - smoothstep(60.0, 115.0, dc);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`;

const rockFrag = /* glsl */`
varying vec3 vW;
varying vec3 vN;
varying vec3 vObj;
varying float vSeed;
varying float vFade;
float h3(vec3 p) { p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float n3(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
void main() {
  // рельеф: шум + кратеры, возмущают нормаль и цвет
  float n1 = n3(vObj * 3.0), n2 = n3(vObj * 9.0);
  vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW)));
  vec3 N = normalize(normalize(vN) + (vec3(n3(vObj * 6.0 + 1.0), n3(vObj * 6.0 + 7.0), n3(vObj * 6.0 + 13.0)) - .5) * .55);
  vec3 V = normalize(cameraPosition - vW);
  if (dot(Nf, V) < 0.0) N = -N;
  vec3 L = normalize(-vW);
  vec3 F = normalize(V + vec3(0.0, .7, 0.0));
  float diff = max(dot(N, L), 0.0);
  vec3 base = mix(vec3(.13, .12, .11), vec3(.30, .26, .22), fract(vSeed * 7.31)) * (.7 + .45 * n1) * (.85 + .3 * n2);
  float crater = smoothstep(.62, .7, n3(vObj * 4.0 + 3.0));
  base *= 1.0 - crater * .35;
  if (vSeed > .94) base = vec3(.50, .58, .66);           // ледяные глыбы
  else if (vSeed > .88) base = vec3(.34, .19, .12);      // ржавые, богатые железом
  vec3 col = base * (vec3(1.0, .78, .55) * 2.6 * diff + vec3(.30, .42, .62) * .38 * max(dot(N, F), 0.0) + .015);
  float rim = pow(1.0 - max(dot(N, V), 0.0), 4.0) * diff;
  col += vec3(1.0, .7, .45) * rim * .5;
  gl_FragColor = vec4(col * vFade, 1.0);
}`;

const dustVert = /* glsl */`
attribute vec3 aOff;
attribute float aSeed;
uniform float uTime;
uniform float uPx;
varying float vA;
varying float vSeed;
${occl}
void main() {
  float ang = aOff.y + uTime * .012 * pow(aOff.x / 55.0, -1.5);
  vec3 c = vec3(sin(ang) * aOff.x, aOff.z, cos(ang) * aOff.x);
  vec4 mv = viewMatrix * vec4(c, 1.0);
  float d = -mv.z;
  gl_Position = projectionMatrix * mv;
  float near = smoothstep(.3, 2.5, d);
  vA = near * (1.0 - smoothstep(40.0, 100.0, d)) * (1.0 - hiddenByHole(c)) * (.25 + .75 * aSeed) * uReveal;
  vSeed = aSeed;
  gl_PointSize = clamp(uPx * (.6 + aSeed) / d, 1.0, 9.0);
}`;

const dustFrag = /* glsl */`
varying float vA;
varying float vSeed;
void main() {
  vec2 c = gl_PointCoord - .5;
  float a = smoothstep(.5, 0.0, length(c)) * vA;
  vec3 col = mix(vec3(1.0, .72, .45), vec3(.75, .85, 1.0), step(.8, vSeed)) * .9;
  gl_FragColor = vec4(col * a, a);
}`;

export class Belt {
  constructor(count = 1600, dustCount = 6000) {
    this.group = new THREE.Group();
    const r = rng(1337);
    const common = { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uShadowCos: { value: 1 }, uReveal: { value: 1 } };

    const geo = new THREE.InstancedBufferGeometry().copy(rockGeometry());
    geo.instanceCount = count;
    const off = new Float32Array(count * 3), scl = new Float32Array(count * 3), rot = new Float32Array(count * 4), seed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const rad = R_IN + (R_OUT - R_IN) * (.5 + .22 * gauss(r));
      off.set([rad, r() * Math.PI * 2, gauss(r) * 1.1], i * 3);
      const big = r() < .02 ? 2.2 + r() * 1.8 : 1;
      const s = (.05 + Math.pow(r(), 3.2) * .55) * big;
      scl.set([s * (.7 + r() * .6), s * (.6 + r() * .5), s * (.7 + r() * .6)], i * 3);
      rot.set([r() - .5, r() - .5, r() - .5, (r() - .5) * .9], i * 4);
      seed[i] = r();
    }
    geo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 3));
    geo.setAttribute('aScl', new THREE.InstancedBufferAttribute(scl, 3));
    geo.setAttribute('aRot', new THREE.InstancedBufferAttribute(rot, 4));
    geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 1));
    this.rockMat = new THREE.ShaderMaterial({ vertexShader: rockVert, fragmentShader: rockFrag, uniforms: { ...common } });
    this.rocks = new THREE.Mesh(geo, this.rockMat);
    this.rocks.frustumCulled = false;
    this.group.add(this.rocks);

    const dg = new THREE.BufferGeometry();
    const doff = new Float32Array(dustCount * 3), dseed = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i++) {
      const rad = R_IN - 3 + (R_OUT - R_IN + 6) * (.5 + .25 * gauss(r));
      doff.set([rad, r() * Math.PI * 2, gauss(r) * 1.8], i * 3);
      dseed[i] = r();
    }
    dg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(dustCount * 3), 3));
    dg.setAttribute('aOff', new THREE.BufferAttribute(doff, 3));
    dg.setAttribute('aSeed', new THREE.BufferAttribute(dseed, 1));
    this.dustMat = new THREE.ShaderMaterial({
      vertexShader: dustVert, fragmentShader: dustFrag, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      uniforms: { ...common, uPx: { value: 300 } },
    });
    // общие значения для обоих материалов
    this.dustMat.uniforms.uTime = this.rockMat.uniforms.uTime;
    this.dustMat.uniforms.uCam = this.rockMat.uniforms.uCam;
    this.dustMat.uniforms.uShadowCos = this.rockMat.uniforms.uShadowCos;
    this.dustMat.uniforms.uReveal = this.rockMat.uniforms.uReveal;
    this.dust = new THREE.Points(dg, this.dustMat);
    this.dust.frustumCulled = false;
    this.group.add(this.dust);
  }

  update(time, camera, pxScale, reveal = 1) {
    const u = this.rockMat.uniforms;
    u.uReveal.value = reveal;
    u.uTime.value = time;
    u.uCam.value.copy(camera.position);
    const d = camera.position.length();
    u.uShadowCos.value = Math.cos(Math.asin(Math.min(1, 2.75 / d)) * 1.15);
    this.dustMat.uniforms.uPx.value = pxScale;
  }
}
