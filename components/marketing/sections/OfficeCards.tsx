import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OfficeCards({
  items,
}: {
  items: readonly { label: string; address: string; note: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <Card
          key={item.label}
          className="border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card active:translate-y-0"
        >
          <CardHeader className="flex flex-col justify-center gap-2">
            <Badge
              variant="outline"
              className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
            >
              {item.label}
            </Badge>
            <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
              {item.address}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            {item.note}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
