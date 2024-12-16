precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;
uniform vec4 uFillColor;

vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}
vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

void main() {
    vec4 base = texture(uTexture, vTextureCoord.xy);
    finalColor = vec4(blendMultiply(base.rgb, uFillColor.rgb, uValue), base.a);
}
