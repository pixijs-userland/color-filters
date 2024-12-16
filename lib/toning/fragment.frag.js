'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform sampler2D uPaletteMap;\nuniform float uValue;\n\nfloat luma(vec3 color) {\n    return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nvoid main() {\n    lowp vec4 base = texture2D(uTexture, vTextureCoord.xy);\n    float avg = luma(base.rgb);\n    float r = texture2D(uPaletteMap, vec2(avg, 0)).r;\n    float g = texture2D(uPaletteMap, vec2(avg, 0)).g;\n    float b = texture2D(uPaletteMap, vec2(avg, 0)).b;\n    finalColor = mix(base, vec4(r, g, b, base.a), uValue);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
