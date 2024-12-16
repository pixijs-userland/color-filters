'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class Grain extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "grain" });
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

exports.Grain = Grain;
//# sourceMappingURL=index.js.map
