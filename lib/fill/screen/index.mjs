import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class Screen extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "screen", value, fillColor });
  }
}

export { Screen };
//# sourceMappingURL=index.mjs.map
