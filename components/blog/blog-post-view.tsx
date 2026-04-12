import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"

import type { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Section } from "@/components/marketing/sections/Section"
import { sectionClassName } from "@/components/marketing/sections/section-class-name"
import { cn } from "@/lib/utils"
import { mdxComponents } from "./mdx-components"

const categoryConfig = {
  healthcare: {
    label: "Healthcare",
    className: "badge-healthcare",
  },
  technical: {
    label: "Technical",
    className: "border-primary/30 bg-primary/8 text-primary",
  },
} as const

interface BlogPostViewProps {
  post: BlogPost
}

export function BlogPostView({ post }: BlogPostViewProps) {
  const cat = categoryConfig[post.category]

  return (
    <>
      {/* Article hero — matches PageHero visual language */}
      <section className={cn(sectionClassName("default"))}>
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-12">
          {/* Breadcrumb */}
          <nav
            className="mb-5 flex items-center gap-2 text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/blog/${post.category}`}
              className="capitalize transition-colors hover:text-foreground"
            >
              {post.category}
            </Link>
            <span aria-hidden>/</span>
            <span className="max-w-50 truncate text-foreground/70">
              {post.title}
            </span>
          </nav>

          {/* Article header */}
          <div className="w-full space-y-4">
            <Badge
              variant="outline"
              className={cn(
                "w-fit font-medium tracking-wide uppercase",
                cat.className
              )}
            >
              {cat.label}
            </Badge>

            <h1 className="leading-[0.97] font-medium tracking-[-0.05em] text-balance text-foreground">
              {post.title}
            </h1>

            <p className="max-w-prose leading-7 text-pretty text-muted-foreground">
              {post.description}
            </p>

            <div className="flex items-center gap-4 border-t border-foreground/10 pt-4 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 opacity-60" strokeWidth={2} />
                {new Date(post.date).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 opacity-60" strokeWidth={2} />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <Section tone="default" density="compact">
        <div className="mx-auto w-full max-w-prose">
          <article className="blog-prose">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          <Separator className="my-8" />

          {/* Footer actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              asChild
              variant="outline"
              className="h-auto border-border bg-muted/30 px-4 py-2.5 text-foreground hover:bg-muted/50 hover:text-foreground sm:w-auto"
            >
              <Link href="/blog">
                <ArrowLeft className="size-4" strokeWidth={2} />
                Back to all posts
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto border-border bg-muted/30 px-4 py-2.5 text-foreground hover:bg-muted/50 hover:text-foreground sm:w-auto"
            >
              <Link href={`/blog/${post.category}`} className="capitalize">
                More {post.category} posts
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
