'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class Multiply extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "multiply", value, fillColor });
  }
}

exports.Multiply = Multiply;
//# sourceMappingURL=index.js.map
