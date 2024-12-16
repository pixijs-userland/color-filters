'use strict';

var pixi_js = require('pixi.js');

class Contrast extends pixi_js.ColorMatrixFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.contrast(value, false);
    this._value = value;
  }
}

exports.Contrast = Contrast;
//# sourceMappingURL=index.js.map
