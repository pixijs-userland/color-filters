'use strict';

var pixi_js = require('pixi.js');
var _default = require('../defaults/default.vert.js');
var fragment = require('./fragment.frag.js');

class Toning extends pixi_js.Filter {
  constructor(value = 0, lightColor = "#ff2200", darkColor = "#ff00ff") {
    const glProgram = pixi_js.GlProgram.from({ fragment: fragment.default, vertex: _default.default, name: "toning" });
    const texture = new pixi_js.Texture({
      dynamic: true,
      source: new pixi_js.TextureSource({
        resource: new pixi_js.BufferImageSource({
          resource: new Uint8Array(4),
          width: 1,
          height: 1
        })
      })
    });
    super({
      glProgram,
      resources: {
        toningUniforms: {
          uValue: { value: 0, type: "f32" },
          uLightColor: { value: new Float32Array(3), type: "vec3<f32>" },
          uDarkColor: { value: new Float32Array(3), type: "vec3<f32>" },
          uPaletteMap: { value: texture, type: "sampler2D" }
        }
      }
    });
    this.uniforms = this.resources.toningUniforms.uniforms;
    this._imageData = new ImageData(256, 1);
    this._lightColor = new pixi_js.Color();
    this._darkColor = new pixi_js.Color();
    this.value = value;
    this.lightColor = lightColor;
    this.darkColor = darkColor;
  }
  update() {
    const paletteMap = this._imageData;
    const [r, g, b] = this.uniforms.uLightColor;
    const [rDark, gDark, bDark] = this.uniforms.uDarkColor;
    Toning.fillPaletteMap(
      {
        value: this.uniforms.uValue,
        lightColor: { r: r * 255, g: g * 255, b: b * 255 },
        darkColor: { r: rDark * 255, g: gDark * 255, b: bDark * 255 }
      },
      paletteMap
    );
    const rawdata = new Uint8Array(Array.from(paletteMap.data));
    this.uniforms.uPaletteMap.source.resource = new pixi_js.BufferImageSource({
      resource: rawdata,
      width: paletteMap.width,
      height: paletteMap.height
    });
  }
  get value() {
    return this.uniforms.uValue;
  }
  set value(value) {
    this.uniforms.uValue = value;
    this.update();
  }
  get lightColor() {
    return this._lightColor.value;
  }
  set lightColor(value) {
    this._lightColor.setValue(value);
    this.uniforms.uLightColor.set(this._lightColor.toRgbArray());
    this.update();
  }
  get darkColor() {
    return this._darkColor.value;
  }
  set darkColor(value) {
    this._darkColor.setValue(value);
    this.uniforms.uDarkColor.set(this._darkColor.toRgbArray());
    this.update();
  }
  static fillPaletteMap(payload, image) {
    for (let s = 0; s < 256; ++s) {
      const i = s / 255;
      image.data[4 * s] = Math.round(
        payload.lightColor.r * i + payload.darkColor.r * (1 - i)
      );
      image.data[4 * s + 1] = Math.round(
        payload.lightColor.g * i + payload.darkColor.g * (1 - i)
      );
      image.data[4 * s + 2] = Math.round(
        payload.lightColor.b * i + payload.darkColor.b * (1 - i)
      );
    }
  }
}

exports.Toning = Toning;
//# sourceMappingURL=index.js.map
