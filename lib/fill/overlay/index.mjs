import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class Overlay extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "overlay", value, fillColor });
  }
}

export { Overlay };
//# sourceMappingURL=index.mjs.map
