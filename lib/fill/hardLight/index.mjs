import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class HardLight extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "hardLight", value, fillColor });
  }
}

export { HardLight };
//# sourceMappingURL=index.mjs.map
