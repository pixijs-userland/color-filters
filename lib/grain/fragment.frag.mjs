var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uValue;\nuniform float uTimer;\n\nconst float permTexUnit = 1.0/256.0;\nconst float permTexUnitHalf = 0.5/256.0;\nfloat grainsize = 1.8;\nfloat lumamount = 1.0;\n\nvec4 rnm(in vec2 tc)\n{\n    float noise =  sin(dot(tc + vec2(uTimer,uTimer),vec2(12.9898,78.233))) * 43758.5453;\n    float noiseR =  fract(noise)*2.0-1.0;\n    float noiseG =  fract(noise*1.2154)*2.0-1.0;\n    float noiseB =  fract(noise*1.3453)*2.0-1.0;\n    float noiseA =  fract(noise*1.3647)*2.0-1.0;\n    return vec4(noiseR,noiseG,noiseB,noiseA);\n}\nfloat fade(in float t) {\n    return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\nfloat pnoise3D(in vec3 p)\n{\n    vec3 pi = permTexUnit*floor(p)+permTexUnitHalf;\n    vec3 pf = fract(p);\n    float perm00 = rnm(pi.xy).a ;\n    vec3  grad000 = rnm(vec2(perm00, pi.z)).rgb * 4.0 - 1.0;\n    float n000 = dot(grad000, pf);\n    vec3  grad001 = rnm(vec2(perm00, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n    float n001 = dot(grad001, pf - vec3(0.0, 0.0, 1.0));\n    float perm01 = rnm(pi.xy + vec2(0.0, permTexUnit)).a ;\n    vec3  grad010 = rnm(vec2(perm01, pi.z)).rgb * 4.0 - 1.0;\n    float n010 = dot(grad010, pf - vec3(0.0, 1.0, 0.0));\n    vec3  grad011 = rnm(vec2(perm01, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n    float n011 = dot(grad011, pf - vec3(0.0, 1.0, 1.0));\n    float perm10 = rnm(pi.xy + vec2(permTexUnit, 0.0)).a ;\n    vec3  grad100 = rnm(vec2(perm10, pi.z)).rgb * 4.0 - 1.0;\n    float n100 = dot(grad100, pf - vec3(1.0, 0.0, 0.0));\n    vec3  grad101 = rnm(vec2(perm10, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n    float n101 = dot(grad101, pf - vec3(1.0, 0.0, 1.0));\n    float perm11 = rnm(pi.xy + vec2(permTexUnit, permTexUnit)).a ;\n    vec3  grad110 = rnm(vec2(perm11, pi.z)).rgb * 4.0 - 1.0;\n    float n110 = dot(grad110, pf - vec3(1.0, 1.0, 0.0));\n    vec3  grad111 = rnm(vec2(perm11, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n    float n111 = dot(grad111, pf - vec3(1.0, 1.0, 1.0));\n    vec4 n_x = mix(vec4(n000, n001, n010, n011), vec4(n100, n101, n110, n111), fade(pf.x));\n    vec2 n_xy = mix(n_x.xy, n_x.zw, fade(pf.y));\n    float n_xyz = mix(n_xy.x, n_xy.y, fade(pf.z));\n    return n_xyz;\n}\nvec2 coordRot(in vec2 tc, in float angle)\n{\n    float aspect = uWidth/uHeight;\n    float rotX = ((tc.x*2.0-1.0)*aspect*cos(angle)) - ((tc.y*2.0-1.0)*sin(angle));\n    float rotY = ((tc.y*2.0-1.0)*cos(angle)) + ((tc.x*2.0-1.0)*aspect*sin(angle));\n    rotX = ((rotX/aspect)*0.5+0.5);\n    rotY = rotY*0.5+0.5;\n    return vec2(rotX,rotY);\n}\nvoid main()\n{\n    vec3 rotOffset = vec3(1.425,3.892,5.835);\n    vec2 rotCoordsR = coordRot(vTextureCoord, uTimer + rotOffset.x);\n    vec3 noise = vec3(pnoise3D(vec3(rotCoordsR*vec2(uWidth/grainsize,uHeight/grainsize),0.0)));\n    vec4 tex = texture2D(uTexture, vTextureCoord);\n    vec3 col = tex.rgb;\n    vec3 lumcoeff = vec3(0.299,0.587,0.114);\n    float luminance = mix(0.0,dot(col, lumcoeff),lumamount);\n    float lum = smoothstep(0.2,0.0,luminance);\n    lum += luminance;\n    noise = mix(noise,vec3(0.0),pow(lum,4.0));\n    col = col+noise*uValue;\n    finalColor =  vec4(col, tex.w);\n}\n";

export { fragment as default };
//# sourceMappingURL=fragment.frag.mjs.map
