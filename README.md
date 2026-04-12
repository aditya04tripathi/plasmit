# PlasmIT

Marketing site for PlasmIT / PiMed, built with Next.js App Router, shadcn/ui, Tailwind CSS v4, and scroll-driven hero components.

The site uses a shared content model, token-based light/dark theming, and page views composed from marketing sections.

## What Was Done

- Reframed the homepage around the PiMed thesis: moving from physical rounds to continuous connected care.
- Marketing routes for hospitals, investors, product, leadership, values, about, and contact.
- Scroll-driven hero and structured sections (story, features, timeline, split showcase, FAQ, CTA, team).
- shadcn-style UI primitives; icons resolved in client components to avoid server serialization issues.
- Page-specific metadata on `app/**/page.tsx` files.
- Shared copy and structure in `lib/site-content.ts` instead of scattering strings across components.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix primitives)
- Framer Motion / Motion
- Lenis
- Lucide React

## Project Structure

- [app](/app): route entrypoints (`page.tsx`, `layout.tsx`, `globals.css`)
- [components/marketing](/components/marketing): shell (`SiteFrame`, `Navbar`, `SiteFooter`, `PrimaryHeroGallery`, …) and [components/marketing/sections](/components/marketing/sections)
- [components/pages](/components/pages): `*PageView` components per route
- [components/forms/contact](/components/forms/contact): contact form and office map (Leaflet / OpenStreetMap)
- [components/layout](/components/layout): shared layout helpers (e.g. page transitions)
- [components/providers](/components/providers): theme provider
- [components/ui](/components/ui): shadcn-style primitives and hero animation helpers
- [lib/site-content.ts](/lib/site-content.ts): site copy and structured content
- [lib/page-metadata.ts](/lib/page-metadata.ts): metadata helpers
- [public](/public): static assets

## Routes

Static marketing routes include `/`, `/pimed`, `/hospital-corner`, `/investor-corner`, `/about-us`, `/vision-and-values`, `/leadership`, `/contact-us`, and `/_not-found`.

## Content and Metadata

- [lib/site-content.ts](/lib/site-content.ts) holds narrative, leadership, contact, metrics, and page blocks.
- [lib/page-metadata.ts](/lib/page-metadata.ts) builds consistent `Metadata` for App Router pages.

## Design Notes

- Semantic colors and marketing shadows live in [app/globals.css](/app/globals.css).
- Contact form supports light and dark surface variants for different page contexts.

## Media

- [public/output.webm](/public/output.webm): static video asset (if present in your checkout).

## Development

Install dependencies:

```bash
npm install
```

After install, Husky runs via the `prepare` script and installs [`.husky/pre-commit`](.husky/pre-commit) (runs `npm run lint` and `npm run build`) and [`.husky/commit-msg`](.husky/commit-msg) (validates [Conventional Commits](https://www.conventionalcommits.org/) with Commitlint). Commit messages must look like `feat(scope): description`.

Optional: set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` to a URL that accepts `POST` with JSON body matching the contact fields. If unset, the form explains that email is not sent from the site and points users to the address in `lib/site-content.ts`.

Run the dev server:

```bash
npm run dev
```

Typecheck:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Notes

- Remote images (e.g. Unsplash) are configured in [next.config.mjs](/next.config.mjs).
- Root metadata base is set in [app/layout.tsx](/app/layout.tsx).
- The repository may still point at a GitHub remote named `plasmid`; if the repo is renamed to `plasmit`, update `origin` to match.
