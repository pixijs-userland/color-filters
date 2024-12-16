'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class Highlights extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "highlights" });
    super({
      glProgram,
      resources: {
        highlightsUniforms: {
          uValue: { value: 0, type: "f32" }
        }
      }
    });
    this.uniforms = this.resources.highlightsUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value;
  }
}

exports.Highlights = Highlights;
//# sourceMappingURL=index.js.map
