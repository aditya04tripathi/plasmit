import { contactDetails } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactDirectCard() {
  return (
    <Card className="border border-foreground/8 bg-card/72 text-card-foreground">
      <CardHeader className="flex flex-col justify-center gap-2">
        <Badge
          variant="outline"
          className="w-fit border-foreground/12 bg-foreground/4 text-muted-foreground"
        >
          Direct contact
        </Badge>
        <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-foreground">
          Reach our team directly.
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
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
