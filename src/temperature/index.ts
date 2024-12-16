import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Temperature extends Filter
{
    private uniforms: {
        uValue: number;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'temperature' });

        super({
            glProgram,
            resources: {
                temperatureUniforms: {
                    uValue: { value: 0, type: 'f32' },
                },
            },
        });
        this.uniforms = this.resources.temperatureUniforms.uniforms;
        this.value = value;
    }
    get value(): number
    {
        return this.uniforms.uValue;
    }
    set value(value: number)
    {
        this.uniforms.uValue = value / 6;
    }
}
