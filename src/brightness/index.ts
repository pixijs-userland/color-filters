import { ColorMatrixFilter } from 'pixi.js';

export class Brightness extends ColorMatrixFilter
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
        this.brightness(value + 1, false);
        this._value = value;
    }
}
