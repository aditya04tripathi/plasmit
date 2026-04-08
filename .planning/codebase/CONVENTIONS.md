# Coding Conventions

**Analysis Date:** 2026-04-08

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `ThemeProvider.tsx`)
- UI Components: kebab-case within `components/ui/` (e.g., `button.tsx`, `alert-dialog.tsx`)
- Layouts/Pages: Standard Next.js App Router naming (`page.tsx`, `layout.tsx`)

**Functions:**
- React Components: PascalCase (e.g., `Button`, `ThemeProvider`)
- Utility Functions: camelCase (e.g., `isTypingTarget`)

**Variables:**
- Standard camelCase for local variables and props.

**Types:**
- Interface/Type definitions use PascalCase (e.g., `VariantProps`).

## Code Style

**Formatting:**
- Tool: Prettier
- Integration: Configured via `package.json` script `"format": "prettier --write \"**/*.{ts,tsx}\""`.
- Tailwind: `prettier-plugin-tailwindcss` is used for class sorting.

**Linting:**
- Tool: ESLint
- Configuration: `eslint.config.mjs` using `eslint-config-next` (core-web-vitals and typescript).

## Import Organization

**Path Aliases:**
- `@/*` is used for absolute imports from the project root (e.g., `@/components/ui/button`).

## Error Handling

**Patterns:**
- Not explicitly observed in the current limited sample, but follows standard Next.js/React patterns.

## Logging

**Framework:** console (default)

**Patterns:**
- No custom logging framework detected.

## Comments

**When to Comment:**
- Minimal commenting observed; code relies on descriptive naming and TypeScript types.

## Function Design

**Size:** Components are kept small and focused (e.g., `ThemeHotkey` is a dedicated sub-component).

**Parameters:** 
- Uses destructuring for props with default values (e.g., `variant = "default"` in `Button`).

**Return Values:** Returns JSX for components; boolean/void for utility functions.

## Module Design

**Exports:**
- Named exports are preferred for UI components (e.g., `export { Button, buttonVariants }`).
- Default exports for Next.js pages (`export default function Page()`).

**Barrel Files:**
- Not explicitly used in the root directories, but `components/ui` contains many individual component files.

---

*Convention analysis: 2026-04-08*
