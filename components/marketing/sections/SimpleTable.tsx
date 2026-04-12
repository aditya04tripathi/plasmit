import { Card, CardContent } from "@/components/ui/card"

import { cn } from "@/lib/utils"

import type { SimpleTableColumn, SimpleTableRow } from "@/lib/site-content"

export function SimpleTable({
  caption,
  srTitle = "Data table",
  columns,
  rows,
}: {
  caption?: string
  srTitle?: string
  columns: readonly SimpleTableColumn[]
  rows: readonly SimpleTableRow[]
}) {
  const captionText = caption ?? srTitle

  return (
    <Card className="relative border border-border bg-card/85 text-card-foreground shadow-sm">
      <p className="px-4 pt-3 text-xs text-muted-foreground sm:hidden">
        Scroll sideways to see all columns.
      </p>
      <div
        className="pointer-events-none absolute top-8 right-0 bottom-10 z-10 w-8 bg-gradient-to-l from-card to-transparent sm:hidden"
        aria-hidden
      />
      <CardContent className="overflow-x-auto px-0 pb-3 sm:pb-4">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption
            className={cn(
              "caption-top px-4 pt-3 pb-2 text-left text-xs leading-5 text-muted-foreground",
              caption ? "" : "sr-only"
            )}
          >
            {captionText}
          </caption>
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {columns.map((col, ci) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "min-w-0 px-3 py-2.5 align-bottom text-xs font-medium tracking-wide text-muted-foreground uppercase sm:px-4 sm:py-3",
                    ci === 0 &&
                      "sticky start-0 z-[1] bg-muted shadow-[4px_0_12px_-6px_rgba(15,23,41,0.18)] sm:static sm:bg-transparent sm:shadow-none dark:shadow-[4px_0_12px_-6px_rgba(0,0,0,0.45)]"
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-border last:border-b-0"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "min-w-0 max-w-[220px] wrap-break-word px-3 py-2.5 align-top text-muted-foreground sm:max-w-none sm:px-4 sm:py-3",
                      ci === 0 &&
                        "sticky start-0 z-[1] bg-card shadow-[4px_0_12px_-6px_rgba(15,23,41,0.14)] sm:static sm:bg-transparent sm:shadow-none dark:shadow-[4px_0_12px_-6px_rgba(0,0,0,0.4)]"
                    )}
                  >
                    {ci === 0 ? (
                      <span className="font-medium text-foreground">
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
