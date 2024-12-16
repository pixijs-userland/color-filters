'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\nuniform vec4 uFillColor;\n\nfloat blendOverlay(float base, float blend) {\n    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\nvec3 blendOverlay(vec3 base, vec3 blend) {\n    return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\nvec3 blendHardLight(vec3 base, vec3 blend) {\n    return blendOverlay(blend,base);\n}\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvoid main() {\n    vec4 base = texture2D(uTexture, vTextureCoord.xy);\n    finalColor = vec4(blendHardLight(base.rgb, uFillColor.rgb, uValue), base.a);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
