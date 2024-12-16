import { Filter } from 'pixi.js';
export declare class Mapping extends Filter {
    private uniforms;
    protected _paletteMap: ImageData;
    constructor(paletteMap: ImageData);
    get paletteMap(): ImageData;
    set paletteMap(value: ImageData);
}
