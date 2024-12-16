'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\nuniform vec4 uFillColor;\n\nvoid main() {\n    vec4 base = texture2D(uTexture, vTextureCoord.xy);\n    finalColor = mix(base, uFillColor, uValue);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
