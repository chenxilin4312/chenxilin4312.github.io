# Fonts

Every face on the site is under the SIL Open Font License, which permits
redistribution. Nothing here is licence-encumbered, so a clean checkout — CI
included — builds with the real type.

| Role | Family | Source | Licence |
| :--- | :--- | :--- | :--- |
| Display | DT Nightingale | `public/fonts/nightingale/` | SIL OFL 1.1 |
| Body | Inter | `@fontsource/inter` (npm) | SIL OFL 1.1 |
| Hand | Caveat | `@fontsource/caveat` (npm) | SIL OFL 1.1 |

Inter and Caveat are imported in `src/layouts/Layout.astro`, latin subsets only,
at the weights the site actually uses: 200/400/400-italic/600 for Inter, 400 for
Caveat. Vite fingerprints and emits them into `_astro/`. Adding a weight means
adding the matching `@fontsource/...` import — referencing an uninstalled weight
silently falls back.

Nightingale stays in `public/fonts/` with its `@font-face` in
`src/styles/fonts.css`, because it is not on npm. Its URL is relative to the
emitted stylesheet, which is why `build.inlineStylesheets` is `'never'` in
`astro.config.mjs`.

Licence texts for all three are in `licenses/`.

## What this replaced

The site previously used PP Mori for body and Comico for the hand accent. Both
are free-tier licences that forbid redistribution, so they could not be
committed to a public repo — which meant CI, building from a clean checkout,
shipped without them and the deployed site silently fell back to system fonts
while local builds looked correct.

Those files were moved to `~/licensed-fonts-backup/` along with their EULAs.
Nothing in the repo references them. Worth noting if you ever reach for PP Mori
again: its free licence (§2.1) does not cover use "on a publicly available
platform such as a website" at all, so web use needs a purchased licence.
