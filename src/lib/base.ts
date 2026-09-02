// Astro rewrites neither root-relative assets nor links to match `base`, so they
// go through here. At the domain root BASE_URL is "/" and this is a no-op; it
// earns its keep if the site ever moves back under a Pages project subpath.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
  // Leave mailto:, https:, and already-relative paths alone.
  if (!path.startsWith("/")) return path;
  return BASE + path;
}
