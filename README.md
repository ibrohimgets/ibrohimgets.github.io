# Ibrohimjon Muminov — Portfolio

A modern, responsive personal portfolio for an **AI Researcher / Multimodal AI Engineer**.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, statically exported and
deployed to **GitHub Pages** with a custom domain (`ibrohimjon.com`).

- ⚡️ Fully static — no server, deploys anywhere
- 🌗 Light & dark mode (system-aware, remembered)
- 📱 Responsive across desktop, tablet, and mobile
- ♿️ Accessible, semantic HTML with skip-link and focus states
- 🔎 SEO metadata, Open Graph / Twitter cards, JSON-LD, sitemap & robots
- 🎨 White / dark-gray / orange research-focused design system
- 🧩 Reusable components, **all content in one editable data file**

---

## Tech stack

| Area        | Choice                              |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router, static export) |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS 3                      |
| Fonts       | Inter + Space Grotesk (`next/font`, self-hosted) |
| Icons       | Inline SVG (no runtime dependency)  |
| Animation   | IntersectionObserver reveal (no library) |
| Hosting     | GitHub Pages + GitHub Actions       |

---

## Getting started

Requires **Node.js 20+**.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# type-check + production build → static site in ./out
npm run build

# preview the exported static site locally
npm run serve      # serves ./out at http://localhost:3000
```

---

## Editing the content

**Everything on the site is driven by one file:**

```
src/data/portfolio.ts
```

Open it and edit the values — hero text, about, research interests, publications,
patents, projects, experience, education, skills, contact, and SEO metadata.
No component code needs to change. Search for `// EDIT` comments to find the spots
most likely to update (e.g. adding a repo or demo link to a project).

### Swapping assets (in `public/`)

| File                         | What it is                          |
| ---------------------------- | ----------------------------------- |
| `public/profile.jpeg`        | Hero portrait                       |
| `public/MULTIMODAL_AI_ENGINEER_FlowCV_Resume_2026-07-14.pdf` | Downloadable CV (the "View CV" button) |
| `public/og.png`              | Social share image (1200×630)       |
| `src/app/icon.svg`           | Favicon (the "IM" monogram)         |

To replace the CV, drop a new PDF in `public/` and update `hero.cv` in
`src/data/portfolio.ts`. Keep `public/Ibrohimjon_Muminov_CV.pdf` updated as a
legacy fallback for old cached links.

> **Regenerating the OG image:** `public/og.png` is a plain PNG so GitHub Pages
> serves it with the correct MIME type. To change it, replace the file (keep it
> 1200×630) or design a new one.

---

## Deploying to GitHub Pages

This repo is set up to deploy as a **GitHub user site** served at the domain root
with a custom domain — no `basePath` needed.

### 1. Create the repository

For a user site the repo **must** be named exactly:

```
ibrohimgets.github.io
```

Create it on GitHub (empty, no README), then push this project:

```bash
git init
git add -A
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ibrohimgets/ibrohimgets.github.io.git
git push -u origin main
```

### 2. Turn on Pages via Actions

On GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions".**

The included workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
then runs on every push to `main`: it installs deps, runs `npm run build`, and
publishes `./out`. Watch progress under the **Actions** tab.

### 3. Custom domain (`ibrohimjon.com`)

`public/CNAME` already contains `ibrohimjon.com` (it is copied into every build),
so GitHub keeps the custom domain configured. At your DNS provider, point the
domain at GitHub Pages:

**Apex domain `ibrohimjon.com`** — four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

(and optionally the matching `AAAA` records for IPv6:
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)

**`www` subdomain** — a `CNAME` record pointing to `ibrohimgets.github.io`.

Then in **Settings → Pages**, confirm the custom domain is `ibrohimjon.com` and
enable **Enforce HTTPS** once the certificate is issued (can take a few minutes).

> `.nojekyll` (in `public/`) is included so GitHub Pages serves Next.js's
> `_next/` assets without Jekyll interfering.

---

## Deploying to a *project* repo instead

If you'd rather host at `https://<user>.github.io/<repo>/`, build with a `BASE_PATH`
so asset URLs resolve under the sub-path:

```bash
BASE_PATH=/your-repo-name npm run build
```

Remove `public/CNAME` in that case (custom domain not needed), and update
`site.url` in `src/data/portfolio.ts`.

---

## Project structure

```
portfolio/
├─ public/                 # static assets (photo, CV, og.png, CNAME, .nojekyll)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # metadata, SEO, fonts, theme script, JSON-LD
│  │  ├─ page.tsx          # section composition
│  │  ├─ globals.css       # design tokens + Tailwind layers
│  │  ├─ icon.svg          # favicon
│  │  ├─ robots.ts         # → /robots.txt
│  │  └─ sitemap.ts        # → /sitemap.xml
│  ├─ components/          # Navbar, Hero, sections, cards, Button, Reveal…
│  │  └─ icons/            # inline SVG icon set
│  ├─ data/
│  │  └─ portfolio.ts      # ← single source of truth for all content
│  └─ lib/
│     └─ utils.ts          # cn() + asset() helpers
├─ .github/workflows/deploy.yml
├─ next.config.mjs         # output: 'export', images unoptimized
└─ tailwind.config.ts
```

---

## License

Content (text, CV, images) © Ibrohimjon Muminov. Code is free to reuse as a template.
