precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform vec2 uSize;
uniform float uMatrix[9];
uniform float uValue;

void main(void) {
    vec4 c11 = texture(uTexture, vTextureCoord - uSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uSize.x, vTextureCoord.y - uSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uSize.x, vTextureCoord.y) ); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uSize.x, vTextureCoord.y) ); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uSize.x, vTextureCoord.y + uSize.y) ); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uSize.y) ); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uSize ); // bottom right

    vec4 color =
    c11 * uMatrix[0] + c12 * uMatrix[1] + c13 * uMatrix[2] +
    c21 * uMatrix[3] + c22 * uMatrix[4] + c23 * uMatrix[5] +
    c31 * uMatrix[6] + c32 * uMatrix[7] + c33 * uMatrix[8];

    finalColor = color * uValue + (c22 * (1.0 - uValue));
}
