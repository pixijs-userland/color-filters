'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class VividLight extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "vividLight", value, fillColor });
  }
}

exports.VividLight = VividLight;
//# sourceMappingURL=index.js.map
