import { ColorMatrixFilter } from 'pixi.js';

class Brightness extends ColorMatrixFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.brightness(value + 1, false);
    this._value = value;
  }
}

export { Brightness };
//# sourceMappingURL=index.mjs.map
