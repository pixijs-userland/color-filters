import { BlurFilter } from 'pixi.js';

class Blur extends BlurFilter {
  constructor(value = 0) {
    super();
    this._value = 0;
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.strength = value * 10;
    this._value = value;
  }
}

export { Blur };
//# sourceMappingURL=index.mjs.map
