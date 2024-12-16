'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class Overlay extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "overlay", value, fillColor });
  }
}

exports.Overlay = Overlay;
//# sourceMappingURL=index.js.map
