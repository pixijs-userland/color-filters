# PixiJS Color Filters

Various color filters for pixi.js with TON of presets!

Forked off the wonderful, archived work [@pixi/color-filters](https://github.com/PixiColorEffects/@pixi/color-filters).

[DEMO](https://userland.pixijs.io/color-effects/examples)

![img](./screenshot.png)

# Install

```shell
# npm
npm install @pixi/color-filters

# yarn
yarn add @pixi/color-filters
```

# Usage

```typescript
import { Tint } from "@pixi/color-filters";

const app = new Application();

await app.init();

const filter = new Tint();
app.stage.filters = [filter];

//  change value
let num = 0;
app.ticker.add((delta) => {
  num += 0.1;
  filter.value = Math.sin(num) * 1;
});
```

# License

This project is licensed under the MIT License.
