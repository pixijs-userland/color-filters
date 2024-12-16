import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class SoftLight extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "softLight", value, fillColor });
  }
}

export { SoftLight };
//# sourceMappingURL=index.mjs.map
