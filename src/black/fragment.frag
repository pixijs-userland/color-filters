precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;

uniform float uValue;

void main() {

    float bval = uValue / 255.0;
    float wval = (255.0 / (255.0 - uValue));

    vec3 color = texture2D(uTexture, vTextureCoord).rgb;
    color = color * wval - (bval *  wval);

    finalColor = vec4(color, texture2D(uTexture, vTextureCoord).a);
}
