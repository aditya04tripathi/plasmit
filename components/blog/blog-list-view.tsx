import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"

import type { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

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

interface BlogListViewProps {
  posts: BlogPost[]
}

export function BlogListView({ posts }: BlogListViewProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-muted-foreground">No articles found.</p>
        <p className="mt-1 text-muted-foreground">
          Try a different search term or browse all posts.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => {
        const cat = categoryConfig[post.category]

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group min-w-0 border-l-2 border-border/70 bg-background/55 p-4 transition-colors duration-200 hover:border-primary hover:bg-background/70"
          >
            <div className="flex h-full flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "w-fit font-medium tracking-wide uppercase",
                    cat.className
                  )}
                >
                  {cat.label}
                </Badge>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="size-3 opacity-60" strokeWidth={2} />
                  {post.readingTime}
                </span>
              </div>

              <h3 className="line-clamp-2 leading-snug font-medium tracking-[-0.02em] text-foreground transition-colors duration-150 group-hover:text-primary">
                {post.title}
              </h3>

              <p className="line-clamp-3 leading-body text-muted-foreground">
                {post.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-1">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="size-3 opacity-60" strokeWidth={2} />
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                <span className="flex items-center gap-1 font-medium text-primary transition-transform duration-150 group-hover:translate-x-0.5">
                  Read
                  <ArrowRight className="size-3" strokeWidth={2} />
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
