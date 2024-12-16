var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nuniform float uValue;\n\nvoid main() {\n    vec4 color = texture2D(uTexture, vTextureCoord);\n    color.g = clamp(color.g + uValue, 0.0, 1.0);\n    finalColor = color;\n}\n";

export { fragment as default };
//# sourceMappingURL=fragment.frag.mjs.map
