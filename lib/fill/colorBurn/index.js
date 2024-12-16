'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class ColorBurn extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "colorBurn", value, fillColor });
  }
}

exports.ColorBurn = ColorBurn;
//# sourceMappingURL=index.js.map
