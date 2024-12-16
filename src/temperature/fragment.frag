precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.r = clamp(color.r + uValue, 0.0, 1.0);
    color.b = clamp(color.b - uValue, 0.0, 1.0);
    finalColor = color;
}
