import { Filter } from 'pixi.js';
export declare class Dehaze extends Filter {
    private uniforms;
    constructor(value?: number);
    get value(): number;
    set value(value: number);
}
