// The site deploys to a GitHub Pages subpath (/chenxilin), so every root-relative
// asset and link has to carry that prefix. Astro rewrites neither, hence this.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
  // Leave mailto:, https:, and already-relative paths alone.
  if (!path.startsWith("/")) return path;
  return BASE + path;
}
