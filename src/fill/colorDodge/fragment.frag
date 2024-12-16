precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;
uniform vec4 uFillColor;

float blendColorDodge(float base, float blend) {
    return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}
vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}
vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

void main() {
    vec4 base = texture(uTexture, vTextureCoord.xy);
    finalColor = vec4(blendColorDodge(base.rgb, uFillColor.rgb, uValue), base.a);
}
