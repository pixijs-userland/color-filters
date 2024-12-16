import { Filter, GlProgram, Color } from 'pixi.js';
import vertex from '../defaults/default.vert.mjs';

class AbstractFillFilter extends Filter {
  constructor({ value = 0, fillColor = "#f20", name, fragment }) {
    const glProgram = GlProgram.from({ fragment, vertex, name });
    super({
      glProgram,
      resources: {
        [`${name}Uniforms`]: {
          uValue: { type: "f32", value: 0 },
          uFillColor: { type: "vec4<f32>", value: new Float32Array(4) }
        }
      }
    });
    this.uniforms = this.resources[`${name}Uniforms`].uniforms;
    this._fillColor = new Color();
    this.value = value;
    this.fillColor = fillColor;
  }
  get fillColor() {
    return this._fillColor.value;
  }
  set fillColor(color) {
    this._fillColor.setValue(color);
    this._fillColor.toArray(this.uniforms.uFillColor);
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value;
  }
}

export { AbstractFillFilter };
//# sourceMappingURL=AbstractFillFilter.mjs.map
