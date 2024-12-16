'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class VignetteWhite extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({
      fragment: fragment.default,
      vertex: _default.default,
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

exports.VignetteWhite = VignetteWhite;
//# sourceMappingURL=index.js.map
