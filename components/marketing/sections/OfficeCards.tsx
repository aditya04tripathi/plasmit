import { Badge } from "@/components/ui/badge"

export function OfficeCards({
  items,
}: {
  items: readonly { label: string; address: string; note: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <article
          key={item.label}
          className="border-l-2 border-border/70 bg-background/55 p-4 transition-colors duration-200 hover:border-primary hover:bg-background/70"
        >
          <div className="flex flex-col justify-center gap-2">
            <Badge
              variant="outline"
              className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
            >
              {item.label}
            </Badge>
            <h3 className="leading-tight font-medium tracking-[-0.03em] text-foreground">
              {item.address}
            </h3>
          </div>
          <p className="max-w-[65ch] leading-body text-muted-foreground">
            {item.note}
          </p>
        </article>
      ))}
    </div>
  )
}
