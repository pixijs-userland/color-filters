import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class VignetteBlack extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({
      fragment,
      vertex,
      name: "vignette-black"
    });
    super({
      glProgram,
      resources: {
        vignetteBlackUniforms: {
          uValue: { type: "f32", value: 0 },
          uSize: { type: "f32", value: 0.25 }
        }
      }
    });
    this.uniforms = this.resources.vignetteBlackUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = (value - 0.1) * 2;
  }
}

export { VignetteBlack };
//# sourceMappingURL=index.mjs.map
