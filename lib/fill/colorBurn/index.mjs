import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class ColorBurn extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "colorBurn", value, fillColor });
  }
}

export { ColorBurn };
//# sourceMappingURL=index.mjs.map
