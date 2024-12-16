import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class VignetteWhite extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({
      fragment,
      vertex,
      name: "vignette-white"
    });
    super({
      glProgram,
      resources: {
        vignetteWhiteUniforms: {
          uValue: { type: "f32", value: 0 },
          uSize: { type: "f32", value: 0.25 }
        }
      }
    });
    this.uniforms = this.resources.vignetteWhiteUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = (value - 0.1) * 2;
  }
}

export { VignetteWhite };
//# sourceMappingURL=index.mjs.map
