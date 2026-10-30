import * as THREE from 'three';
import { PLANETS } from './world.js';

const noise = /* glsl */`
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float fbm(vec3 p){ float s = 0.0, a = .5; for (int i = 0; i < 5; i++){ s += a * snoise(p); p *= 2.02; a *= .5; } return s * .5 + .5; }
float fbm3o(vec3 p){ float s = 0.0, a = .5; for (int i = 0; i < 3; i++){ s += a * snoise(p); p *= 2.1; a *= .5; } return s * .5 + .5; }
vec2 voronoi(vec3 x){
  vec3 p = floor(x); vec3 f = fract(x); float d1 = 8.0, d2 = 8.0;
  for (int k = -1; k <= 1; k++) for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec3 b = vec3(float(i), float(j), float(k));
    vec3 o = fract(sin(vec3(dot(p + b, vec3(127.1, 311.7, 74.7)), dot(p + b, vec3(269.5, 183.3, 246.1)), dot(p + b, vec3(113.5, 271.9, 124.6)))) * 43758.5453);
    vec3 r = b + o - f; float d = dot(r, r);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return vec2(sqrt(d1), sqrt(d2));
}
`;

const vert = /* glsl */`
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main(){
  vObj = normalize(position);
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

const frag = (type) => /* glsl */`
#define TYPE ${type}
uniform float uTime; uniform vec3 uAtmo; uniform float uHover; uniform vec3 uFill;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
${noise}
void main(){
  vec3 p = vObj;
  vec3 N = normalize(vN);
  vec3 L = normalize(-vW);           // свет от аккреционного диска
  vec3 V = normalize(cameraPosition - vW);
  vec3 H = normalize(L + V);
  float ndl = dot(N, L);
  float diff = smoothstep(-.08, .9, ndl);
  vec3 sun = vec3(1.0, .80, .58) * 2.4;
  vec3 col = vec3(0.0);
  vec3 emis = vec3(0.0);
  vec3 alb = vec3(0.0);
  float spec = 0.0;

#if TYPE == 0
  // водный мир: гигантские волны
  float sw = sin(dot(p, normalize(vec3(.25, 1.0, .15))) * 70.0 + fbm3o(p * 3.0) * 9.0 - uTime * 1.3);
  float crest = pow(.5 + .5 * sw, 14.0);
  float swell = fbm3o(p * 7.0 + vec3(uTime * .02, 0, 0));
  vec3 deep = vec3(.004, .035, .07), shallow = vec3(.01, .16, .24);
  vec3 water = mix(deep, shallow, smoothstep(.3, .8, swell));
  water += vec3(.55, .7, .75) * crest * (.25 + .5 * swell);
  vec3 Np = normalize(N + (vec3(snoise(p * 26.0 + uTime * .3), snoise(p * 26.0 + 9.0), snoise(p * 26.0 + 17.0 - uTime * .3)) * .14 + vec3(0.0, crest * .3, 0.0)));
  spec = pow(max(dot(Np, H), 0.0), 140.0) * 6.0 + pow(max(dot(N, H), 0.0), 18.0) * .25;
  float cl = smoothstep(.56, .82, fbm(p * 3.2 + vec3(uTime * .012, 0.0, uTime * .006)));
  alb = mix(water, vec3(.85, .9, .95), cl * .85);
  spec *= (1.0 - cl);
#elif TYPE == 1
  // ледяной мир: трещины и замёрзшие облака
  vec2 vr = voronoi(p * 5.5);
  float crack = 1.0 - smoothstep(.0, .06, vr.y - vr.x);
  vec2 vr2 = voronoi(p * 17.0);
  float crack2 = 1.0 - smoothstep(.0, .04, vr2.y - vr2.x);
  vec3 ice = mix(vec3(.62, .76, .88), vec3(.93, .97, 1.0), fbm(p * 3.0));
  ice = mix(ice, vec3(.10, .32, .55), crack * .85 + crack2 * .35);
  float frozen = smoothstep(.52, .7, fbm(p * 2.4 + 5.0));
  ice = mix(ice, vec3(1.0), frozen * .75);
  alb = ice;
  float sss = smoothstep(-.25, .1, ndl) * (1.0 - smoothstep(.1, .45, ndl));
  col += vec3(.08, .35, .75) * sss * .9;
  spec = pow(max(dot(N, H), 0.0), 60.0) * 1.2 * (1.0 - frozen);
#elif TYPE == 2
  // пустынный мир: дюны и пылевые бури
  float dunes = 1.0 - abs(snoise(vec3(p.x * 30.0, p.y * 9.0, p.z * 30.0) + fbm3o(p * 4.0) * 2.0));
  dunes = pow(dunes, 3.0);
  float rock = smoothstep(.55, .75, fbm(p * 4.5 + 2.0));
  vec3 sand = mix(vec3(.70, .34, .13), vec3(1.0, .64, .32), dunes);
  sand = mix(sand, vec3(.28, .16, .10), rock * .8);
  float canyon = 1.0 - smoothstep(.0, .03, abs(snoise(p * 6.0 + 11.0)));
  sand = mix(sand, vec3(.15, .07, .04), canyon * .7);
  float lat = p.y;
  float storm = smoothstep(.5, .85, fbm(vec3(p.x * 3.0 + uTime * .05, p.y * 10.0, p.z * 3.0 - uTime * .04))) * exp(-pow((lat - .22) / .18, 2.0));
  sand = mix(sand, vec3(.98, .78, .52), storm * .85);
  alb = sand;
  spec = pow(max(dot(N, H), 0.0), 20.0) * .08;
#else
  // вулканический мир
  vec2 vr = voronoi(p * 4.2 + vec3(0.0, uTime * .01, 0.0));
  float edge = vr.y - vr.x;
  float crack = 1.0 - smoothstep(.0, .045, edge);
  float crust = fbm(p * 5.0);
  vec3 rock = mix(vec3(.035, .025, .022), vec3(.16, .11, .09), crust);
  float lakes = smoothstep(.62, .7, fbm(p * 2.2 + 3.0));
  float pulse = .75 + .25 * sin(uTime * 1.3 + crust * 12.0);
  alb = rock;
  emis += vec3(1.0, .28, .03) * (crack * 1.5 + lakes * .9) * pulse;
  emis += vec3(1.0, .7, .28) * pow(crack, 4.0) * 1.8 * pulse;
  emis *= .55 + .45 * smoothstep(.4, -.3, ndl); // ночная сторона светится сильнее
  spec = pow(max(dot(N, H), 0.0), 30.0) * .15;
#endif

  float fd = max(dot(N, uFill), 0.0);
  col += alb * (sun * diff + mix(vec3(.30, .42, .62), vec3(.55, .45, .4), float(TYPE == 2)) * fd * .55);
  col += sun * spec * smoothstep(0.0, .2, ndl);
  col += vec3(.5, .65, .9) * pow(max(dot(N, normalize(uFill + V)), 0.0), 40.0) * .12 * fd;
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.5);
  col += uAtmo * rim * smoothstep(-.35, .5, ndl) * 1.6;
  col += vec3(.012, .016, .025) * (1.0 - diff);
  col += emis;
  col += vec3(.62, .85, 1.0) * uHover * rim * 1.5;
  gl_FragColor = vec4(col, 1.0);
}`;

const atmoFrag = /* glsl */`
uniform vec3 uAtmo; uniform float uScale;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main(){
  vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); vec3 L = normalize(-vW);
  float limb = sqrt(1.0 - 1.0 / (uScale * uScale));
  float f = clamp(-dot(N, V) / limb, 0.0, 1.0);
  float glow = pow(f, 3.0);
  float lit = smoothstep(-.4, .6, dot(N, L));
  gl_FragColor = vec4(uAtmo * glow * lit * 1.6, 1.0);
}`;

const ringFrag = /* glsl */`
uniform float uIn; uniform float uOut; uniform vec3 uPlanet; uniform float uR;
varying vec3 vW; varying vec3 vLocal;
float h(float x){ return fract(sin(x * 127.1) * 43758.5); }
float n1(float x){ float i = floor(x), f = fract(x); return mix(h(i), h(i + 1.0), f * f * (3.0 - 2.0 * f)); }
void main(){
  float r = length(vLocal.xy);
  float t = (r - uIn) / (uOut - uIn);
  float bands = n1(t * 60.0) * .6 + n1(t * 180.0) * .4;
  float a = smoothstep(.0, .05, t) * (1.0 - smoothstep(.85, 1.0, t)) * (.25 + .75 * bands);
  a *= 1.0 - smoothstep(.36, .40, t) * (1.0 - smoothstep(.40, .45, t)) * .9;
  // тень планеты на кольце
  vec3 L = normalize(-uPlanet);
  vec3 toP = vW - uPlanet;
  float along = dot(toP, -L);
  float perp = length(toP + L * along);
  float shadow = 1.0 - .8 * smoothstep(0.0, uR * .3, along) * (1.0 - smoothstep(uR * .82, uR * 1.08, perp));
  vec3 c = mix(vec3(.75, .58, .42), vec3(1.0, .85, .66), bands) * 1.4 * shadow;
  gl_FragColor = vec4(c * a, a);
}`;

export class Planets {
  constructor() {
    this.group = new THREE.Group();
    this.items = [];
    const sphere = new THREE.SphereGeometry(1, 96, 64);
    PLANETS.forEach((cfg, i) => {
      const holder = new THREE.Group();
      holder.position.copy(cfg.pos);
      holder.rotation.z = cfg.tilt;
      const atmo = new THREE.Color(...cfg.atmo);
      const mat = new THREE.ShaderMaterial({
        vertexShader: vert, fragmentShader: frag(cfg.type),
        uniforms: { uTime: { value: 0 }, uAtmo: { value: atmo }, uHover: { value: 0 }, uFill: { value: cfg.pos.clone().normalize().add(new THREE.Vector3(0, .55, 0)).normalize() } },
      });
      const mesh = new THREE.Mesh(sphere, mat);
      mesh.scale.setScalar(cfg.radius);
      holder.add(mesh);
      const shell = 1.18;
      const am = new THREE.Mesh(sphere, new THREE.ShaderMaterial({
        vertexShader: vert, fragmentShader: atmoFrag, side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        uniforms: { uAtmo: { value: atmo }, uScale: { value: shell } },
      }));
      am.scale.setScalar(cfg.radius * shell);
      holder.add(am);
      if (cfg.ring) {
        const rIn = cfg.radius * 1.45, rOut = cfg.radius * 2.5;
        const rg = new THREE.RingGeometry(rIn, rOut, 160, 1);
        const rm = new THREE.Mesh(rg, new THREE.ShaderMaterial({
          vertexShader: `varying vec3 vW; varying vec3 vLocal; void main(){ vLocal = position; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
          fragmentShader: ringFrag, side: THREE.DoubleSide, transparent: true, depthWrite: false,
          uniforms: { uIn: { value: rIn }, uOut: { value: rOut }, uPlanet: { value: cfg.pos.clone() }, uR: { value: cfg.radius } },
        }));
        rm.rotation.x = Math.PI / 2 - .12;
        holder.add(rm);
      }
      this.group.add(holder);
      this.items.push({ cfg, holder, mesh, mat, hover: 0, sphere: new THREE.Sphere(cfg.pos.clone(), cfg.radius * 1.05) });
    });
  }

  update(time, dt, hoveredIndex) {
    for (const [i, it] of this.items.entries()) {
      it.mesh.rotation.y += dt * it.cfg.spin;
      it.mat.uniforms.uTime.value = time;
      it.hover += ((i === hoveredIndex ? 1 : 0) - it.hover) * Math.min(1, dt * 8);
      it.mat.uniforms.uHover.value = it.hover;
    }
  }

  pick(ray) {
    let best = -1, bestD = Infinity;
    const tmp = new THREE.Vector3();
    this.items.forEach((it, i) => {
      if (ray.intersectSphere(it.sphere, tmp)) {
        const d = tmp.distanceToSquared(ray.origin);
        if (d < bestD) { bestD = d; best = i; }
      }
    });
    return best;
  }
}
