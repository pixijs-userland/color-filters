import { AbstractFillFilter } from '../AbstractFillFilter';
import fragment from './fragment.frag';

export class Multiply extends AbstractFillFilter
{
    constructor(value: number = 0, fillColor: string = '#f20')
    {
        super({ fragment, name: 'multiply', value, fillColor });
    }
}
