import { ColorMatrixFilter } from 'pixi.js';

export class Saturation extends ColorMatrixFilter
{
    private _value: number = 0;
    constructor(value: number = 0)
    {
        super();
        this.value = value;
    }

    get value(): number
    {
        return this._value;
    }
    set value(value: number)
    {
        const red = (2 * Number(value)) / 3 + 1;
        const blue = -0.5 * (red - 1);

        this.matrix = [
            red,
            blue,
            blue,
            0,
            0,
            blue,
            red,
            blue,
            0,
            0,
            blue,
            blue,
            red,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
        ];
        this._value = value;
    }
}
