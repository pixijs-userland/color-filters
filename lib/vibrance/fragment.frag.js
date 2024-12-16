'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "\nprecision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\n\nvoid main() {\n\n    vec4 col = texture2D(uTexture, vTextureCoord.xy);\n    vec3 color = col.rgb;\n\n    float luminance = color.r*0.299 + color.g*0.587 + color.b*0.114;\n    float mn = min(min(color.r, color.g), color.b);\n    float mx = max(max(color.r, color.g), color.b);\n    float sat = (1.0-(mx - mn)) * (1.0-mx) * luminance * 5.0;\n    vec3 lightness = vec3((mn + mx)/2.0);\n\n    // vibrance\n    color = mix(color, mix(color, lightness, -uValue), sat);\n\n    // negative vibrance\n    finalColor = vec4(mix(color, lightness, (1.0-lightness)*(1.0-uValue)/2.0*abs(uValue)), col.a);\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
