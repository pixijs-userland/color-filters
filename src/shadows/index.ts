import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from '../highlights/fragment.frag';

export class Shadows extends Filter
{
    private uniforms: {
        uValue: number;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'shadows' });

        super({
            glProgram,
            resources: {
                shadowsUniforms: {
                    uValue: { value: 0, type: 'f32' },
                },
            },
        });
        this.uniforms = this.resources.shadowsUniforms.uniforms;
        this.value = value;
    }
    get value(): number
    {
        return this.uniforms.uValue;
    }
    set value(value: number)
    {
        this.uniforms.uValue = value * -1;
    }
}
