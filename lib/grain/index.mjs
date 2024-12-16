import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';
import fragment from './fragment.frag.mjs';

class Grain extends Filter {
  constructor(value = 0) {
    const glProgram = GlProgram.from({ fragment, vertex, name: "grain" });
    super({
      glProgram,
      resources: {
        grainUniforms: {
          uValue: { value: 0, type: "f32" },
          uWidth: { value: 0, type: "f32" },
          uHeight: { value: 0, type: "f32" },
          uTimer: { value: 0, type: "f32" }
        }
      }
    });
    this.uniforms = this.resources.grainUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    const [width, height] = this.resources?.filterGlobals?.uniforms?.inputSize ?? [1920, 1080];
    this.uniforms.uWidth = width;
    this.uniforms.uHeight = height;
    this.uniforms.uTimer = 1;
    this.uniforms.uValue = value / 10;
  }
}

export { Grain };
//# sourceMappingURL=index.mjs.map
