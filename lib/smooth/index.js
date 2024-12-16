'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class Smooth extends pixi_js.Filter {
  constructor(value = 0) {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "smooth" });
    super({
      glProgram,
      resources: {
        smoothUniforms: {
          uMatrix: { value: new Float32Array(9), type: "mat3x3<f32>" },
          uSize: { value: new Float32Array(2), type: "vec2<f32>" },
          uValue: { value: 0, type: "f32" }
        }
      }
    });
    this.uniforms = this.resources.smoothUniforms.uniforms;
    this.value = value;
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    const [width, height] = this.resources?.filterGlobals?.uniforms?.inputSize ?? [1920, 1080];
    this.uniforms.uMatrix = new Float32Array([
      1 / 16,
      2 / 16,
      1 / 16,
      2 / 16,
      0.25,
      2 / 16,
      1 / 16,
      2 / 16,
      1 / 16
    ]);
    this.uniforms.uSize[0] = 1 / width;
    this.uniforms.uSize[1] = 1 / height;
    this.uniforms.uValue = value;
  }
}

exports.Smooth = Smooth;
//# sourceMappingURL=index.js.map
