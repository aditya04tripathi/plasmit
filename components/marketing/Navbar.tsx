"use client"

import Link from "next/link"
import { startTransition, useEffect, useState } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"

import { ThemeToggle } from "./ThemeToggle"
import { navLinks, siteMeta } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Navbar({
  revealAfterHero = false,
}: {
  revealAfterHero?: boolean
}) {
  const [mounted, setMounted] = useState(false)
  const [scrollRevealed, setScrollRevealed] = useState(false)
  const revealed = !revealAfterHero || scrollRevealed

  useEffect(() => {
    startTransition(() => {
      setMounted(true)
    })
  }, [])

  useEffect(() => {
    if (!revealAfterHero) return

    const update = () => {
      const threshold = Math.max(window.innerHeight * 0.72, 520)
      setScrollRevealed(window.scrollY > threshold)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [revealAfterHero])

  return (
    <header
      className={cn(
        revealAfterHero ? "fixed inset-x-0 top-0" : "sticky top-0",
        "z-40 border-b backdrop-blur-xl transition-all duration-500",
        revealAfterHero
          ? "border-foreground/10 bg-background/82"
          : "border-foreground/8 bg-background/88",
        revealAfterHero && !revealed
          ? "pointer-events-none -translate-y-5 opacity-0"
          : "translate-y-0 opacity-100"
      )}
    >
      <div className="mx-auto flex min-h-19 max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/media/logo.svg" alt="PlasmIT" width={32} height={32} />
          <div>
            <p className="tracking-[0.32em] text-muted-foreground uppercase">
              PlasmIT
            </p>
            <p className="font-medium text-foreground">
              {siteMeta.companyTagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className="h-auto min-h-11 px-3 py-2 text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="lg:hidden">
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  aria-label="Open menu"
                  className="size-11 shrink-0 border-foreground/14 bg-foreground/5 text-foreground hover:bg-foreground/10"
                >
                  <Menu className="size-5" aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-border bg-background pb-[max(1rem,env(safe-area-inset-bottom))] text-foreground"
              >
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                  <SheetDescription className="text-muted-foreground">
                    Explore product, commercial, and company pages.
                  </SheetDescription>
                </SheetHeader>
                <Separator />
                <div className="grid gap-1 p-3.5">
                  {navLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      asChild
                      className="h-auto min-h-11 justify-start px-3 py-3 text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                  <Separator className="my-2" />
                  <div className="flex flex-col gap-2.5">
                    <Button
                      asChild
                      className="h-auto min-h-11 border border-primary/60 bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/85"
                    >
                      <Link href="/contact-us">Start a conversation</Link>
                    </Button>

                    <div className="flex min-h-11 items-center justify-between border border-border bg-muted/25 px-3 py-2 text-muted-foreground">
                      <span className="font-medium tracking-[0.18em] uppercase">
                        Theme
                      </span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button
              variant="outline"
              aria-label="Open menu"
              className="size-11 shrink-0 border-foreground/14 bg-foreground/5 text-foreground"
              disabled
            >
              <Menu className="size-5" aria-hidden />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
