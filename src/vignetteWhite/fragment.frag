precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;
uniform float uSize;
void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    float dist = distance(vTextureCoord, vec2(0.5, 0.5));
    float grd = smoothstep(0.8, uSize * 0.799, dist * (uValue*0.6 + uSize*2.0));
    color.rgb += vec3(1.0, 1.0, 1.0) * (1.0 - grd);
    finalColor = color;
}
