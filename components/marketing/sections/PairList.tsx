import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function PairList({
  title,
  items,
}: {
  title: string
  items: { title: string; body: string }[]
}) {
  return (
    <Card className="border border-border bg-card/80 text-card-foreground shadow-sm">
      <CardHeader className="flex flex-col justify-center gap-2">
        <CardTitle className="leading-tight font-medium tracking-[-0.03em] text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={item.title}>
            {index > 0 ? <Separator className="mb-4" /> : null}
            <p className="font-medium text-foreground">{item.title}</p>
            <p className="mt-2 max-w-[65ch] leading-body text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
