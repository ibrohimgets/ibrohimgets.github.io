/** Tiny classname combiner (keeps deps to zero). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefix a public asset with the configured basePath so links keep working
 * whether the site is served from a domain root or a project sub-path.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return path; // external URL or fragment
  return `${base}${path}`;
}
