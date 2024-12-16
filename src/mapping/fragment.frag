#define GLSLIFY 1
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform sampler2D paletteMap;

void main() {
    lowp vec4 base = texture(uTexture, vTextureCoord.xy);
    float r = texture(paletteMap, vec2(base.r, 0)).r;
    float g = texture(paletteMap, vec2(base.g, 0)).g;
    float b = texture(paletteMap, vec2(base.b, 0)).b;
    finalColor = vec4(r, g, b, base.a);
}
