import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class Exposure extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({ fragment, vertex, name: "exposure" });
    super({
      glProgram,
      resources: {
        exposureUniforms: {
          uValue: { value: 0, type: "f32" }
        }
      }
    });
    this.uniforms = this.resources.exposureUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value;
  }
}

export { Exposure };
//# sourceMappingURL=index.mjs.map
