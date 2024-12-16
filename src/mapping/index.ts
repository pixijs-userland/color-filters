import {
    BufferImageSource,
    Filter,
    GlProgram,
    Texture,
    TextureSource,
} from 'pixi.js';
import vertex from '../defaults/default.vert';
import fragment from './fragment.frag';

export class Mapping extends Filter
{
    private uniforms: {
        uPaletteMap: Texture;
    };
    protected _paletteMap: ImageData;
    constructor(paletteMap: ImageData)
    {
        const glProgram = GlProgram.from({ fragment, vertex, name: 'mapping' });
        const texture = new Texture({
            dynamic: true,
            source: new TextureSource({
                resource: new BufferImageSource({
                    resource: new Uint8Array(Array.from(paletteMap.data)),
                    width: paletteMap.width,
                    height: paletteMap.height,
                }),
            }),
        });

        super({
            glProgram,
            resources: {
                mappingUniforms: {
                    uPaletteMap: { value: texture, type: 'sampler2D' },
                },
            },
        });
        this.uniforms = this.resources.mappingUniforms.uniforms;
        this._paletteMap = paletteMap;
    }
    get paletteMap(): ImageData
    {
        return this._paletteMap;
    }
    set paletteMap(value: ImageData)
    {
        this._paletteMap = value;
        const resource = new Uint8Array(Array.from(value.data)); // Uint8Array

        this.uniforms.uPaletteMap.source.resource = new BufferImageSource({
            resource,
            width: value.width,
            height: value.height,
        });
        this.uniforms.uPaletteMap.source.update();
    }
}
