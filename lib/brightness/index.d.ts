import { ColorMatrixFilter } from 'pixi.js';
export declare class Brightness extends ColorMatrixFilter {
    private _value;
    constructor(value?: number);
    get value(): number;
    set value(value: number);
}
