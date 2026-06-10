# realaspectratiocalculate.com

Free aspect ratio calculator for designers, developers, and video professionals.
Four modes (find missing dimension, identify ratio, resize, scale %), live preview,
50+ named presets across social media, video, photo, and cinema.

**Live site:** https://niranjan-gopal.github.io/realaspectratiocalculate.com/

## Stack

- [Astro 6](https://astro.build/) (static MPA output)
- [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first `@theme` config in `src/styles/global.css`)
- Inter Tight (Google Fonts) as a NouvelR substitute
- Vanilla TypeScript inside `Calculator.astro` for client-side computation

No build-time data fetching, no external API calls at runtime.

## Pages

| Route | Source |
|---|---|
| `/` | `src/pages/index.astro` — calculator + FAQ + common ratios |
| `/social-media-aspect-ratios/` | Instagram, YouTube, TikTok, X, LinkedIn, Pinterest, Facebook |
| `/video-aspect-ratios/` | HD, vertical, cinema, streaming platform export specs |
| `/how-to-calculate-aspect-ratio/` | GCD method, formulas, worked examples |

Cross-page state transfer: any pixel pair on the social or video pages can be sent
to the calculator with a single click via `?w=...&h=...` URL params.

## Local development

Requires Node 22 or higher.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes to dist/
npm run preview  # serves the production build locally
```

## Project structure

```
src/
├── components/   Header.astro, Footer.astro, Calculator.astro
├── layouts/      Layout.astro (sets head, OG, JSON-LD slot, dark-mode FOUC guard)
├── pages/        index.astro and three companion pages above
└── styles/       global.css (Tailwind v4 theme + custom utilities)
public/          static assets served at /
```

## Deployment

GitHub Pages, served under the `/realaspectratiocalculate.com/` base path.
`astro.config.mjs` sets `site` and `base`; every internal link uses
`import.meta.env.BASE_URL` so the same source builds work both locally and
under the GH Pages prefix.

## Design

The visual language is a Renault-inspired system: a strict black-and-white canvas
with a single Sunlight Yellow (`#ffed00`) accent, square corners (`--radius-xs: 2px`),
and Inter Tight as the display face. See `DESIGN.md` for the full reference.
