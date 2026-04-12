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
    <Card className="border border-foreground/8 bg-card/72 text-card-foreground">
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
            <tr className="border-b border-foreground/10 bg-foreground/4">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="min-w-0 px-3 py-2.5 align-bottom text-xs font-medium tracking-wide text-muted-foreground uppercase sm:px-4 sm:py-3"
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
                className="border-b border-foreground/8 last:border-b-0"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="min-w-0 max-w-[220px] wrap-break-word px-3 py-2.5 align-top text-muted-foreground sm:max-w-none sm:px-4 sm:py-3"
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
