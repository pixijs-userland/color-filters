import { AbstractFillFilter } from '../AbstractFillFilter';
import fragment from './fragment.frag';

export class HardLight extends AbstractFillFilter
{
    constructor(value: number = 0, fillColor: string = '#f20')
    {
        super({ fragment, name: 'hardLight', value, fillColor });
    }
}
