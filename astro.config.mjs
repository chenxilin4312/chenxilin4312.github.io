// @ts-check
import { defineConfig } from 'astro/config';

// Pages serves this as a user page (repo chenxilin4312.github.io), so the site
// lives at the domain root and needs no `base`. Renaming the repo to anything
// else turns it back into a project page — see README before renaming.
export default defineConfig({
  site: 'https://chenxilin4312.github.io',
  build: {
    // Keep stylesheets external. Font URLs in fonts.css are relative to the
    // emitted CSS file; inlining them into HTML would resolve them against the
    // page URL instead, which differs per route depth.
    inlineStylesheets: 'never',
  },
});
