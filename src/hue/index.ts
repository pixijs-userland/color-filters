import { ColorMatrixFilter } from 'pixi.js';

export class Hue extends ColorMatrixFilter
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
        this.reset();
        this.hue(value * 180, true);
        this._value = value;
    }
}
