import React from "react"

/**
 * MDX component overrides — PlasmIT type scale.
 *
 * Hierarchy inside an article body (the article title sits above this in
 * blog-post-view.tsx at Tier 1 size):
 *
 *   H1  clamp(1.65rem → 2.2rem)   — rare in-article heading, same role as page H2
 *   H2  clamp(1.35rem → 1.75rem)  — major section breaks
 *   H3  semantic h3 sizing        — sub-sections
 *   H4  semantic h4 sizing        — minor callouts, bold
 *   p   semantic body sizing      — readable longform copy
 *
 * No border-radius (site uses --radius: 0).
 * Primary colour for accents and links.
 * All heading font-family inherited from globals (h1-h6 → var(--font-display)).
 */
export const mdxComponents = {
  h1: ({ children, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className="mt-12 mb-5 leading-[1.05] font-medium tracking-[-0.04em] text-balance text-foreground first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className="mt-10 mb-4 border-b border-border pb-3 leading-[1.1] font-medium tracking-[-0.03em] text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className="mt-8 mb-3 leading-snug font-medium tracking-[-0.025em] text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className="mt-6 mb-2 leading-snug font-semibold tracking-[-0.015em] text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }: React.ComponentProps<"p">) => (
    <p className="mt-6 leading-8 text-muted-foreground first:mt-0" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className="my-6 space-y-2 pl-5 leading-8 text-muted-foreground [&>li::marker]:text-primary"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className="my-6 list-decimal space-y-2 pl-5 leading-8 text-muted-foreground [&>li::marker]:text-primary"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="my-8 border-l-[3px] border-primary bg-muted/30 py-4 pr-4 pl-6 leading-8 text-foreground/80 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),

  a: ({ children, href, ...props }: React.ComponentProps<"a">) => (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/75"
      {...props}
    >
      {children}
    </a>
  ),

  code: ({ children, ...props }: React.ComponentProps<"code">) => (
    <code
      className="mx-0.5 bg-muted px-1.5 py-0.5 font-mono text-foreground"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({ children, ...props }: React.ComponentProps<"pre">) => (
    <pre
      className="my-6 overflow-x-auto border border-border bg-muted/50 p-5 font-mono leading-7 text-foreground"
      {...props}
    >
      {children}
    </pre>
  ),

  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-10 border-border" {...props} />
  ),

  strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }: React.ComponentProps<"em">) => (
    <em className="text-foreground/85 italic" {...props}>
      {children}
    </em>
  ),
}
