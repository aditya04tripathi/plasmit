# PlasmIT

PlasmIT is a Next.js App Router marketing site for PiMed (Smart ICU on Mobile). The codebase combines structured marketing pages, a file-based MDX blog, shared content definitions, and a semantic global typography system.

## Highlights

- Next.js 16 + React 19 + TypeScript
- App Router with per-page metadata and Open Graph/Twitter defaults
- Blog system with category pages and dynamic slug pages
- MDX content pipeline using `gray-matter` + `next-mdx-remote/rsc`
- Shared site copy and navigation metadata in a single content module
- Contact form with optional API endpoint and graceful fallback behavior
- Tokenized light/dark theme with global semantic typography in `app/globals.css`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4 + `tw-animate-css`
- shadcn-style UI primitives and Radix/Base UI components
- Framer Motion + Motion
- Leaflet + React Leaflet
- Sonner (toasts)

## Route Map

### Core pages

- `/`
- `/about-us`
- `/contact-us`
- `/hospital-corner`
- `/investor-corner`
- `/leadership`
- `/pimed`
- `/vision-and-values`

### Blog pages

- `/blog`
- `/blog/healthcare`
- `/blog/technical`
- `/blog/[slug]` (generated from MDX files)

## Project Structure

- `app/`
	- Route entry points and layout.
	- `app/layout.tsx` defines fonts and root metadata.
	- `app/globals.css` defines theme tokens, gradients, shadows, and semantic tag-based typography.
- `components/pages/`
	- Per-route page composition (`*PageView` components).
- `components/marketing/`
	- Site shell (`Navbar`, `SiteFooter`, `SiteFrame`, `RouteFocus`) and reusable sections.
- `components/blog/`
	- Blog list/filter/pagination/search/post rendering and MDX component overrides.
- `components/forms/contact/`
	- Contact form + office map slot.
- `components/ui/`
	- Reusable UI primitives (`button`, `card`, `accordion`, `sheet`, `field`, `select`, etc.).
- `content/blog/`
	- MDX post files organized by category (`technical`, `healthcare`).
- `lib/`
	- `site-content.ts`: canonical marketing copy, nav/footer links, contact data.
	- `page-metadata.ts`: shared metadata builder.
	- `blog.ts`: content loading, parsing, sorting, and reading-time calculation.

## Environment Variables

Only one app-level variable is currently used:

- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (optional)

If set, `components/forms/contact/ContactForm.tsx` posts JSON form payloads to this URL.
If unset, the UI shows a fallback message and asks users to email the address from `lib/site-content.ts`.

Create `.env.local` if needed:

```bash
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://your-endpoint.example/api/contact
```

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

The app runs with Turbopack in development (`next dev --turbopack`).

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run start` - Run built app
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript type check (`tsc --noEmit`)
- `npm run format` - Prettier format for `*.ts`/`*.tsx`

## Blog Authoring

Posts are loaded from:

- `content/blog/technical/*.mdx`
- `content/blog/healthcare/*.mdx`

Required frontmatter fields:

```md
---
title: "Post title"
description: "One-line summary"
date: "2026-04-01"
category: "technical" # or "healthcare"
keywords: ["edge", "icu", "monitoring"]
---
```

Implementation notes:

- `lib/blog.ts` reads files, parses frontmatter, computes reading time, and sorts by date.
- `app/blog/[slug]/page.tsx` statically generates slug routes from all MDX posts.

## Theming and Typography

- Fonts are configured in `app/layout.tsx` via `next/font/google`.
- Typography is semantic and tag-driven in `app/globals.css` (`h1..h6`, `p`, `li`, form controls, etc.).
- Theme colors, chart tokens, gradients, and marketing shadows are CSS variables in `:root`/`.dark`.

## Quality Gates and Git Hooks

Husky is configured via `prepare` script and installs hooks from `.husky/`.

- `.husky/pre-commit`
	- Runs `npm run lint`
	- Runs `npm run build`
- `.husky/commit-msg`
	- Runs Commitlint with conventional commit rules

Commitlint config is in `commitlint.config.mjs` and extends `@commitlint/config-conventional`.

## Notes

- `next.config.mjs` currently uses default image config (`images: {}`).
- Route transition top-scroll/focus behavior is handled in `components/marketing/RouteFocus.tsx`.
