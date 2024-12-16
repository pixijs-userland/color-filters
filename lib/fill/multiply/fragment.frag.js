'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\nuniform vec4 uFillColor;\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n    return base*blend;\n}\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvoid main() {\n    vec4 base = texture2D(uTexture, vTextureCoord.xy);\n    finalColor = vec4(blendMultiply(base.rgb, uFillColor.rgb, uValue), base.a);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
