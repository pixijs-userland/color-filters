import { ColorMatrixFilter } from 'pixi.js';

class Saturation extends ColorMatrixFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const red = 2 * Number(value) / 3 + 1;
    const blue = -0.5 * (red - 1);
    this.matrix = [
      red,
      blue,
      blue,
      0,
      0,
      blue,
      red,
      blue,
      0,
      0,
      blue,
      blue,
      red,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._value = value;
  }
}

export { Saturation };
//# sourceMappingURL=index.mjs.map
