
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;

void main() {

    vec4 col = texture(uTexture, vTextureCoord.xy);
    vec3 color = col.rgb;

    float luminance = color.r*0.299 + color.g*0.587 + color.b*0.114;
    float mn = min(min(color.r, color.g), color.b);
    float mx = max(max(color.r, color.g), color.b);
    float sat = (1.0-(mx - mn)) * (1.0-mx) * luminance * 5.0;
    vec3 lightness = vec3((mn + mx)/2.0);

    // vibrance
    color = mix(color, mix(color, lightness, -uValue), sat);

    // negative vibrance
    finalColor = vec4(mix(color, lightness, (1.0-lightness)*(1.0-uValue)/2.0*abs(uValue)), col.a);
}
