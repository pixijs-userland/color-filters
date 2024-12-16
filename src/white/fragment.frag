
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;

uniform float uValue;

void main() {

    float bval = 0.0 / 255.0;
    float wval = (255.0 / (uValue - 255.0) * -1.0);

    vec3 color = texture(uTexture, vTextureCoord).rgb;
    color = color * wval - (bval *  wval);

    finalColor = vec4(color, texture(uTexture, vTextureCoord).a);
}
