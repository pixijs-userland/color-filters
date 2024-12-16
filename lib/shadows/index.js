'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('../highlights/fragment.frag.js');

class Shadows extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "shadows" });
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

exports.Shadows = Shadows;
//# sourceMappingURL=index.js.map
