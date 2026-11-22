# Future Basement — Portfolio

The portfolio website for **Philip Ross / Future Basement**, replacing the
old Figma Make landing page. A plain Vite + React + TypeScript project —
no special tooling, so it can be pushed to GitHub and auto-deployed by
Vercel.

## What it is

A dark-themed, responsive one-page portfolio:

- **Hero** — Future Basement / Philip Ross, designer, developer, game maker
- **Projects** — Myth of Dryad (tactics game), 2nuki (VTuber persona), Music
- **Services** — Web Design, App Development, Chatbots, Brand Strategy,
  Mobile Solutions, Gear Recommendations & Reviews
- **About** — Philip Ross, Future Basement on Substack, based in the
  Chapel Hill / Carrboro / Durham, NC area
- **Contact** — futurebasement@gmail.com and the Substack link
  (no phone number on the site)

All art is inline SVG / CSS — no external images, so nothing can 404.

## Run it locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

Requires Node 18+ (developed on Node 24).

## Deploy to Vercel from GitHub

1. Push this folder to a new GitHub repository.
2. In Vercel: **Add New → Project → Import Git Repository**, pick the repo.
3. Leave the auto-detected settings as-is (Framework Preset: Vite,
   Production Branch: `main`). Every push to `main` redeploys the live site.

No environment variables are needed — the site is fully static.
