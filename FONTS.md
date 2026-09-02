# Fonts

Three families, three different licences. Only one of them may live in this
repo, which is public.

| Family | Files | Licence | Tracked here? |
| :--- | :--- | :--- | :--- |
| DT Nightingale | `nightingale/DTNightingale-Light.otf` | SIL OFL 1.1 | Yes |
| PP Mori | `mori/PPMori-*.otf` | Pangram Pangram EULA | **No** |
| Comico | `comico/Comico-Regular.woff{,2}` | Fontshare / ITF free EULA | **No** |

DT Nightingale is under the Open Font License, which expressly grants
redistribution, so it is committed alongside `licenses/DTNightingale-LICENSE.txt`.

The other two are git-ignored. Comico's EULA (§02) forbids "uploading them in a
public server", and PP Mori's (§2.1) forbids providing third parties access to
the files — a public repo is both. They stay on disk locally and get copied into
`dist/` at build time, so the built site is unaffected.

## Working from a fresh clone

`mori/` and `comico/` will be missing and the site falls back to the stacks in
`src/styles/tokens.css` — the layout holds, the type just looks wrong. To
restore them, download each family into the directory named above:

- PP Mori — <https://pangrampangram.com/products/mori>
- Comico — <https://www.fontshare.com/fonts/comico>

## Open question on PP Mori

`licenses/PPMori-EULA.pdf` is Pangram Pangram's *free* licence, and under §2.1 a
free licence does not cover use "on a publicly available platform such as a
website" — which is what this site is. The `.otf` files also suggest a desktop
download rather than a web licence, which ships `.woff2`.

If no web licence was purchased, the fix is to swap `--font-body` in
`src/styles/tokens.css` to an OFL sans (Inter and Geist are both close in feel)
and delete `mori/`. If one was purchased, replace the PDF in `licenses/` with
that licence and delete this section.
