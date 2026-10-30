import * as THREE from 'three';

// Кометы далеко в поле зрения: ядро, ионный (голубой, прямой, от ЧД) и пылевой (тёплый, по траектории) хвосты.
// Каждая появляется перед камерой, медленно пересекает небо и гаснет.

const vert = /* glsl */`
attribute float aKind;     // 0 — пылевой хвост, 1 — ионный
uniform vec3 uHead;
uniform vec3 uVel;
uniform float uLen;
uniform float uWidth;
varying vec2 vQ;
varying float vKind;
void main() {
  // направления берём поперёк луча зрения, иначе хвост укорачивается в точку
  vec3 los = normalize(uHead - cameraPosition);
  vec3 aw = uHead - los * dot(uHead, los);
  vec3 back = -normalize(uVel);
  vec3 away = normalize(length(aw) > 1e-3 ? normalize(aw) + back * .6 : back); // от чёрной дыры
  float x = position.x;                          // 0 у ядра … 1 конец хвоста
  vec3 dir = aKind > .5 ? away : normalize(away + back * (.15 + .35 * x));
  float len = uLen * (aKind > .5 ? 1.15 : .8);
  vec3 p0 = uHead;
  vec3 p1 = uHead + dir * len * max(x, 0.0);
  vec4 h = viewMatrix * vec4(p0, 1.0);
  vec4 c = viewMatrix * vec4(p1, 1.0);
  vec4 e = viewMatrix * vec4(uHead + dir * len, 1.0);
  vec2 axis = e.xy - h.xy;
  vec2 n = length(axis) > 1e-4 ? normalize(vec2(-axis.y, axis.x)) : vec2(0.0, 1.0);
  float w = uWidth * (aKind > .5 ? (.35 + .9 * x) : (.6 + 2.4 * x));
  c.xy += n * position.y * w;
  // ядро чуть выступает вперёд — голова круглая
  if (x < 0.0) c.xy += normalize(axis) * x * uWidth * 2.0;
  gl_Position = projectionMatrix * c;
  vQ = vec2(x, position.y);
  vKind = aKind;
}`;

const frag = /* glsl */`
uniform float uFade;
varying vec2 vQ;
varying float vKind;
void main() {
  float x = clamp(vQ.x, 0.0, 1.0);
  float across = exp(-vQ.y * vQ.y * (vKind > .5 ? 9.0 : 4.0));
  float along = vKind > .5 ? pow(max(1.0 - x, 0.0), 1.6) * (.75 + .25 * sin(x * 40.0 - vQ.y * 3.0)) : pow(max(1.0 - x, 0.0), 2.2);
  vec3 col = vKind > .5 ? vec3(.45, .7, 1.0) * 1.3 : vec3(1.0, .82, .58) * 1.1;
  float head = vKind > .5 ? 0.0 : exp(-(vQ.x * vQ.x * 1600.0 + vQ.y * vQ.y * 14.0)) + .35 * exp(-(vQ.x * vQ.x * 260.0 + vQ.y * vQ.y * 2.5));
  vec3 c = col * across * along * 1.2 + vec3(1.0, .95, .88) * head * 2.6;
  gl_FragColor = vec4(c * uFade, 1.0);
}`;

function cometGeometry() {
  const seg = 28, pos = [], kind = [], idx = [];
  for (let k = 0; k < 2; k++) {
    const base = pos.length / 3;
    for (let i = 0; i <= seg; i++) {
      const x = -0.06 + (i / seg) * 1.06;
      pos.push(x, -1, 0, x, 1, 0); kind.push(k, k);
    }
    for (let i = 0; i < seg; i++) {
      const a = base + i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aKind', new THREE.Float32BufferAttribute(kind, 1));
  g.setIndex(idx);
  return g;
}

export class Comets {
  constructor(count = 2) {
    this.group = new THREE.Group();
    const geo = cometGeometry();
    this.items = [];
    for (let i = 0; i < count; i++) {
      const mat = new THREE.ShaderMaterial({
        vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false,
        blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, side: THREE.DoubleSide,
        uniforms: { uHead: { value: new THREE.Vector3() }, uVel: { value: new THREE.Vector3(1, 0, 0) }, uLen: { value: 30 }, uWidth: { value: .5 }, uFade: { value: 0 } },
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      mesh.visible = false;
      this.group.add(mesh);
      this.items.push({ mesh, u: mat.uniforms, age: 0, life: 0, alive: false, start: new THREE.Vector3(), vel: new THREE.Vector3() });
    }
    this.next = 4 + Math.random() * 4;
    this.v = new THREE.Vector3();
  }

  spawn(c, camera) {
    const f = camera.getWorldDirection(new THREE.Vector3());
    const right = new THREE.Vector3().crossVectors(f, camera.up).normalize();
    const up = new THREE.Vector3().crossVectors(right, f).normalize();
    const d = 150 + Math.random() * 60;
    const side = Math.random() < .5 ? -1 : 1;
    const half = d * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    // старт у края кадра сверху, движение к противоположной стороне и вниз
    c.start.copy(camera.position).addScaledVector(f, d)
      .addScaledVector(right, side * half * camera.aspect * (.35 + Math.random() * .35))
      .addScaledVector(up, half * (.25 + Math.random() * .45));
    const speed = 3.5 + Math.random() * 2.5;
    c.vel.copy(right).multiplyScalar(-side).addScaledVector(up, -(.2 + Math.random() * .35)).normalize().multiplyScalar(speed);
    c.u.uLen.value = d * (.12 + Math.random() * .08);
    c.u.uWidth.value = d * .0042;
    c.age = 0; c.life = 12 + Math.random() * 6; c.alive = true;
    c.mesh.visible = true;
  }

  // active: можно ли запускать новые (открытый космос), dt — реальное время
  update(dt, camera, active) {
    this.next -= dt;
    if (active && this.next <= 0) {
      const free = this.items.find(c => !c.alive);
      if (free) this.spawn(free, camera);
      this.next = 10 + Math.random() * 10;
    }
    let any = false;
    for (const c of this.items) {
      if (!c.alive) continue;
      c.age += dt;
      if (c.age > c.life) { c.alive = false; c.mesh.visible = false; continue; }
      c.u.uHead.value.copy(c.start).addScaledVector(c.vel, c.age);
      c.u.uVel.value.copy(c.vel);
      const fade = Math.min(1, c.age / 2.5) * Math.min(1, (c.life - c.age) / 3) * (active ? 1 : 0);
      c.u.uFade.value += (fade - c.u.uFade.value) * Math.min(1, dt * 3);
      // не рисуем за тенью чёрной дыры
      const toC = this.v.copy(c.u.uHead.value).sub(camera.position);
      const dc = toC.length(), db = camera.position.length();
      const cos = toC.dot(camera.position) / (dc * db) * -1;
      if (dc > db && cos > Math.cos(Math.asin(Math.min(1, 2.9 / db)) * 1.2)) c.u.uFade.value *= .0;
      any = true;
    }
    this.group.visible = any;
  }
}
