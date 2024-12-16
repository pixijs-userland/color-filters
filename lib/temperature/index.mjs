import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class Temperature extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({ fragment, vertex, name: "temperature" });
    super({
      glProgram,
      resources: {
        temperatureUniforms: {
          uValue: { value: 0, type: "f32" }
        }
      }
    });
    this.uniforms = this.resources.temperatureUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value / 6;
  }
}

export { Temperature };
//# sourceMappingURL=index.mjs.map
