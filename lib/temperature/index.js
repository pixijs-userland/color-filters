'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class Temperature extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "temperature" });
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

exports.Temperature = Temperature;
//# sourceMappingURL=index.js.map
