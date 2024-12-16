import { AbstractFillFilter } from '../AbstractFillFilter.mjs';
import fragment from './fragment.frag.mjs';

class ColorDodge extends AbstractFillFilter {
  constructor(value = 0, fillColor = "#f20") {
    super({ fragment, name: "colorDodge", value, fillColor });
  }
}

export { ColorDodge };
//# sourceMappingURL=index.mjs.map
