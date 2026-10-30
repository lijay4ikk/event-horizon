import * as THREE from 'three';
import * as S from './shaders.js';

// Пайплайн: трассировка фона в пониженном разрешении → сцена (HDR) → bloom-мипы
// → анаморфный блик → финальный грейдинг на экран.
export class Pipeline {
  constructor(canvas) {
    const r = this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: false, alpha: false, depth: true, stencil: false,
      powerPreference: 'high-performance', preserveDrawingBuffer: false,
    });
    r.autoClear = false;
    r.setClearColor(0x030305, 1);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NoToneMapping;

    this.fsScene = new THREE.Scene();
    this.fsCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.fsMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.fsMesh.frustumCulled = false;
    this.fsScene.add(this.fsMesh);

    const mk = (frag, uniforms, extra = {}) => new THREE.ShaderMaterial({
      vertexShader: S.quadVert, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false, ...extra,
    });
    this.bgMat = mk(S.bgFrag, { tBg: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.brightMat = mk(S.brightFrag, { tIn: { value: null }, uThresh: { value: 1.25 }, uKnee: { value: 1.8 } });
    this.downMat = mk(S.downFrag, { tIn: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.upMat = mk(S.upFrag, { tIn: { value: null }, tBase: { value: null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1.0 } });
    this.flareMat = mk(S.flareFrag, { tIn: { value: null }, uTexel: { value: new THREE.Vector2() }, uSpread: { value: 2.0 } });
    this.finalMat = mk(S.finalFrag, {
      tScene: { value: null }, tBloom: { value: null }, tFlare: { value: null },
      uRes: { value: new THREE.Vector2() }, uTime: { value: 0 },
      uBloom: { value: .9 }, uFlare: { value: .5 }, uCA: { value: .2 }, uExposure: { value: 1.0 },
      uFade: { value: 0 }, uFlash: { value: 0 }, uFlashColor: { value: new THREE.Color(1, .95, .85) },
      uShake: { value: new THREE.Vector2() }, uSat: { value: 1.0 }, uScan: { value: 0 },
      uRipple: { value: new THREE.Vector4(.5, .5, 0, 0) }, uAspect: { value: 1 },
    });
    this.final = this.finalMat.uniforms;

    this.q = { dpr: 1, bg: .6, samples: 0 };
    this.w = 1; this.h = 1;
    this.targets = [];
  }

  makeRT(w, h, opts = {}) {
    const rt = new THREE.WebGLRenderTarget(Math.max(1, w | 0), Math.max(1, h | 0), {
      type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, stencilBuffer: false, generateMipmaps: false, ...opts,
    });
    this.targets.push(rt);
    return rt;
  }

  setQuality(q) {
    this.q = { ...this.q, ...q };
    this.resize(this.cssW || innerWidth, this.cssH || innerHeight, true);
  }

  resize(cssW, cssH, force = false) {
    const dpr = this.q.dpr;
    const w = Math.round(cssW * dpr), h = Math.round(cssH * dpr);
    if (!force && w === this.w && h === this.h) return;
    this.cssW = cssW; this.cssH = cssH; this.w = w; this.h = h;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(cssW, cssH, false);
    this.targets.forEach(t => t.dispose());
    this.targets = [];

    const bw = Math.round(cssW * Math.min(dpr, 1.5) * this.q.bg), bh = Math.round(cssH * Math.min(dpr, 1.5) * this.q.bg);
    this.bgRT = this.makeRT(bw, bh);
    this.sceneRT = this.makeRT(w, h, { depthBuffer: true, samples: this.q.samples });
    this.down = [];
    let dw = w >> 1, dh = h >> 1;
    for (let i = 0; i < 5; i++) { this.down.push(this.makeRT(dw, dh)); dw = Math.max(1, dw >> 1); dh = Math.max(1, dh >> 1); }
    this.up = this.down.slice(0, 4).map(d => this.makeRT(d.width, d.height));
    const fw = Math.max(1, w >> 3), fh = Math.max(1, h >> 4);
    this.flareA = this.makeRT(fw, fh);
    this.flareB = this.makeRT(fw, fh);
    this.bgMat.uniforms.tBg.value = this.bgRT.texture;
    this.bgMat.uniforms.uTexel.value.set(1 / bw, 1 / bh);
    this.final.uRes.value.set(w, h);
    this.final.uAspect.value = w / h;
  }

  fs(mat, target, clear = false) {
    this.fsMesh.material = mat;
    this.renderer.setRenderTarget(target);
    if (clear) this.renderer.clear(true, false, false);
    this.renderer.render(this.fsScene, this.fsCam);
  }

  beginBg() { this.renderer.setRenderTarget(this.bgRT); this.renderer.clear(true, false, false); }

  beginScene() {
    const r = this.renderer;
    r.setRenderTarget(this.sceneRT);
    r.clear(true, true, false);
    this.fs(this.bgMat, this.sceneRT);
  }

  renderScene(scene, camera) {
    this.renderer.setRenderTarget(this.sceneRT);
    this.renderer.render(scene, camera);
  }

  post(time) {
    const d = this.down, u = this.up;
    this.brightMat.uniforms.tIn.value = this.sceneRT.texture;
    this.fs(this.brightMat, d[0]);
    for (let i = 1; i < d.length; i++) {
      this.downMat.uniforms.tIn.value = d[i - 1].texture;
      this.downMat.uniforms.uTexel.value.set(1 / d[i - 1].width, 1 / d[i - 1].height);
      this.fs(this.downMat, d[i]);
    }
    let src = d[4];
    for (let i = 3; i >= 0; i--) {
      this.upMat.uniforms.tIn.value = src.texture;
      this.upMat.uniforms.tBase.value = d[i].texture;
      this.upMat.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
      this.fs(this.upMat, u[i]);
      src = u[i];
    }
    // анаморфный блик из уровня 1/8
    this.flareMat.uniforms.tIn.value = d[2].texture;
    this.flareMat.uniforms.uTexel.value.set(1 / this.flareA.width, 1 / this.flareA.height);
    this.flareMat.uniforms.uSpread.value = 1.6;
    this.fs(this.flareMat, this.flareA);
    this.flareMat.uniforms.tIn.value = this.flareA.texture;
    this.flareMat.uniforms.uSpread.value = 4.5;
    this.fs(this.flareMat, this.flareB);

    this.final.tScene.value = this.sceneRT.texture;
    this.final.tBloom.value = u[0].texture;
    this.final.tFlare.value = this.flareB.texture;
    this.final.uTime.value = time;
    this.fs(this.finalMat, null);
  }
}
