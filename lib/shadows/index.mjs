import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from '../highlights/fragment.frag.mjs';

class Shadows extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({ fragment, vertex, name: "shadows" });
    super({
      glProgram,
      resources: {
        shadowsUniforms: {
          uValue: { value: 0, type: "f32" }
        }
      }
    });
    this.uniforms = this.resources.shadowsUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value * -1;
  }
}

export { Shadows };
//# sourceMappingURL=index.mjs.map
