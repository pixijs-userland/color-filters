import { BlurFilter } from 'pixi.js';

export class Blur extends BlurFilter
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
        this.strength = value * 10;
        this._value = value;
    }
}
