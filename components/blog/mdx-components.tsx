import React from "react"

/**
 * MDX overrides: in-article H1/H2 use --text-mdx-h1 / --text-mdx-h2 (globals.css);
 * H3–H4 follow base heading scale; body copy uses leading-body and 65ch measure.
 */
export const mdxComponents = {
  h1: ({ children, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className="mt-10 mb-4 text-(length:--text-mdx-h1) leading-[1.08] font-medium tracking-[-0.035em] text-balance text-foreground first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className="mt-8 mb-3 border-b border-border pb-2.5 text-(length:--text-mdx-h2) leading-[1.12] font-medium tracking-[-0.03em] text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className="mt-6 mb-2 leading-snug font-medium tracking-[-0.025em] text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className="mt-5 mb-2 leading-snug font-medium tracking-[-0.015em] text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }: React.ComponentProps<"p">) => (
    <p
      className="mt-5 max-w-[65ch] leading-body text-muted-foreground first:mt-0"
      {...props}
    >
      {children}
    </p>
  ),

  ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className="my-5 max-w-[65ch] space-y-2 pl-5 leading-body text-muted-foreground [&>li::marker]:text-primary"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className="my-5 max-w-[65ch] list-decimal space-y-2 pl-5 leading-body text-muted-foreground [&>li::marker]:text-primary"
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
      className="my-6 max-w-[65ch] border-l-[3px] border-primary bg-muted/30 py-3 pr-4 pl-5 leading-body text-foreground/80 italic"
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
      className="my-5 overflow-x-auto border border-border bg-muted/50 p-4 font-mono leading-body text-foreground"
      {...props}
    >
      {children}
    </pre>
  ),

  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-8 border-border" {...props} />
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
