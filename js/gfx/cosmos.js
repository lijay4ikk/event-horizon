import * as THREE from 'three';
import * as S from './shaders.js';
import { WORMHOLE } from '../scene/world.js';

// Полноэкранные «космические» слои: ЧД, линза кротовой норы, туннель, тессеракт
export class Cosmos {
  constructor(pipe) {
    this.pipe = pipe;
    const camU = () => ({
      uCamPos: { value: new THREE.Vector3() }, uCamWorld: { value: new THREE.Matrix4() },
      uProjInv: { value: new THREE.Matrix4() }, uPix: { value: .001 },
    });
    const mk = (frag, uniforms, transparent = false) => new THREE.ShaderMaterial({
      vertexShader: S.quadVert, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false,
      transparent, blending: transparent ? THREE.NormalBlending : THREE.NoBlending,
    });
    this.bh = mk(S.blackHoleFrag, {
      ...camU(), uTime: { value: 0 }, uDiskTime: { value: 0 }, uSteps: { value: 160 },
      uDiskBright: { value: 1 }, uStarBright: { value: 1 }, uFade: { value: 0 },
    });
    this.worm = mk(S.wormholeFrag, {
      ...camU(), uTime: { value: 0 }, uWormPos: { value: WORMHOLE.pos.clone() }, uWormR: { value: WORMHOLE.radius }, uMix: { value: 0 },
    }, true);
    this.tunnel = mk(S.tunnelFrag, {
      uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uMix: { value: 0 }, uProg: { value: 0 }, uSpeed: { value: 1.6 }, uPix: { value: .001 },
    }, true);
    this.tess = mk(S.tesseractFrag, {
      uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uMix: { value: 0 }, uProg: { value: 0 },
      uLook: { value: new THREE.Vector2() }, uWave: { value: -1 }, uMorse: { value: 0 }, uFlicker: { value: 1 }, uPix: { value: .001 }, uPluck: { value: 99 },
    }, true);
  }

  syncCamera(cam) {
    const pix = THREE.MathUtils.degToRad(cam.fov) / Math.max(this.pipe.bgRT.height, 1);
    for (const m of [this.bh, this.worm]) {
      const u = m.uniforms;
      u.uCamPos.value.copy(cam.position);
      u.uCamWorld.value.copy(cam.matrixWorld);
      u.uProjInv.value.copy(cam.projectionMatrixInverse);
      u.uPix.value = pix;
    }
    this.tunnel.uniforms.uRes.value.set(this.pipe.bgRT.width, this.pipe.bgRT.height);
    this.tess.uniforms.uRes.value.set(this.pipe.bgRT.width, this.pipe.bgRT.height);
  }

  render(state) {
    const p = this.pipe;
    p.beginBg();
    if (state.tess < 1) {
      if (state.bh > 0) p.fs(this.bh, p.bgRT);
      if (state.worm > 0.001) { this.worm.uniforms.uMix.value = state.worm; p.fs(this.worm, p.bgRT); }
      if (state.tunnel > 0.001) { this.tunnel.uniforms.uMix.value = state.tunnel; p.fs(this.tunnel, p.bgRT); }
    }
    if (state.tess > 0.001) { this.tess.uniforms.uMix.value = state.tess; p.fs(this.tess, p.bgRT); }
  }
}
