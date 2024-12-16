import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class Default extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "default", value, fillColor });
  }
}

export { Default };
//# sourceMappingURL=index.mjs.map
