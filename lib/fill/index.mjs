import { ColorBurn } from './colorBurn/index.mjs';
import { ColorDodge } from './colorDodge/index.mjs';
import { Default } from './default/index.mjs';
import { HardLight } from './hardLight/index.mjs';
import { Multiply } from './multiply/index.mjs';
import { Overlay } from './overlay/index.mjs';
import { Screen } from './screen/index.mjs';
import { SoftLight } from './softLight/index.mjs';
import { VividLight } from './vividLight/index.mjs';

const fillMode = {
  default: Default,
  screen: Screen,
  overlay: Overlay,
  multiply: Multiply,
  colorDodge: ColorDodge,
  colorBurn: ColorBurn,
  hardLight: HardLight,
  softLight: SoftLight,
  vividLight: VividLight
};
class FillFilter {
  static create(mode, value = 0, fillColor = "#ff2200") {
    return new fillMode[mode](value, fillColor);
  }
}

export { FillFilter };
//# sourceMappingURL=index.mjs.map
