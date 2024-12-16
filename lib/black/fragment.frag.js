'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\n\nuniform float uValue;\n\nvoid main() {\n\n    float bval = uValue / 255.0;\n    float wval = (255.0 / (255.0 - uValue));\n\n    vec3 color = texture2D(uTexture, vTextureCoord).rgb;\n    color = color * wval - (bval *  wval);\n\n    finalColor = vec4(color, texture2D(uTexture, vTextureCoord).a);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
