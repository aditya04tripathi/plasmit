import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export function BlogPagination({ totalPages, currentPage }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        asChild
        className={cn(
          "h-9 border-border bg-background px-3 text-muted-foreground hover:bg-muted/40 hover:text-foreground",
          currentPage === 1 && "pointer-events-none opacity-40"
        )}
        aria-label="Previous page"
      >
        <Link href={`?page=${currentPage - 1}`}>
          <ChevronLeft className="size-4" strokeWidth={2} />
          Previous
        </Link>
      </Button>

      <span className="px-3 text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="outline"
        size="sm"
        asChild
        className={cn(
          "h-9 border-border bg-background px-3 text-muted-foreground hover:bg-muted/40 hover:text-foreground",
          currentPage === totalPages && "pointer-events-none opacity-40"
        )}
        aria-label="Next page"
      >
        <Link href={`?page=${currentPage + 1}`}>
          Next
          <ChevronRight className="size-4" strokeWidth={2} />
        </Link>
      </Button>
    </div>
  )
}
