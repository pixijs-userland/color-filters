'use strict';

var pixi_js = require('pixi.js');

class Hue extends pixi_js.ColorMatrixFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.reset();
    this.hue(value * 180, true);
    this._value = value;
  }
}

exports.Hue = Hue;
//# sourceMappingURL=index.js.map
