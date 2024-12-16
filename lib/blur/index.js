'use strict';

var pixi_js = require('pixi.js');

class Blur extends pixi_js.BlurFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.strength = value * 10;
    this._value = value;
  }
}

exports.Blur = Blur;
//# sourceMappingURL=index.js.map
