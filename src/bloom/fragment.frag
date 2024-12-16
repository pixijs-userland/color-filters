precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform float uValue;
uniform vec2 uSize;
float thresh = .5;

void main() {
    vec4 sum = vec4(0);

    // mess of for loops due to gpu compiler/hardware limitations
    int j=-2;
    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);
    j=-1;
    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);
    j=0;
    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);
    j=1;
    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);
    j=2;
    for( int i=-2; i<=2; i++) sum+=texture2D(uTexture,vTextureCoord+vec2(i,j)*uSize);
    sum/=25.0;

    finalColor= texture2D(uTexture, vTextureCoord);

    // use the blurred colour if it's bright enough
    if (length(sum) > thresh) {
        finalColor += sum*uValue;
    }
}
