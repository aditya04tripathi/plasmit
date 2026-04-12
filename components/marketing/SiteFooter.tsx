import Link from "next/link"

import {
  contactDetails,
  footerGroups,
  proofPoints,
  siteMeta,
} from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/8 bg-background py-8 text-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div className="flex min-w-0 flex-col gap-4">
          <Badge
            variant="outline"
            className="w-fit border-foreground/12 bg-foreground/4 text-muted-foreground"
          >
            {siteMeta.name}
          </Badge>
          <h2 className="max-w-xl text-3xl leading-tight font-medium tracking-[-0.04em] text-foreground sm:text-4xl">
            A critical care company first. PiMed is how we ship that mission
            to hospitals today.
          </h2>
          <ul className="grid gap-2.5 text-sm text-muted-foreground">
            {proofPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                <span className="min-w-0 break-words">{point}</span>
              </li>
            ))}
          </ul>
          <Separator />
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="min-w-0 break-all">
              <span className="font-medium text-foreground">Email:</span>{" "}
              {contactDetails.email}
            </span>
            <span>
              <span className="font-medium text-foreground">Phone:</span>{" "}
              {contactDetails.phone}
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="flex min-w-0 flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-[0.26em] text-muted-foreground uppercase">
                {group.title}
              </h3>
              <div className="grid gap-2">
                {group.links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className="h-auto min-h-0 justify-start px-0 py-1 text-sm text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Separator />
        <div className="flex flex-col gap-4 pt-6 text-xs tracking-[0.22em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteMeta.legalName}</p>
          <div className="flex flex-wrap gap-4">
            <p className="max-w-prose text-pretty normal-case tracking-normal">
              {contactDetails.footerAustralia}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
