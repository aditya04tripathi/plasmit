import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"

import { navLinks } from "@/lib/site-content"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

function WebflowNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-950/10 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/webflow" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-sky-950/10 bg-sky-500 text-[10px] font-semibold tracking-[0.32em] text-white uppercase">
            PV
          </span>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-sky-700 uppercase">
              Webflow Route
            </p>
            <p className="text-sm font-medium text-slate-950">PlasmIT</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className="h-9 px-3 text-slate-700"
            >
              <Link href={`/webflow${link.href === "/" ? "" : link.href}`}>
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-9 border border-sky-500 bg-sky-500 px-4 text-white hover:bg-sky-600"
          >
            <Link href="/webflow/contact-us">
              Request a walkthrough
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>
                  Full Webflow-inspired PlasmIT page set.
                </SheetDescription>
              </SheetHeader>
              <Separator />
              <div className="grid gap-2 p-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className="justify-start px-0 text-slate-700"
                  >
                    <Link
                      href={`/webflow${link.href === "/" ? "" : link.href}`}
                    >
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function WebflowFooter() {
  return (
    <footer className="border-t border-sky-950/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <Badge variant="outline" className="border-sky-200 text-sky-700">
            Webflow-inspired rebuild
          </Badge>
          <h2 className="max-w-2xl text-4xl leading-[0.96] font-medium tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Blue-accented storytelling for a premium health-tech marketing site.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            This route mirrors the full PlasmIT site architecture using a more
            polished Webflow-style marketing system while preserving the same
            crawled content model.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-none border border-sky-950/10 bg-slate-50 p-5">
            <p className="text-xs tracking-[0.26em] text-sky-700 uppercase">
              Alternate routes
            </p>
            <div className="mt-4 grid gap-2">
              <Link
                className="text-sm text-slate-700 hover:text-slate-950"
                href="/webflow/pimed"
              >
                PiMed
              </Link>
              <Link
                className="text-sm text-slate-700 hover:text-slate-950"
                href="/webflow/hospital-corner"
              >
                Hospital Corner
              </Link>
              <Link
                className="text-sm text-slate-700 hover:text-slate-950"
                href="/webflow/investor-corner"
              >
                Investor Corner
              </Link>
            </div>
          </div>
          <div className="rounded-none border border-sky-950/10 bg-slate-50 p-5">
            <p className="text-xs tracking-[0.26em] text-sky-700 uppercase">
              Company
            </p>
            <div className="mt-4 grid gap-2">
              <Link
                className="text-sm text-slate-700 hover:text-slate-950"
                href="/webflow/about-us"
              >
                About Us
              </Link>
              <Link
                className="text-sm text-slate-700 hover:text-slate-950"
                href="/webflow/leadership"
              >
                Leadership
              </Link>
              <Link
                className="text-sm text-slate-700 hover:text-slate-950"
                href="/webflow/contact-us"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function WebflowFrame({ children }: { children: ReactNode }) {
  return (
    <div className="theme-webflow min-h-dvh bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_32%,#eef6ff_100%)] text-slate-950">
      <WebflowNavbar />
      <main>{children}</main>
      <WebflowFooter />
    </div>
  )
}
