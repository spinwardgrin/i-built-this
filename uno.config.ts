// uno.config.ts
import { defineConfig, presetWind } from 'unocss';

export default defineConfig({
  presets: [presetWind({ prefix: 'tw-' })],

  // ...UnoCSS options
});
