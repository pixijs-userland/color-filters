import { BlurFilter } from 'pixi.js';
export declare class Blur extends BlurFilter {
    private _value;
    constructor(value?: number);
    get value(): number;
    set value(value: number);
}
