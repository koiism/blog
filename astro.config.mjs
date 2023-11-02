import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import UnoCSS from 'unocss/astro';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), UnoCSS(), mdx()]
});