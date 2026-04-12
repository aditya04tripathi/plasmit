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
          className="border border-foreground/8 bg-card/72 text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/84"
        >
          <CardHeader className="flex flex-col justify-center gap-2">
            <Badge
              variant="outline"
              className="w-fit border-foreground/12 bg-foreground/4 text-muted-foreground"
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
