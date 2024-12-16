import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class VignetteWhite extends Filter
{
    private uniforms: {
        uValue: number;
        uSize: number;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({
            fragment,
            vertex,
            name: 'vignette-white',
        });

        super({
            glProgram,
            resources: {
                vignetteWhiteUniforms: {
                    uValue: { type: 'f32', value: 0 },
                    uSize: { type: 'f32', value: 0.25 },
                },
            },
        });
        this.uniforms = this.resources.vignetteWhiteUniforms.uniforms;
        this.value = value;
    }

    get value(): number
    {
        return this.uniforms.uValue;
    }
    set value(value: number)
    {
        this.uniforms.uValue = (value - 0.1) * 2;
    }
}
