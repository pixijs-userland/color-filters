'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class HardLight extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "hardLight", value, fillColor });
  }
}

exports.HardLight = HardLight;
//# sourceMappingURL=index.js.map
