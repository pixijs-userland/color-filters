'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class Vibrance extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "vibrance" });
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

exports.Vibrance = Vibrance;
//# sourceMappingURL=index.js.map
