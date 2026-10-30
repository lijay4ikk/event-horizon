import * as THREE from 'three';
import { STATION } from './world.js';

// ── процедурные текстуры корпуса ─────────────────────────────────
function hullTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#7d8086'; g.fillRect(0, 0, 512, 512);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 160; i++) {
    const x = (rnd() * 16 | 0) * 32, y = (rnd() * 16 | 0) * 32, w = (1 + rnd() * 4 | 0) * 32, h = (1 + rnd() * 3 | 0) * 32;
    const v = 105 + rnd() * 50 | 0;
    g.fillStyle = `rgb(${v},${v + 2},${v + 6})`; g.fillRect(x, y, w, h);
  }
  g.strokeStyle = 'rgba(20,22,26,.85)'; g.lineWidth = 2;
  for (let i = 0; i <= 512; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(512, i); g.stroke(); }
  g.fillStyle = 'rgba(30,30,34,.7)';
  for (let i = 0; i < 400; i++) g.fillRect(rnd() * 512, rnd() * 512, 2, 2);
  g.fillStyle = 'rgba(255,106,26,.75)';
  for (let i = 0; i < 10; i++) g.fillRect(rnd() * 480, rnd() * 480, 28, 5);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
}
function windowTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 256, 64);
  let seed = 3; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let x = 6; x < 250; x += 12) {
    if (rnd() < .2) continue;
    const warm = rnd() < .7;
    g.fillStyle = warm ? `rgba(255,${190 + rnd() * 50 | 0},${120 + rnd() * 60 | 0},1)` : 'rgba(159,216,255,1)';
    g.fillRect(x, 26, 7, 12);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function solarTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#0a1426'; g.fillRect(0, 0, 512, 256);
  for (let y = 0; y < 256; y += 32) for (let x = 0; x < 512; x += 32) {
    const gr = g.createLinearGradient(x, y, x + 32, y + 32);
    gr.addColorStop(0, '#16305a'); gr.addColorStop(1, '#0b1730');
    g.fillStyle = gr; g.fillRect(x + 2, y + 2, 28, 28);
  }
  g.fillStyle = '#c9ccd2'; g.fillRect(0, 126, 512, 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
// тонкая золотая сетка-«фольга», светится отражённым светом диска
function solarGlow() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 512, 256);
  g.strokeStyle = 'rgba(255,190,110,.55)'; g.lineWidth = 1.5;
  for (let x = 0; x <= 512; x += 32) { g.beginPath(); g.moveTo(x + .5, 0); g.lineTo(x + .5, 256); g.stroke(); }
  for (let y = 0; y <= 256; y += 32) { g.beginPath(); g.moveTo(0, y + .5); g.lineTo(512, y + .5); g.stroke(); }
  g.fillStyle = 'rgba(255,220,170,.9)'; g.fillRect(0, 126, 512, 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// инвертированная оболочка для подсветки контура
const outlineMat = () => new THREE.ShaderMaterial({
  uniforms: { uColor: { value: new THREE.Color(0x9fd8ff).multiplyScalar(2.6) }, uThick: { value: .045 }, uAlpha: { value: 0 } },
  vertexShader: `uniform float uThick; void main(){ vec3 p = position + normal * uThick; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
  fragmentShader: `uniform vec3 uColor; uniform float uAlpha; void main(){ gl_FragColor = vec4(uColor * uAlpha, uAlpha); }`,
  side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
});

export class Station {
  constructor(envMap) {
    this.group = new THREE.Group();
    this.group.position.copy(STATION.pos);
    this.group.rotation.set(.42, .3, -.28);
    this.modules = {};
    this.pickables = [];
    this.lights = [];
    this.hovered = null;

    const hull = hullTexture();
    const metal = new THREE.MeshStandardMaterial({ color: 0xc8ccd2, map: hull, metalness: .72, roughness: .42, envMap, envMapIntensity: 1.2, flatShading: true });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a2d33, metalness: .85, roughness: .35, envMap, envMapIntensity: 1, flatShading: true });
    const gold = new THREE.MeshStandardMaterial({ color: 0xd9a54a, metalness: 1, roughness: .28, envMap, envMapIntensity: 1.6, flatShading: true });
    const habMat = new THREE.MeshStandardMaterial({ color: 0xd8dbe0, map: hull, metalness: .55, roughness: .5, envMap, emissive: 0xffffff, emissiveMap: windowTexture(), emissiveIntensity: 1.25, flatShading: true });
    const solarMat = new THREE.MeshStandardMaterial({ color: 0xc8d4ff, map: solarTexture(), metalness: .45, roughness: .26, envMap, envMapIntensity: 2.6, emissive: 0xffffff, emissiveMap: solarGlow(), emissiveIntensity: .7, side: THREE.DoubleSide });
    this.mats = [metal, dark, gold, habMat, solarMat];

    const add = (key, mesh, parent = this.group) => {
      parent.add(mesh);
      if (!this.modules[key]) this.modules[key] = { meshes: [], outlines: [] };
      this.modules[key].meshes.push(mesh);
      mesh.userData.module = key;
      this.pickables.push(mesh);
      const o = new THREE.Mesh(mesh.geometry, outlineMat());
      o.renderOrder = 2; mesh.add(o);
      this.modules[key].outlines.push(o);
      return mesh;
    };

    // ядро
    const hub = add('core', new THREE.Mesh(new THREE.CylinderGeometry(.62, .62, 3.4, 10), metal));
    add('core', new THREE.Mesh(new THREE.CylinderGeometry(.35, .62, .6, 10), dark)).position.y = 2.0;
    add('core', new THREE.Mesh(new THREE.CylinderGeometry(.62, .35, .6, 10), dark)).position.y = -2.0;
    const band = add('core', new THREE.Mesh(new THREE.CylinderGeometry(.68, .68, .4, 10), gold)); band.position.y = .6;

    // вращающееся кольцо
    this.spinner = new THREE.Group();
    this.group.add(this.spinner);
    const ringGeo = new THREE.TorusGeometry(3.6, .3, 8, 56); ringGeo.rotateX(Math.PI / 2);
    add('hab', new THREE.Mesh(ringGeo, metal), this.spinner);
    const habGeo = new THREE.BoxGeometry(1.2, .82, .9);
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2 + .26;
      const m = add('hab', new THREE.Mesh(habGeo, habMat), this.spinner);
      m.position.set(Math.cos(a) * 3.6, 0, Math.sin(a) * 3.6);
      m.rotation.y = -a + Math.PI / 2;
    }
    const spokeGeo = new THREE.CylinderGeometry(.07, .07, 3.0, 6); spokeGeo.rotateZ(Math.PI / 2); spokeGeo.translate(2.1, 0, 0);
    for (let i = 0; i < 3; i++) {
      const s = add('hab', new THREE.Mesh(spokeGeo, dark), this.spinner);
      s.rotation.y = i / 3 * Math.PI * 2 + .78;
    }
    const habAnchor = new THREE.Object3D(); habAnchor.position.set(Math.cos(.26) * 3.6, .45, Math.sin(.26) * 3.6);
    this.spinner.add(habAnchor);

    // солнечные панели
    const boom = add('solar', new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 3.2, 6), dark)); boom.position.y = 3.6;
    const panelGeo = new THREE.BoxGeometry(3.6, .035, 1.25);
    for (const sx of [-1, 1]) {
      for (const k of [0, 1]) {
        const p = add('solar', new THREE.Mesh(panelGeo, solarMat));
        p.position.set(sx * (2.05 + k * 3.75), 4.2 + k * 0, 0);
        p.rotation.x = .35;
      }
      const arm = add('solar', new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, 7.6, 5), dark));
      arm.rotation.z = Math.PI / 2; arm.position.set(sx * 3.9, 4.2, 0);
    }
    const solarAnchor = new THREE.Object3D(); solarAnchor.position.set(-5.8, 4.4, 0); this.group.add(solarAnchor);

    // антенна дальней связи
    const dishPts = [];
    for (let i = 0; i <= 10; i++) { const x = i / 10 * 1.15; dishPts.push(new THREE.Vector2(x, x * x * .42)); }
    const dishGeo = new THREE.LatheGeometry(dishPts, 18);
    const dishArm = new THREE.Group(); dishArm.position.set(.62, 1.3, 0); this.group.add(dishArm);
    const strut = add('dish', new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 1.4, 5), dark), dishArm);
    strut.rotation.z = Math.PI / 2; strut.position.x = .7;
    const dish = add('dish', new THREE.Mesh(dishGeo, new THREE.MeshStandardMaterial({ color: 0xe9ebee, metalness: .4, roughness: .3, envMap, side: THREE.DoubleSide, flatShading: true })), dishArm);
    dish.position.set(1.5, 0, 0); dish.rotation.set(0, 0, -1.25);
    this.dish = dish;
    const feed = add('dish', new THREE.Mesh(new THREE.ConeGeometry(.06, .55, 5), gold), dish); feed.position.y = .55;
    const dishAnchor = new THREE.Object3D(); dishAnchor.position.set(0, .5, 0); dish.add(dishAnchor);

    // стыковочный узел
    const dockTruss = add('dock', new THREE.Mesh(new THREE.BoxGeometry(.28, 2.6, .28), dark)); dockTruss.position.y = -3.5;
    const dockRingGeo = new THREE.TorusGeometry(.55, .1, 6, 20); dockRingGeo.rotateX(Math.PI / 2);
    const dockRing = add('dock', new THREE.Mesh(dockRingGeo, gold)); dockRing.position.y = -4.9;
    for (const s of [-1, 1]) {
      const pod = add('dock', new THREE.Mesh(new THREE.CapsuleGeometry(.24, .9, 3, 8), metal));
      pod.position.set(s * .62, -3.4, 0);
    }
    const coreAnchor = new THREE.Object3D(); coreAnchor.position.set(0, 1.9, .5); this.group.add(coreAnchor);

    // навигационные огни
    const lightGeo = new THREE.SphereGeometry(.06, 6, 4);
    const mkLight = (pos, color, phase, parent = this.group) => {
      const m = new THREE.Mesh(lightGeo, new THREE.MeshBasicMaterial({ color }));
      m.position.copy(pos); parent.add(m);
      this.lights.push({ m, color: new THREE.Color(color), phase });
    };
    mkLight(new THREE.Vector3(-7.7, 4.2, 0), 0xff3020, 0);
    mkLight(new THREE.Vector3(7.7, 4.2, 0), 0x30ff70, .5);
    mkLight(new THREE.Vector3(0, 5.25, 0), 0xffffff, .25);
    mkLight(new THREE.Vector3(0, -5.1, 0), 0xff6a1a, .75);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; mkLight(new THREE.Vector3(Math.cos(a) * 3.6, .34, Math.sin(a) * 3.6), 0x9fd8ff, i / 6, this.spinner); }

    this.anchors = { core: coreAnchor, hab: habAnchor, dish: dishAnchor, solar: solarAnchor, dock: dockRing };

    // челнок: облетает станцию, горит двигатель, за ним тянется след
    const ship = this.ship = new THREE.Group();
    const hullGeo = new THREE.CylinderGeometry(.06, .2, 1.1, 6); hullGeo.rotateX(Math.PI / 2);
    ship.add(new THREE.Mesh(hullGeo, metal));
    const nose = new THREE.Mesh(new THREE.ConeGeometry(.06, .32, 6), gold); nose.rotation.x = Math.PI / 2; nose.position.z = .7; ship.add(nose);
    const wingGeo = new THREE.BoxGeometry(.9, .025, .34); wingGeo.translate(0, 0, -.25);
    const wing = new THREE.Mesh(wingGeo, dark); ship.add(wing);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(.025, .26, .3), dark); fin.position.set(0, .14, -.36); ship.add(fin);
    const cockpit = new THREE.Mesh(new THREE.SphereGeometry(.07, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x9fd8ff).multiplyScalar(2.2) }));
    cockpit.position.set(0, .07, .32); ship.add(cockpit);
    this.engine = new THREE.Mesh(new THREE.SphereGeometry(.11, 10, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, .55, .2).multiplyScalar(9), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.engine.position.z = -.6; this.engine.scale.set(1, 1, 1.8); ship.add(this.engine);
    ship.scale.setScalar(1.15);
    this.group.add(ship);
    const TRAIL = 70;
    const tg = new THREE.BufferGeometry();
    this.trailPos = new Float32Array(TRAIL * 3);
    const tc = new Float32Array(TRAIL * 3);
    for (let i = 0; i < TRAIL; i++) { const k = Math.pow(1 - i / TRAIL, 2.2); tc.set([3.2 * k, 1.5 * k, .55 * k], i * 3); }
    tg.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3));
    tg.setAttribute('color', new THREE.BufferAttribute(tc, 3));
    this.trail = new THREE.Line(tg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.trail.frustumCulled = false;
    this.group.add(this.trail);
    this.trailN = 0;
    this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3(); this._f = new THREE.Vector3(0, 0, 1);
    this.labels = {
      core: ['CORE', 'ядро · реактор 4.2 ГВт'],
      hab: ['HAB-RING', 'жилой контур · 0.38 g'],
      solar: ['SOLAR ARRAY', 'панели · 42 кВт'],
      dish: ['COMMS', 'дальняя связь · 8.4 ГГц'],
      dock: ['DOCK', 'шлюз · свободен'],
    };
  }

  setHover(key) {
    this.hovered = key;
  }

  shipPos(t, out) {
    // вытянутая наклонная орбита с «нырком» мимо кольца
    const a = t * .32;
    return out.set(Math.cos(a) * 10.5, 1.4 + Math.sin(a * 2) * 1.6 + Math.sin(a) * 1.2, Math.sin(a) * 7);
  }

  update(time, dt) {
    this.spinner.rotation.y += dt * .12;
    // челнок
    const p = this.shipPos(time, this._v), n = this.shipPos(time + .05, this._v2);
    this.ship.position.copy(p);
    this.ship.quaternion.setFromUnitVectors(this._f, n.sub(p).normalize());
    this.engine.scale.set(1, 1, 1.6 + Math.sin(time * 40) * .25);
    const tp = this.trailPos;
    tp.copyWithin(3, 0, tp.length - 3);
    const back = this._v2.copy(this._f).applyQuaternion(this.ship.quaternion).multiplyScalar(-.7 * 1.15).add(p);
    tp[0] = back.x; tp[1] = back.y; tp[2] = back.z;
    if (this.trailN < tp.length / 3) { this.trailN++; for (let i = this.trailN; i < tp.length / 3; i++) { tp[i * 3] = back.x; tp[i * 3 + 1] = back.y; tp[i * 3 + 2] = back.z; } }
    this.trail.geometry.attributes.position.needsUpdate = true;
    this.group.rotation.y += dt * .012;
    this.dish.rotation.x = Math.sin(time * .3) * .25;
    for (const l of this.lights) {
      const on = ((time * .8 + l.phase) % 1) < .12 ? 1 : .08;
      l.m.material.color.copy(l.color).multiplyScalar(on * 6);
    }
    for (const key in this.modules) {
      const target = key === this.hovered ? 1 : 0;
      for (const o of this.modules[key].outlines) {
        const u = o.material.uniforms.uAlpha;
        u.value += (target - u.value) * Math.min(1, dt * 10);
        o.visible = u.value > .01;
      }
    }
  }

  anchorWorld(key, out) {
    return this.anchors[key].getWorldPosition(out);
  }
}

// Окружение для PBR: тёплая полоса света от диска со стороны ЧД
export function makeEnvMap(renderer) {
  const scene = new THREE.Scene();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `varying vec3 vD;
      void main(){
        vec3 d = normalize(vD);
        vec3 toBH = normalize(vec3(-0.19, -0.04, -0.98));
        float a = max(dot(d, toBH), 0.0);
        float disk = exp(-pow(d.y + .04, 2.0) * 140.0) * pow(a, 3.0);
        vec3 c = vec3(.006, .007, .011);
        c += vec3(1.0, .62, .26) * disk * 9.0 + vec3(1.0, .8, .55) * pow(a, 40.0) * 6.0;
        c += vec3(.25, .4, .6) * max(d.y, 0.0) * .05;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 48, 24), mat));
  const pm = new THREE.PMREMGenerator(renderer);
  const rt = pm.fromScene(scene, 0, .1, 100);
  pm.dispose();
  return rt.texture;
}
