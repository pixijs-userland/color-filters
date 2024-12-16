import { Color, type ColorSource, Filter, GlProgram } from 'pixi.js';
import vertex from '../defaults/default.vert';

interface Options
{
    value: number;
    fillColor: string;
    name: string;
    fragment: string;
}

export abstract class AbstractFillFilter extends Filter
{
    private _fillColor: Color;
    private uniforms: {
        uValue: number;
        uFillColor: Float32Array;
    };
    constructor({ value = 0, fillColor = '#f20', name, fragment }: Options)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name });

        super({
            glProgram,
            resources: {
                [`${name}Uniforms`]: {
                    uValue: { type: 'f32', value: 0 },
                    uFillColor: { type: 'vec4<f32>', value: new Float32Array(4) },
                },
            },
        });
        this.uniforms = this.resources[`${name}Uniforms`].uniforms;
        this._fillColor = new Color();
        this.value = value;
        this.fillColor = fillColor;
    }

    get fillColor(): ColorSource
    {
        return this._fillColor.value as ColorSource;
    }
    set fillColor(color: ColorSource)
    {
        this._fillColor.setValue(color);
        this._fillColor.toArray(this.uniforms.uFillColor);
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
