# PlasmIT

Marketing site rebuild for PlasmIT / PiMed, implemented in Next.js App Router with shadcn/ui, Tailwind CSS v4, and scroll-driven storytelling components.

This repository contains a full redesign of the PlasmIT website based on the live public site content, with two distinct presentation systems:

- a primary dark narrative system for the main app experience
- a lighter Webflow-inspired alternate system implemented in the `v2` route family and `components/webflow`

## What Was Done

The project was rebuilt from scratch around crawled content and a cleaner information architecture.

- Reframed the homepage around the central PiMed thesis: moving from physical rounds to continuous connected care.
- Rebuilt all key marketing pages for hospitals, investors, product, leadership, values, about, and contact.
- Created a distinct alternate visual system inspired by Webflow/Framer storytelling patterns.
- Reworked the hero experiences to include scroll-driven motion and richer narrative pacing.
- Integrated shadcn-style UI primitives across the project rather than mixing ad hoc component patterns.
- Split the visual language by route family:
  - main app routes use a dark premium palette
  - alternate Webflow-style routes use a lighter editorial palette
- Fixed server/client serialization issues caused by passing icon component functions through route data.
- Added page-specific metadata to all `page.tsx` files in `app/`.
- Added video media for the Webflow-style hero experience.
- Improved navbar timing and visibility on the main homepage so the header appears after hero scroll progression.
- Polished dark-mode forms, footer, navbar, and CTA consistency.
- Documented structured site content in shared data files instead of scattering copy across components.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui component structure
- Radix-based primitives
- Framer Motion
- Motion
- Lenis
- Lucide React

## Project Structure

High-signal directories:

- [app](/Users/aditya/Programming/webDev/plasmit/app): route entrypoints
- [components/site](/Users/aditya/Programming/webDev/plasmit/components/site): primary dark-theme site shell and content sections
- [components/webflow](/Users/aditya/Programming/webDev/plasmit/components/webflow): alternate lighter Webflow-style shell and sections
- [components/contact](/Users/aditya/Programming/webDev/plasmit/components/contact): contact form and office/contact UI
- [components/ui](/Users/aditya/Programming/webDev/plasmit/components/ui): shadcn-style UI primitives and hero animation components
- [lib/site-content.ts](/Users/aditya/Programming/webDev/plasmit/lib/site-content.ts): shared content model used across route families
- [lib/page-metadata.ts](/Users/aditya/Programming/webDev/plasmit/lib/page-metadata.ts): reusable helper for route metadata
- [public](/Users/aditya/Programming/webDev/plasmit/public): static assets including WebM hero video

## Route Families

Current route structure in the repo:

- Primary route:
  - `/`

- Primary content family in filesystem:
  - `/v1`
  - `/v1/pimed`
  - `/v1/hospital-corner`
  - `/v1/investor-corner`
  - `/v1/about-us`
  - `/v1/vision-and-values`
  - `/v1/leadership`
  - `/v1/contact-us`

- Alternate Webflow-style family in filesystem:
  - `/v2`
  - `/v2/pimed`
  - `/v2/hospital-corner`
  - `/v2/investor-corner`
  - `/v2/about-us`
  - `/v2/vision-and-values`
  - `/v2/leadership`
  - `/v2/contact-us`

Important note:

- The `v2` implementation uses Webflow-style components and metadata paths that describe the Webflow variant.
- The shared content layer still references the PlasmIT information architecture and PiMed product narrative.

## Main Functional Areas

### Primary Dark Experience

The main system is built from:

- [components/site/SiteFrame.tsx](/Users/aditya/Programming/webDev/plasmit/components/site/SiteFrame.tsx)
- [components/site/Navbar.tsx](/Users/aditya/Programming/webDev/plasmit/components/site/Navbar.tsx)
- [components/site/SiteFooter.tsx](/Users/aditya/Programming/webDev/plasmit/components/site/SiteFooter.tsx)
- [components/site/PrimaryHeroGallery.tsx](/Users/aditya/Programming/webDev/plasmit/components/site/PrimaryHeroGallery.tsx)
- [components/site/sections.tsx](/Users/aditya/Programming/webDev/plasmit/components/site/sections.tsx)

Key behavior:

- dark theme shell
- hero-first homepage with delayed navbar reveal
- structured story, feature, timeline, split showcase, FAQ, leadership, office, and CTA sections

### Alternate Webflow-Style Experience

The alternate system is built from:

- [components/webflow/WebflowFrame.tsx](/Users/aditya/Programming/webDev/plasmit/components/webflow/WebflowFrame.tsx)
- [components/webflow/WebflowHeroScroll.tsx](/Users/aditya/Programming/webDev/plasmit/components/webflow/WebflowHeroScroll.tsx)
- [components/webflow/sections.tsx](/Users/aditya/Programming/webDev/plasmit/components/webflow/sections.tsx)

Key behavior:

- lighter color palette
- editorial layout structure
- scrollable hero window with embedded video
- alternate CTA, card, timeline, and story treatments

## Content and Metadata

Shared content and metadata were centralized to keep the route families consistent.

- [lib/site-content.ts](/Users/aditya/Programming/webDev/plasmit/lib/site-content.ts) stores the reusable site narrative, leadership data, contact info, hospital metrics, investor highlights, values, and page content blocks.
- [lib/page-metadata.ts](/Users/aditya/Programming/webDev/plasmit/lib/page-metadata.ts) generates consistent `Metadata` objects for App Router pages.
- All `page.tsx` files in `app/` now define explicit metadata instead of relying only on layout defaults.

## Design Decisions

- Main experience uses a darker premium palette with emerald CTA accents.
- Alternate experience uses a brighter, cleaner editorial palette.
- Scroll animation components were integrated into the hero experiences rather than applied as generic page effects.
- Contact form styles support both dark and light variants so the same functional component works across route families.
- Shared content is data-driven, while icon rendering happens inside presentation layers to avoid React Server Component serialization errors.

## Media

Static assets currently include:

- [public/output.webm](/Users/aditya/Programming/webDev/plasmit/public/output.webm)
- [public/media/webflow-hero-demo.webm](/Users/aditya/Programming/webDev/plasmit/public/media/webflow-hero-demo.webm)

## Development

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Run typecheck:

```bash
pnpm typecheck
```

Create a production build:

```bash
pnpm build
```

Run lint:

```bash
pnpm lint
```

## Notes

- Remote image support is configured for Unsplash in [next.config.mjs](/Users/aditya/Programming/webDev/plasmit/next.config.mjs).
- Global theme tokens and route-family styling live in [app/globals.css](/Users/aditya/Programming/webDev/plasmit/app/globals.css).
- Root metadata base is configured in [app/layout.tsx](/Users/aditya/Programming/webDev/plasmit/app/layout.tsx).
- The repository currently points to the GitHub remote `aditya04tripathi/plasmid`. If the GitHub repo is renamed to `plasmit`, the local `origin` URL should be updated to match.
