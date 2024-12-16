'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "\nprecision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\n\nuniform float uValue;\n\nvoid main() {\n\n    float bval = 0.0 / 255.0;\n    float wval = (255.0 / (uValue - 255.0) * -1.0);\n\n    vec3 color = texture2D(uTexture, vTextureCoord).rgb;\n    color = color * wval - (bval *  wval);\n\n    finalColor = vec4(color, texture2D(uTexture, vTextureCoord).a);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
