import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class Vibrance extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({ fragment, vertex, name: "vibrance" });
    super({
      glProgram,
      resources: {
        vibranceUniforms: {
          uValue: { type: "f32", value: 0 }
        }
      }
    });
    this.uniforms = this.resources.vibranceUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value;
  }
}

export { Vibrance };
//# sourceMappingURL=index.mjs.map
