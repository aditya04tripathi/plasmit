import Link from "next/link"

import { contactDetails, footerGroups, proofPoints } from "@/lib/site-content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
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
              <span>{contactDetails.phone}</span>
              <span className="break-all">{contactDetails.email}</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {footerGroups.map((group) => (
            <Card key={group.title} className="border border-white/8 bg-slate-900/60 text-slate-100">
              <CardHeader>
                <CardTitle className="text-xs tracking-[0.26em] uppercase text-slate-300">
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                {group.links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className="justify-start px-0 text-slate-300 hover:bg-white/8 hover:text-white"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Separator />
        <div className="flex flex-col gap-2 pt-4 text-xs tracking-[0.22em] text-slate-500 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PlasmIT Healthcare IT Vector</p>
          <p>{contactDetails.footerAustralia}</p>
        </div>
      </div>
    </footer>
  )
}
