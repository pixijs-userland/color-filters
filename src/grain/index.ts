import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Grain extends Filter
{
    private uniforms: {
        uValue: number;
        uTimer: number;
        uWidth: number;
        uHeight: number;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'grain' });

        super({
            glProgram,
            resources: {
                grainUniforms: {
                    uValue: { value: 0, type: 'f32' },
                    uWidth: { value: 0, type: 'f32' },
                    uHeight: { value: 0, type: 'f32' },
                    uTimer: { value: 0, type: 'f32' },
                },
            },
        });
        this.uniforms = this.resources.grainUniforms.uniforms;
        this.value = value;
    }

    get value(): number
    {
        return this.uniforms.uValue;
    }
    set value(value: number)
    {
        const [width, height] = this.resources?.filterGlobals?.uniforms
            ?.inputSize ?? [1920, 1080];

        this.uniforms.uWidth = width;
        this.uniforms.uHeight = height;
        this.uniforms.uTimer = 1.0;
        this.uniforms.uValue = value / 10;
    }
}
