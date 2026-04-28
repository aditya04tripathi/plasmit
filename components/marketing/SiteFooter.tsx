import Link from "next/link"

import { contactDetails, footerGroups, siteMeta } from "@/lib/site-content"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "./ThemeToggle"

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/8 bg-background py-10 text-foreground sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="rounded-4xl border border-foreground/10 bg-foreground/3 p-2">
          <div className="rounded-[calc(2rem-0.375rem)] bg-background px-4 py-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] sm:px-6 sm:py-10">
            <div className="mb-8 flex items-center justify-between gap-3">
              <span className="rounded-full border border-foreground/12 bg-foreground/4 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {siteMeta.name}
              </span>
              <ThemeToggle />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {footerGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.4rem] border border-foreground/10 bg-foreground/2 p-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
                >
                  <h4 className="mb-3 font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    {group.title}
                  </h4>
                  <div className="grid gap-1.5">
                    {group.links.map((link) => (
                      <Link
                        className="text-muted-foreground transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:translate-x-1 hover:text-foreground"
                        key={link.href}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Separator />
              <div className="flex flex-col gap-4 pt-5 text-muted-foreground lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-1">
                  <p className="text-sm tracking-[0.18em] uppercase">
                    © 2026 {siteMeta.legalName}
                  </p>
                  <p className="max-w-2xl text-sm text-pretty">
                    {contactDetails.footerAustralia}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`mailto:${contactDetails.email}`}
                    className="rounded-full border border-foreground/12 bg-foreground/3 px-4 py-2 text-sm text-foreground transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:bg-foreground/7"
                  >
                    {contactDetails.email}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/5 px-3 py-1.5 text-sm text-foreground transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:bg-foreground/8 active:scale-[0.98]"
                  >
                    <span className="pl-2">Talk to us</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
