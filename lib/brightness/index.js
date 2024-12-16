'use strict';

var pixi_js = require('pixi.js');

class Brightness extends pixi_js.ColorMatrixFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.brightness(value + 1, false);
    this._value = value;
  }
}

exports.Brightness = Brightness;
//# sourceMappingURL=index.js.map
