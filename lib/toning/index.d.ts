import { type ColorSource, Filter } from 'pixi.js';
export declare class Toning extends Filter {
    private _imageData;
    private _lightColor;
    private _darkColor;
    private uniforms;
    constructor(value?: number, lightColor?: string, darkColor?: string);
    update(): void;
    get value(): number;
    set value(value: number);
    get lightColor(): ColorSource;
    set lightColor(value: ColorSource);
    get darkColor(): ColorSource;
    set darkColor(value: ColorSource);
    static fillPaletteMap(payload: {
        value: number;
        lightColor: {
            r: number;
            g: number;
            b: number;
        };
        darkColor: {
            r: number;
            g: number;
            b: number;
        };
    }, image: ImageData): void;
}
