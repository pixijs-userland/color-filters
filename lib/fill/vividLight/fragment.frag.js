'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float value;\nuniform vec4 color;\n\nfloat blendColorBurn(float base, float blend) {\n    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\nfloat blendColorDodge(float base, float blend) {\n    return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\nfloat blendVividLight(float base, float blend) {\n    return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\nvec3 blendVividLight(vec3 base, vec3 blend) {\n    return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvoid main() {\n    vec4 base = texture2D(uTexture, vTextureCoord.xy);\n    finalColor = vec4(blendVividLight(base.rgb, color.rgb, value), base.a);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
