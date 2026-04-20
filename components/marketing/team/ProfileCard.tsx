import type { LeadershipProfile } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"

export function ProfileCard({ profile }: { profile: LeadershipProfile }) {
  return (
    <article className="border-l-2 border-border/70 bg-background/55 p-4 transition-colors duration-200 hover:border-primary hover:bg-background/70">
      <div className="flex flex-col justify-center gap-2">
        <Badge
          variant="outline"
          className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
        >
          {profile.role}
        </Badge>
        <h3 className="leading-snug font-medium tracking-[-0.025em] text-foreground">
          {profile.name}
        </h3>
      </div>
      <div className="max-w-[65ch] leading-body text-muted-foreground">
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
      </div>
    </article>
  )
}
