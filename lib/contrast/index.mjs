import { ColorMatrixFilter } from 'pixi.js';

class Contrast extends ColorMatrixFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.contrast(value, false);
    this._value = value;
  }
}

export { Contrast };
//# sourceMappingURL=index.mjs.map
