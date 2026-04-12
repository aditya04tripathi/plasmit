import type { LeadershipProfile } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cardClassName =
  "border border-border bg-card/80 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card active:translate-y-0"

export function ProfileCard({ profile }: { profile: LeadershipProfile }) {
  return (
    <Card className={cardClassName}>
      <CardHeader className="flex flex-col justify-center gap-2">
        <Badge
          variant="outline"
          className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
        >
          {profile.role}
        </Badge>
        <CardTitle className="leading-snug font-medium tracking-[-0.025em] text-foreground">
          {profile.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="leading-7 text-muted-foreground">
        <p>{profile.summary}</p>
        {profile.credentials ? (
          <p className="mt-2 text-foreground/80">{profile.credentials}</p>
        ) : null}
        {profile.linkedin ? (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
            aria-label={`Open LinkedIn profile for ${profile.name}`}
          >
            LinkedIn
          </a>
        ) : null}
      </CardContent>
    </Card>
  )
}
