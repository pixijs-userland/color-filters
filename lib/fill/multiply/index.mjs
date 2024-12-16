import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class Multiply extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "multiply", value, fillColor });
  }
}

export { Multiply };
//# sourceMappingURL=index.mjs.map
