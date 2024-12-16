import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Vibrance extends Filter
{
    private uniforms: {
        uValue: number;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'vibrance' });

        super({
            glProgram,
            resources: {
                vibranceUniforms: {
                    uValue: { type: 'f32', value: 0 },
                },
            },
        });
        this.uniforms = this.resources.vibranceUniforms.uniforms;
        this.value = value;
    }

    get value(): number
    {
        return this.uniforms.uValue;
    }
    set value(value: number)
    {
        this.uniforms.uValue = value;
    }
}
