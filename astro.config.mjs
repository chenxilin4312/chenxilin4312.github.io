// @ts-check
import { defineConfig } from 'astro/config';

// Pages serves this as a project page, so everything lives under a subpath.
// A repo rename changes `base` — see README before renaming.
export default defineConfig({
  site: 'https://kevinlin4312-del.github.io',
  base: '/chenxilin.github.io',
  build: {
    // Keep stylesheets external. Font URLs in fonts.css are relative to the
    // emitted CSS file; inlining them into HTML would resolve them against the
    // page URL instead, which differs per route depth.
    inlineStylesheets: 'never',
  },
});
