import { ColorBurn } from '../fill/colorBurn';
import { ColorDodge } from '../fill/colorDodge';
import { Default } from '../fill/default';
import { HardLight } from '../fill/hardLight';
import { Multiply } from '../fill/multiply';
import { Overlay } from '../fill/overlay';
import { Screen } from '../fill/screen';
import { SoftLight } from '../fill/softLight';
import { VividLight } from '../fill/vividLight';
declare const fillMode: {
    default: typeof Default;
    screen: typeof Screen;
    overlay: typeof Overlay;
    multiply: typeof Multiply;
    colorDodge: typeof ColorDodge;
    colorBurn: typeof ColorBurn;
    hardLight: typeof HardLight;
    softLight: typeof SoftLight;
    vividLight: typeof VividLight;
};
export type FillModeType = keyof typeof fillMode;
export declare class FillFilter {
    static create<T extends FillModeType>(mode: T, value?: number, fillColor?: string): ColorBurn | ColorDodge | Default | HardLight | Multiply | Overlay | Screen | SoftLight | VividLight;
}
export {};
