import Link from "next/link"

import { contactDetails, footerGroups, proofPoints } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div className="flex flex-col gap-6">
          <Card className="border border-white/8 bg-slate-900/72 text-slate-100">
            <CardHeader>
              <Badge variant="outline" className="w-fit border-white/12 bg-white/4 text-slate-300">
                Continuous connected care
              </Badge>
              <CardTitle className="max-w-xl text-3xl leading-tight font-medium tracking-[-0.04em] text-slate-50 sm:text-4xl">
                Premium clinical infrastructure needs trust in both product and
                posture.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 text-sm text-slate-400">
                {proofPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 bg-emerald-300" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="font-medium text-slate-100">Email:</span> {contactDetails.email}
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-medium text-slate-100">Phone:</span> {contactDetails.phone}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-xs tracking-[0.26em] uppercase text-slate-300 font-semibold">
                {group.title}
              </h4>
              <div className="grid gap-2">
                {group.links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className="justify-start px-0 h-auto py-1 text-sm text-slate-400 hover:bg-transparent hover:text-white transition-colors"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Separator />
        <div className="flex flex-col gap-4 pt-6 text-xs tracking-[0.22em] text-slate-500 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PlasmIT Healthcare IT Vector</p>
          <div className="flex flex-wrap gap-4">
             <p>{contactDetails.footerAustralia}</p>
             <p>{contactDetails.india}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
