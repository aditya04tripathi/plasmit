import { contactDetails } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactDirectCard() {
  return (
    <Card className="border border-border bg-card/80 text-card-foreground shadow-sm">
      <CardHeader className="flex flex-col justify-center gap-2">
        <Badge
          variant="outline"
          className="w-fit border-border bg-muted/40 font-normal tracking-normal text-muted-foreground normal-case"
        >
          Direct contact
        </Badge>
        <CardTitle className="leading-tight font-medium tracking-[-0.03em] text-foreground">
          Reach our team directly.
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-[65ch] space-y-4 leading-body text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">General: </span>
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href={`mailto:${contactDetails.email}`}
          >
            {contactDetails.email}
          </a>
        </p>
        <p>
          <span className="font-medium text-foreground">Founder: </span>
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href={`mailto:${contactDetails.founderEmail}`}
          >
            {contactDetails.founderEmail}
          </a>
        </p>
        <p>{contactDetails.phone}</p>
        <p>{contactDetails.australia}</p>
      </CardContent>
    </Card>
  )
}
