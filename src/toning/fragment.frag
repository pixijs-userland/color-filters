precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform sampler2D uPaletteMap;
uniform float uValue;

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
    lowp vec4 base = texture2D(uTexture, vTextureCoord.xy);
    float avg = luma(base.rgb);
    float r = texture2D(uPaletteMap, vec2(avg, 0)).r;
    float g = texture2D(uPaletteMap, vec2(avg, 0)).g;
    float b = texture2D(uPaletteMap, vec2(avg, 0)).b;
    finalColor = mix(base, vec4(r, g, b, base.a), uValue);
}
