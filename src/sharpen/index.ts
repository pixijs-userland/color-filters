import { Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Sharpen extends Filter
{
    private uniforms: {
        uMatrix: Float32Array;
        uSize: Float32Array;
        uValue: number;
    };
    constructor(value: number = 0)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'sharpen' });

        super({
            glProgram,
            resources: {
                sharpenUniforms: {
                    uMatrix: { value: new Float32Array(9), type: 'mat3x3<f32>' },
                    uSize: { value: new Float32Array(2), type: 'vec2<f32>' },
                    uValue: { value: 0, type: 'f32' },
                },
            },
        });
        this.uniforms = this.resources.sharpenUniforms.uniforms;
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

        this.uniforms.uMatrix.set([
            -1, -1, -1, -1, 9, -1, -1, -1, -1,
        ]);
        this.uniforms.uSize[0] = 1 / width;
        this.uniforms.uSize[1] = 1 / height;
        this.uniforms.uValue = value / 2;
    }
}
