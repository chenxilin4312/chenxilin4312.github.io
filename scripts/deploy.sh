#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves.
# Uses a throwaway repo inside dist/ so main's history stays clean.
set -euo pipefail

cd "$(dirname "$0")/.."

REMOTE=$(git remote get-url origin)

npm run build

# _astro/ starts with an underscore, which Jekyll would strip.
touch dist/.nojekyll
find dist -name '.DS_Store' -delete

cd dist
rm -rf .git
git init -q
git checkout -qb gh-pages
git add -A
git commit -qm "Deploy site $(date -u '+%Y-%m-%d %H:%M UTC')"
git push -qf "$REMOTE" gh-pages:gh-pages
rm -rf .git

echo "Deployed to https://chenxilin4312.github.io/"
