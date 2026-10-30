import * as THREE from 'three';

// Пылинки, плывущие в янтарном свете тессеракта (перед камерой финальной сцены)
const vert = /* glsl */`
attribute vec4 aSeed;
uniform float uTime;
uniform float uPx;
uniform vec3 uCenter;
varying float vA;
void main() {
  vec3 p = uCenter + (aSeed.xyz - .5) * vec3(9.0, 6.0, 9.0);
  p += vec3(sin(uTime * .13 + aSeed.w * 40.0), sin(uTime * .09 + aSeed.x * 30.0) * .6 + uTime * .02, cos(uTime * .11 + aSeed.y * 50.0)) * .8;
  p.y = uCenter.y - 3.0 + mod(p.y - uCenter.y + 3.0, 6.0);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float d = -mv.z;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uPx * (.5 + aSeed.w) / max(d, .1), 1.0, 14.0);
  float tw = .55 + .45 * sin(uTime * (1.0 + aSeed.w * 2.0) + aSeed.x * 20.0);
  vA = smoothstep(.2, 1.2, d) * (1.0 - smoothstep(5.0, 9.0, d)) * tw;
}`;
const frag = /* glsl */`
uniform float uMix;
varying float vA;
void main() {
  float r = length(gl_PointCoord - .5);
  float a = smoothstep(.5, .0, r) * vA * uMix;
  gl_FragColor = vec4(vec3(1.0, .72, .38) * 1.6 * a, a);
}`;

export class Motes {
  constructor(count = 420) {
    const g = new THREE.BufferGeometry();
    const seed = new Float32Array(count * 4);
    for (let i = 0; i < seed.length; i++) seed[i] = Math.random();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
    this.mat = new THREE.ShaderMaterial({
      vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false, depthTest: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      uniforms: { uTime: { value: 0 }, uPx: { value: 300 }, uMix: { value: 0 }, uCenter: { value: new THREE.Vector3() } },
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.visible = false;
  }

  update(time, camera, mix, pxScale) {
    const u = this.mat.uniforms;
    u.uTime.value = time; u.uMix.value = mix; u.uPx.value = pxScale;
    // облако держится перед камерой
    camera.getWorldDirection(u.uCenter.value).multiplyScalar(4).add(camera.position);
    this.points.visible = mix > .01;
  }
}
