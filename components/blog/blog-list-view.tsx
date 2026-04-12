import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"

import type { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
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
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {posts.map((post, index) => {
        const cat = categoryConfig[post.category]

        const isFeatured = index === 0 || index === 3

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={cn(
              "group min-w-0",
              isFeatured ? "md:col-span-2 xl:col-span-2" : "xl:col-span-1"
            )}
          >
            <Card
              className={cn(
                "flex h-full flex-col border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card active:translate-y-0",
                isFeatured && "bg-card"
              )}
            >
              <CardHeader className="flex flex-col gap-2.5 pb-2.5">
                {/* Category + reading time row */}
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

                {/* Title */}
                <CardTitle
                  className={cn(
                    "line-clamp-2 leading-snug font-medium tracking-[-0.02em] text-foreground transition-colors duration-150 group-hover:text-primary",
                    isFeatured && "line-clamp-3"
                  )}
                >
                  {post.title}
                </CardTitle>

                {/* Description */}
                <CardDescription className="line-clamp-3 leading-6 text-muted-foreground">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto flex items-center justify-between pt-0">
                {/* Date */}
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="size-3 opacity-60" strokeWidth={2} />
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                {/* Read more indicator */}
                <span className="flex items-center gap-1 font-medium text-primary transition-transform duration-150 group-hover:translate-x-0.5">
                  Read
                  <ArrowRight className="size-3" strokeWidth={2} />
                </span>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
