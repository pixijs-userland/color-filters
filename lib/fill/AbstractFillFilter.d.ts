import { type ColorSource, Filter } from 'pixi.js';
interface Options {
    value: number;
    fillColor: string;
    name: string;
    fragment: string;
}
export declare abstract class AbstractFillFilter extends Filter {
    private _fillColor;
    private uniforms;
    constructor({ value, fillColor, name, fragment }: Options);
    get fillColor(): ColorSource;
    set fillColor(color: ColorSource);
    get value(): number;
    set value(value: number);
}
export {};
