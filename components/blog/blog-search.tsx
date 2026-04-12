"use client"

import { useRouter, usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface BlogSearchProps {
  defaultValue?: string
}

export function BlogSearch({ defaultValue }: BlogSearchProps) {
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
    <div className="relative w-full sm:max-w-xs">
      <Search
        className="absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground"
        strokeWidth={2}
        aria-hidden
      />
      <Input
        placeholder="Search articles..."
        className="h-9 border-border bg-background pl-9 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/40"
        defaultValue={defaultValue}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label="Search blog articles"
      />
    </div>
  )
}
