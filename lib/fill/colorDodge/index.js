'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class ColorDodge extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "colorDodge", value, fillColor });
  }
}

exports.ColorDodge = ColorDodge;
//# sourceMappingURL=index.js.map
