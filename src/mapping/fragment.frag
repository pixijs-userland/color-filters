#define GLSLIFY 1
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform sampler2D paletteMap;

void main() {
    lowp vec4 base = texture2D(uTexture, vTextureCoord.xy);
    float r = texture2D(paletteMap, vec2(base.r, 0)).r;
    float g = texture2D(paletteMap, vec2(base.g, 0)).g;
    float b = texture2D(paletteMap, vec2(base.b, 0)).b;
    finalColor = vec4(r, g, b, base.a);
}
