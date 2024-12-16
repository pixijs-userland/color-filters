import { ColorMatrixFilter } from 'pixi.js';

export class Contrast extends ColorMatrixFilter
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
        this.contrast(value, false);
        this._value = value;
    }
}
