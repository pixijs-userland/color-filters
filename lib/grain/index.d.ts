import { Filter } from 'pixi.js';
export declare class Grain extends Filter {
    private uniforms;
    constructor(value?: number);
    get value(): number;
    set value(value: number);
}
