'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');

class AbstractFillFilter extends pixi_js.Filter {
  constructor({ value = 0, fillColor = "#f20", name, fragment }) {
    const glProgram = pixi_js.GlProgram.from({ fragment, vertex: _default.default, name });
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
    this._fillColor = new pixi_js.Color();
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

exports.AbstractFillFilter = AbstractFillFilter;
//# sourceMappingURL=AbstractFillFilter.js.map
