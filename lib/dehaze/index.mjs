import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class Dehaze extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({ fragment, vertex, name: "dehaze" });
    super({
      glProgram,
      resources: {
        dehazeUniforms: {
          uValue: { value: 0, type: "f32" },
          uSize: { value: new Float32Array(2), type: "vec2<f32>" }
        }
      }
    });
    this.uniforms = this.resources.dehazeUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    const [width, height] = this.resources?.filterGlobals?.uniforms?.inputSize ?? [1920, 1080];
    this.uniforms.uSize[0] = 1 / width;
    this.uniforms.uSize[1] = 1 / height;
    this.uniforms.uValue = value;
  }
}

export { Dehaze };
//# sourceMappingURL=index.mjs.map
