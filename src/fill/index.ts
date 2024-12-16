import { ColorBurn } from '../fill/colorBurn';
import { ColorDodge } from '../fill/colorDodge';
import { Default } from '../fill/default';
import { HardLight } from '../fill/hardLight';
import { Multiply } from '../fill/multiply';
import { Overlay } from '../fill/overlay';
import { Screen } from '../fill/screen';
import { SoftLight } from '../fill/softLight';
import { VividLight } from '../fill/vividLight';

const fillMode = {
    default: Default,
    screen: Screen,
    overlay: Overlay,
    multiply: Multiply,
    colorDodge: ColorDodge,
    colorBurn: ColorBurn,
    hardLight: HardLight,
    softLight: SoftLight,
    vividLight: VividLight,
};

export type FillModeType = keyof typeof fillMode;

export class FillFilter
{
    public static create<T extends FillModeType>(
        mode: T,
        value: number = 0,
        fillColor: string = '#ff2200',
    )
    {
        return new fillMode[mode](value, fillColor);
    }
}
