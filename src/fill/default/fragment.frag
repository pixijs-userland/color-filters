precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;
uniform vec4 uFillColor;

void main() {
    vec4 base = texture2D(uTexture, vTextureCoord.xy);
    finalColor = mix(base, uFillColor, uValue);
}
