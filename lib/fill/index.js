'use strict';

var index$5 = require('./colorBurn/index.js');
var index$4 = require('./colorDodge/index.js');
var index = require('./default/index.js');
var index$6 = require('./hardLight/index.js');
var index$3 = require('./multiply/index.js');
var index$2 = require('./overlay/index.js');
var index$1 = require('./screen/index.js');
var index$7 = require('./softLight/index.js');
var index$8 = require('./vividLight/index.js');

const fillMode = {
  default: index.Default,
  screen: index$1.Screen,
  overlay: index$2.Overlay,
  multiply: index$3.Multiply,
  colorDodge: index$4.ColorDodge,
  colorBurn: index$5.ColorBurn,
  hardLight: index$6.HardLight,
  softLight: index$7.SoftLight,
  vividLight: index$8.VividLight
};
class FillFilter {
  static create(mode, value = 0, fillColor = "#ff2200") {
    return new fillMode[mode](value, fillColor);
  }
}

exports.FillFilter = FillFilter;
//# sourceMappingURL=index.js.map
