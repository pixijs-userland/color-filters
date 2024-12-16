var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float value;\nuniform vec4 color;\n\nfloat blendScreen(float base, float blend) {\n    return 1.0-((1.0-base)*(1.0-blend));\n}\nvec3 blendScreen(vec3 base, vec3 blend) {\n    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvoid main() {\n    vec4 base = texture2D(uTexture, vTextureCoord.xy);\n    finalColor = vec4(blendScreen(base.rgb, color.rgb, value), base.a);\n}\n";

export { fragment as default };
//# sourceMappingURL=fragment.frag.mjs.map
