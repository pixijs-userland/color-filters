import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Dehaze extends Filter
{
    private uniforms: {
        uValue: number;
        uSize: Float32Array;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'dehaze' });

        super({
            glProgram,
            resources: {
                dehazeUniforms: {
                    uValue: { value: 0, type: 'f32' },
                    uSize: { value: new Float32Array(2), type: 'vec2<f32>' },
                },
            },
        });
        this.uniforms = this.resources.dehazeUniforms.uniforms;
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

        this.uniforms.uSize[0] = 1 / width;
        this.uniforms.uSize[1] = 1 / height;
        this.uniforms.uValue = value;
    }
}
