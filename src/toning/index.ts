import {
    BufferImageSource,
    Color,
    type ColorSource,
    Filter,
    GlProgram,
    Texture,
    TextureSource,
} from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Toning extends Filter
{
    private _imageData: ImageData;
    private _lightColor: Color;
    private _darkColor: Color;

    private uniforms: {
        uValue: number;
        uLightColor: Float32Array;
        uDarkColor: Float32Array;
        uPaletteMap: Texture;
    };
    constructor(
        value: number = 0,
        lightColor: string = '#ff2200',
        darkColor: string = '#ff00ff',
    )
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'toning' });
        const texture = new Texture({
            dynamic: true,
            source: new TextureSource({
                resource: new BufferImageSource({
                    resource: new Uint8Array(4),
                    width: 1,
                    height: 1,
                }),
            }),
        });

        super({
            glProgram,
            resources: {
                toningUniforms: {
                    uValue: { value: 0, type: 'f32' },
                    uLightColor: { value: new Float32Array(3), type: 'vec3<f32>' },
                    uDarkColor: { value: new Float32Array(3), type: 'vec3<f32>' },
                    uPaletteMap: { value: texture, type: 'sampler2D' },
                },
            },
        });
        this.uniforms = this.resources.toningUniforms.uniforms;
        this._imageData = new ImageData(256, 1);
        this._lightColor = new Color();
        this._darkColor = new Color();
        this.value = value;
        this.lightColor = lightColor;
        this.darkColor = darkColor;
    }

    public update()
    {
        const paletteMap = this._imageData;
        const [r, g, b] = this.uniforms.uLightColor;
        const [rDark, gDark, bDark] = this.uniforms.uDarkColor;

        Toning.fillPaletteMap(
            {
                value: this.uniforms.uValue,
                lightColor: { r: r * 255, g: g * 255, b: b * 255 },
                darkColor: { r: rDark * 255, g: gDark * 255, b: bDark * 255 },
            },
            paletteMap,
        );
        const rawdata = new Uint8Array(Array.from(paletteMap.data)); // Uint8Array

        this.uniforms.uPaletteMap.source.resource = new BufferImageSource({
            resource: rawdata,
            width: paletteMap.width,
            height: paletteMap.height,
        });
    }

    get value(): number
    {
        return this.uniforms.uValue;
    }
    set value(value: number)
    {
        this.uniforms.uValue = value;
        this.update();
    }

    get lightColor(): ColorSource
    {
        return this._lightColor.value as ColorSource;
    }
    set lightColor(value: ColorSource)
    {
        this._lightColor.setValue(value);
        this.uniforms.uLightColor.set(this._lightColor.toRgbArray());
        this.update();
    }

    get darkColor(): ColorSource
    {
        return this._darkColor.value as ColorSource;
    }
    set darkColor(value: ColorSource)
    {
        this._darkColor.setValue(value);
        this.uniforms.uDarkColor.set(this._darkColor.toRgbArray());
        this.update();
    }

    static fillPaletteMap(
        payload: {
            value: number;
            lightColor: { r: number; g: number; b: number };
            darkColor: { r: number; g: number; b: number };
        },
        image: ImageData,
    )
    {
        for (let s = 0; s < 256; ++s)
        {
            const i = s / 255;

            image.data[4 * s] = Math.round(
                payload.lightColor.r * i + payload.darkColor.r * (1 - i),
            );
            image.data[4 * s + 1] = Math.round(
                payload.lightColor.g * i + payload.darkColor.g * (1 - i),
            );
            image.data[4 * s + 2] = Math.round(
                payload.lightColor.b * i + payload.darkColor.b * (1 - i),
            );
        }
    }
}
