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
      <CardContent className="px-0 pb-3 sm:pb-4">
        <div className="grid gap-3 px-4 pt-3 sm:hidden">
          <p className="text-muted-foreground">{captionText}</p>
          {rows.map((row, ri) => (
            <article
              key={ri}
              className="border border-border bg-background/70 px-3 py-3"
            >
              <h4 className="leading-tight font-medium text-foreground">
                {row[0]}
              </h4>
              <dl className="mt-3 space-y-2">
                {columns.slice(1).map((col, ci) => (
                  <div key={`${ri}-${col}`} className="space-y-0.5">
                    <dt className="tracking-[0.16em] text-muted-foreground uppercase">
                      {col}
                    </dt>
                    <dd className="text-foreground/90">
                      {row[ci + 1] ?? "-"}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="hidden overflow-x-auto sm:block">
          <table className="w-full min-w-160 border-collapse text-left">
          <caption
            className={cn(
              "caption-top px-4 pt-3 pb-2 text-left leading-5 text-muted-foreground",
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
                    "min-w-0 px-3 py-2.5 align-bottom font-medium tracking-wide text-muted-foreground uppercase sm:px-4 sm:py-3",
                    ci === 0 &&
                      "sticky inset-s-0 z-1 bg-muted shadow-[4px_0_12px_-6px_rgba(15,23,41,0.18)] sm:static sm:bg-transparent sm:shadow-none dark:shadow-[4px_0_12px_-6px_rgba(0,0,0,0.45)]"
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-border last:border-b-0">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "max-w-55 min-w-0 px-3 py-2.5 align-top wrap-break-word text-muted-foreground sm:max-w-none sm:px-4 sm:py-3",
                      ci === 0 &&
                        "sticky inset-s-0 z-1 bg-card shadow-[4px_0_12px_-6px_rgba(15,23,41,0.14)] sm:static sm:bg-transparent sm:shadow-none dark:shadow-[4px_0_12px_-6px_rgba(0,0,0,0.4)]"
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
        </div>
      </CardContent>
    </Card>
  )
}
