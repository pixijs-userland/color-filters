'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class SoftLight extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "softLight", value, fillColor });
  }
}

exports.SoftLight = SoftLight;
//# sourceMappingURL=index.js.map
