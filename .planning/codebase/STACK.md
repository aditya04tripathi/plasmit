# Technology Stack

**Analysis Date:** 2026-04-08

## Languages

**Primary:**
- TypeScript 5.9.3 - Used throughout the application for type safety and development.

**Secondary:**
- Not detected

## Runtime

**Environment:**
- Node.js (Version inferred from `@types/node: ^25.5.0`)

**Package Manager:**
- npm (Lockfile not explicitly verified but `package.json` is present)
- Lockfile: Not explicitly verified in previous steps

## Frameworks

**Core:**
- Next.js 16.1.7 - React framework for the frontend and potentially server-side logic.
- React 19.2.4 - Core UI library.

**Testing:**
- Not detected

**Build/Dev:**
- Turbopack - Used via `next dev --turbopack`.
- Tailwind CSS 4.2.1 - Utility-first CSS framework.
- PostCSS 8 - CSS transformation tool.
- ESLint 9.39.4 - Linting.
- Prettier 3.8.1 - Code formatting.

## Key Dependencies

**UI/Components:**
- `shadcn` ^4.2.0 - UI component primitives.
- `@base-ui/react` ^1.3.0 - Headless UI components.
- `radix-ui` ^1.4.3 - Unstyled, accessible UI primitives.
- `lucide-react` ^1.7.0 - Icon set.
- `recharts` 3.8.0 - Charting library.
- `embla-carousel-react` ^8.6.0 - Carousel functionality.
- `vaul` ^1.1.2 - Drawer components.
- `sonner` ^2.0.7 - Toast notifications.
- `cmdk` ^1.1.1 - Command palette component.

**Styling/Utility:**
- `class-variance-authority` ^0.7.1 - Managing component variants.
- `clsx` ^2.1.1 - Conditional class names.
- `tailwind-merge` ^3.5.0 - Merging Tailwind classes.
- `tw-animate-css` ^1.4.0 - Animation utilities.

**Other:**
- `date-fns` ^4.1.0 - Date manipulation.
- `react-day-picker` ^9.14.0 - Calendar component.
- `react-resizable-panels` ^4.9.0 - Resizable layout panels.
- `input-otp` ^1.4.2 - One-time password input.

## Configuration

**Environment:**
- Not explicitly detailed in `package.json`.

**Build:**
- `tsconfig.json` - TypeScript configuration.
- `package.json` - Script definitions and dependencies.

## Platform Requirements

**Development:**
- Node.js environment.
- npm/yarn/pnpm package manager.

**Production:**
- Likely Vercel or similar Next.js compatible hosting.

---

*Stack analysis: 2026-04-08*
