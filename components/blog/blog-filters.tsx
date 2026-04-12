"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Category = "all" | "healthcare" | "technical"

const CATEGORIES: { label: string; value: Category; href: string }[] = [
  { label: "All posts", value: "all", href: "/blog" },
  { label: "Healthcare", value: "healthcare", href: "/blog/healthcare" },
  { label: "Technical", value: "technical", href: "/blog/technical" },
]

interface BlogFiltersProps {
  activeCategory: Category
  defaultSearch?: string
}

export function BlogFilters({
  activeCategory,
  defaultSearch,
}: BlogFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(window.location.search)
    if (term) {
      params.set("q", term)
    } else {
      params.delete("q")
    }
    params.set("page", "1")
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Category tabs */}
      <div className="flex items-center gap-1 border border-border bg-muted/25 p-1">
        {CATEGORIES.map(({ label, value, href }) => {
          const isActive = activeCategory === value
          return (
            <Link
              key={value}
              href={href}
              className={cn(
                "inline-flex min-h-8 items-center px-3 py-1.5 font-medium transition-all duration-150",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
              )}
            >
              {label}
            </Link>
          )
        })}
      </div>

      {/* Search bar */}
      <div className="relative w-full sm:max-w-xs">
        <Search
          className="absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground"
          strokeWidth={2}
          aria-hidden
        />
        <Input
          placeholder="Search articles..."
          className="h-9 border-border bg-background pl-9 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/40"
          defaultValue={defaultSearch}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Search blog articles"
        />
      </div>
    </div>
  )
}
