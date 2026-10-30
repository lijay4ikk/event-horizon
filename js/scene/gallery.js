import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { WORKS } from '../content.js';
import { makeArt } from '../artgen.js';

// Стеклянные карточки работ на спирали вокруг аккреционного диска.
export class Gallery {
  constructor(container, onOpen) {
    this.renderer = new CSS3DRenderer();
    this.renderer.setSize(innerWidth, innerHeight);
    container.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.cards = [];
    this.rot = 0; this.vel = 0;
    this.visible = 0;
    this.onOpen = onOpen;
    this.drag = null;
    this.lang = 'ru';

    WORKS.forEach((w, i) => {
      const el = document.createElement('div');
      el.className = 'card3d';
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = `<div class="c3-img"><img alt="" draggable="false" src="${makeArt(w.art, w.pal, i + 1, 640, 400)}"></div>
        <div class="c3-row"><span class="c3-idx">${String(i + 1).padStart(2, '0')} / ${String(WORKS.length).padStart(2, '0')}</span><span class="c3-idx" style="color:var(--ash)">${w.year}</span></div>
        <div class="c3-title"></div><div class="c3-tags"></div>`;
      const obj = new CSS3DObject(el);
      obj.scale.setScalar(.0088);
      this.scene.add(obj);
      el.addEventListener('click', (e) => {
        if (this.drag && this.drag.moved) return;
        this.onOpen(i, el.querySelector('img'));
      });
      this.cards.push({ el, obj, i, op: -1 });
    });
    this.setLang('ru');

    const down = (e) => {
      if (this.visible < .5 || e.button > 0) return;
      if (e.target.closest('.nav, .minimap, .sheet, #modal, form, footer, button:not(.card3d *)')) return;
      this.drag = { x: e.clientX, last: e.clientX, t: performance.now(), moved: false };
    };
    const move = (e) => {
      if (!this.drag) return;
      const dx = e.clientX - this.drag.last;
      if (Math.abs(e.clientX - this.drag.x) > 6) this.drag.moved = true;
      this.drag.last = e.clientX;
      this.rot += dx * .0042;
      this.vel = dx * .0042 / Math.max(1 / 120, (performance.now() - this.drag.t) / 1000);
      this.drag.t = performance.now();
    };
    const up = () => { if (this.drag) setTimeout(() => { this.drag = null; }, 0); };
    addEventListener('pointerdown', down);
    addEventListener('pointermove', move);
    addEventListener('pointerup', up);
    addEventListener('pointercancel', up);
  }

  setLang(lang) {
    this.lang = lang;
    this.cards.forEach(({ el, i }) => {
      const w = WORKS[i][lang];
      el.querySelector('.c3-title').textContent = w.t;
      el.querySelector('.c3-tags').textContent = w.tags;
    });
  }

  resize(w, h) { this.renderer.setSize(w, h); }

  update(dt, camera, vis, progress) {
    this.visible = vis;
    const el = this.renderer.domElement;
    if (vis <= .001) { if (el.style.display !== 'none') el.style.display = 'none'; return; }
    el.style.display = '';
    if (!this.drag) { this.rot += this.vel * dt; this.vel *= Math.pow(.04, dt); }
    const base = this.rot + progress * 1.9 + performance.now() * .00002;
    const n = this.cards.length;
    const camDist = camera.position.length();
    const tmp = new THREE.Vector3(), toBH = new THREE.Vector3();
    for (const c of this.cards) {
      const k = c.i / n;
      const ang = base + c.i * .82;
      const rad = 7.4 - c.i * .12;
      const y = 2.6 - c.i * .72 + Math.sin(ang * 2) * .12;
      c.obj.position.set(Math.cos(ang) * rad, y, Math.sin(ang) * rad);
      c.obj.lookAt(camera.position);
      // затухание за тенью чёрной дыры и по порядку появления
      tmp.copy(c.obj.position).sub(camera.position);
      const d = tmp.length();
      toBH.copy(camera.position).negate().normalize();
      const angle = Math.acos(THREE.MathUtils.clamp(tmp.normalize().dot(toBH), -1, 1));
      const shadow = Math.asin(Math.min(1, 2.8 / camDist)) * 1.25;
      let occl = d > camDist ? THREE.MathUtils.smoothstep(angle, shadow * .7, shadow * 1.25) : 1;
      const behind = 1 - THREE.MathUtils.smoothstep(d - camDist, -2, 6);
      const appear = THREE.MathUtils.smoothstep(vis * 1.4 - k * .4, 0, .25);
      const op = Math.max(0, Math.min(1, occl * appear * (.35 + .65 * behind)));
      if (Math.abs(op - c.op) > .01) {
        c.el.style.opacity = op.toFixed(3);
        c.el.style.pointerEvents = op > .4 ? 'auto' : 'none';
        c.op = op;
      }
    }
    this.renderer.render(this.scene, camera);
  }
}
