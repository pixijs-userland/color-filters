'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\nuniform float uSize;\nvoid main() {\n    vec4 color = texture2D(uTexture, vTextureCoord);\n    float dist = distance(vTextureCoord, vec2(0.5, 0.5));\n    float grd = smoothstep(0.8, uSize * 0.799, dist * (uValue*0.6 + uSize*2.0));\n    color.rgb += vec3(1.0, 1.0, 1.0) * (1.0 - grd);\n    finalColor = color;\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
