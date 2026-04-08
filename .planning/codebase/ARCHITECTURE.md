# Architecture

**Analysis Date:** 2026-04-08

## Pattern Overview

**Overall:** Next.js App Router Architecture

**Key Characteristics:**
- **Component-Based:** Heavily relies on React components for UI construction.
- **Server-First:** Uses Next.js 16 App Router, favoring Server Components by default.
- **Atomic UI:** Utilizes a comprehensive UI library (`shadcn/ui` pattern) for consistent design primitives.
- **Client-Side State:** Theme management is handled via `next-themes` and a custom `ThemeProvider`.

## Layers

**UI Components (Atomic):**
- Purpose: Low-level, reusable UI primitives.
- Location: `components/ui/`
- Contains: Specialized React components (e.g., `button.tsx`, `dialog.tsx`, `card.tsx`).
- Depends on: `radix-ui`, `lucide-react`, `class-variance-authority`.
- Used by: Page components and higher-level feature components.

**Application Layout/Pages:**
- Purpose: Defining the routing structure and page-level composition.
- Location: `app/`
- Contains: `layout.tsx` (root layout), `page.tsx` (home page).
- Depends on: UI Components, Hooks, Lib utilities.
- Used by: Next.js routing engine.

**Shared Logic/Utilities:**
- Purpose: Generic helper functions and shared logic.
- Location: `lib/`
- Contains: `utils.ts` (tailwind-merge and clsx wrapper).
- Depends on: `tailwind-merge`, `clsx`.
- Used by: Throughout the codebase for dynamic class styling.

**Custom Hooks:**
- Purpose: Encapsulating reusable stateful logic.
- Location: `hooks/`
- Contains: `use-mobile.ts`.
- Depends on: React.
- Used by: UI components for responsive behavior.

## Data Flow

**Request Flow (Frontend):**
1. User requests a route (e.g., `/`).
2. Next.js matches the route to `app/page.tsx`.
3. `app/layout.tsx` wraps the page, applying the `ThemeProvider`.
4. Components in `components/ui/` are rendered based on the page logic.
5. CSS is applied via `globals.css` and Tailwind CSS.

**State Management:**
- **Theme State:** Managed by `ThemeProvider` in `components/theme-provider.tsx` using `next-themes`.
- **Responsive State:** Managed by `use-mobile.ts` hook for viewport-based UI changes.

## Key Abstractions

**UI Primitive:**
- Purpose: Encapsulates styling and accessibility for common elements.
- Examples: `components/ui/button.tsx`, `components/ui/input.tsx`.
- Pattern: Combines `radix-ui` for logic and `tailwind-css` for styling.

**Theme Provider:**
- Purpose: Global context for dark/light mode.
- Examples: `components/theme-provider.tsx`.
- Pattern: React Context API.

## Entry Points

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Initial page load.
- Responsibilities: Font configuration, global styles, and provider wrapping.

**Home Page:**
- Location: `app/page.tsx`
- Triggers: Navigation to `/`.
- Responsibilities: Rendering the main landing content.

## Error Handling

**Strategy:** Standard Next.js error handling.
- Not explicitly implemented in current skeleton; relies on Next.js default `error.tsx` patterns (though not yet present in the codebase).

## Cross-Cutting Concerns

**Logging:** Not explicitly implemented; standard `console` logging.
**Validation:** Not detected in the current minimal setup.
**Authentication:** Not implemented.

---

*Architecture analysis: 2026-04-08*
