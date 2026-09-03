# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Fonts

All three families are SIL OFL: Inter and Caveat install from npm, Nightingale
is committed. A fresh clone builds with the real type, no extra steps. See
[FONTS.md](FONTS.md).

## Deployment

The site is published with GitHub Pages at
<https://chenxilin4312.github.io/>.

`npm run deploy` builds the site and force-pushes `dist/` to the `gh-pages`
branch, which Pages serves. `main` holds the source only.

The repo is named `chenxilin4312.github.io`, so Pages serves it as a *user
page* at the domain root and `astro.config.mjs` sets no `base`. Root-relative
links and assets still go through `withBase()` in `src/lib/base.ts`, which is a
no-op at the root — keep using it, so renaming the repo (which would turn this
back into a project page served from `/<repo>/`) stays a one-line config change
instead of a site-wide find-and-replace.
