import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class VividLight extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "vividLight", value, fillColor });
  }
}

export { VividLight };
//# sourceMappingURL=index.mjs.map
