'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\nuniform vec2 uSize;\nfloat thresh = .5;\n\nvoid main() {\n    vec4 sum = vec4(0);\n\n    // mess of for loops due to gpu compiler/hardware limitations\n    int j=-2;\n    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);\n    j=-1;\n    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);\n    j=0;\n    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);\n    j=1;\n    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);\n    j=2;\n    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);\n    sum/=25.0;\n\n    finalColor= texture2D(uTexture, vTextureCoord);\n\n    // use the blurred colour if it's bright enough\n    if (length(sum) > thresh) {\n        finalColor += sum*uValue;\n    }\n}\n";

exports.default = fragment;
//# sourceMappingURL=fragment.frag.js.map
