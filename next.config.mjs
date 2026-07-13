/**
 * Next.js configuration tuned for a fully static export to GitHub Pages.
 *
 * - `output: 'export'` emits a static site into `out/` (no Node server needed).
 * - `basePath` stays empty because this deploys to a GitHub *user* site
 *   (ibrohimgets.github.io) served at the domain root with a custom domain.
 *   If you ever deploy to a *project* repo instead (e.g. github.com/you/portfolio),
 *   set `BASE_PATH=/portfolio` so assets resolve correctly.
 * - Images are `unoptimized` because the Next image optimizer needs a server,
 *   which GitHub Pages does not provide.
 */
const basePath = process.env.BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // The content is fully static; skip lint failures from breaking CI builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
