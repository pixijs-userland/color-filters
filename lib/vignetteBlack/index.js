'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class VignetteBlack extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({
      fragment: fragment.default,
      vertex: _default.default,
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

exports.VignetteBlack = VignetteBlack;
//# sourceMappingURL=index.js.map
