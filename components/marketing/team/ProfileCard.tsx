import type { LeadershipProfile } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cardClassName =
  "border border-foreground/8 bg-card/72 text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/14 hover:bg-card/84"

export function ProfileCard({ profile }: { profile: LeadershipProfile }) {
  return (
    <Card className={cardClassName}>
      <CardHeader className="flex flex-col justify-center gap-2">
        <Badge
          variant="outline"
          className="w-fit border-foreground/12 bg-foreground/4 text-muted-foreground"
        >
          {profile.role}
        </Badge>
        <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
          {profile.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-7 text-muted-foreground">
        {profile.summary}
      </CardContent>
    </Card>
  )
}
