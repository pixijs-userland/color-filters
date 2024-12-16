'use strict';

var AbstractFillFilter = require('../AbstractFillFilter.js');
var fragment = require('./fragment.frag.js');

class Screen extends AbstractFillFilter.AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment: fragment.default, name: "screen", value, fillColor });
  }
}

exports.Screen = Screen;
//# sourceMappingURL=index.js.map
