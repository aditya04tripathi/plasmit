# Codebase Structure

**Analysis Date:** 2026-04-08

## Directory Layout

```
/
├── app/                # Next.js App Router (Pages, Layouts, Global Styles)
├── components/         # React Components
│   ├── ui/             # Atomic UI Primitives (shadcn/ui)
│   └── theme-provider.tsx # Global Theme Wrapper
├── hooks/              # Custom React Hooks
├── lib/                # Utility functions and shared helpers
├── public/             # Static assets
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Directory Purposes

**app/:**
- Purpose: Defines the application routing and page structure.
- Contains: Routes, layouts, and global CSS.
- Key files: `app/layout.tsx` (Root wrapper), `app/page.tsx` (Landing page).

**components/ui/:**
- Purpose: Houses a library of reusable, accessible UI components.
- Contains: Implementation of buttons, inputs, modals, etc.
- Key files: `components/ui/button.tsx`, `components/ui/card.tsx`.

**hooks/:**
- Purpose: Reusable logic that can be shared across components.
- Contains: Custom hooks for state or browser API interaction.
- Key files: `hooks/use-mobile.ts`.

**lib/:**
- Purpose: Utility functions that do not belong to a specific component.
- Contains: Helper functions for class merging and formatting.
- Key files: `lib/utils.ts`.

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: The global shell of the application.
- `app/page.tsx`: The entry point for the root URL.

**Configuration:**
- `next.config.mjs`: Next.js specific configuration.
- `tsconfig.json`: TypeScript rules and path aliases.
- `tailwind.config.js` / `postcss.config.mjs`: Styling configurations.

**Core Logic:**
- `lib/utils.ts`: Core utility for managing Tailwind CSS classes.

**Testing:**
- Not detected (No `.test.ts` or `__tests__` folders present).

## Naming Conventions

**Files:**
- Components: kebab-case (e.g., `theme-provider.tsx`, `button-group.tsx`).
- Utilities/Hooks: kebab-case (e.g., `use-mobile.ts`, `utils.ts`).

**Directories:**
- Standard lowercase (e.g., `app`, `components`, `hooks`).

## Where to Add New Code

**New Feature/Page:**
- Route implementation: `app/[route-name]/page.tsx`.
- Page-specific components: `components/[feature-name]/`.

**New Component/Module:**
- Generic UI element: `components/ui/[component-name].tsx`.
- Complex business component: `components/[feature-name]/[component-name].tsx`.

**Utilities:**
- Shared helpers: `lib/[category].ts`.

**Custom Hooks:**
- Implementation: `hooks/use-[logic-name].ts`.

## Special Directories

**public/:**
- Purpose: Contains static files served at the root.
- Generated: No.
- Committed: Yes.

---

*Structure analysis: 2026-04-08*
