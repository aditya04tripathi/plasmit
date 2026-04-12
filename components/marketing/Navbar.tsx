"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

import { navLinks } from "@/lib/site-content"
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

export function Navbar({ revealAfterHero = false }: { revealAfterHero?: boolean }) {
  const [scrollRevealed, setScrollRevealed] = useState(false)
  const revealed = !revealAfterHero || scrollRevealed

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
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center border text-[10px] font-semibold tracking-[0.3em] uppercase",
              revealAfterHero
                ? "border-foreground/14 bg-foreground/5 text-foreground"
                : "border-foreground/12 bg-foreground/5 text-foreground"
            )}
          >
            PV
          </span>
          <div>
            <p
              className={cn(
                "text-[11px] tracking-[0.32em] uppercase",
                revealAfterHero ? "text-muted-foreground" : "text-muted-foreground"
              )}
            >
              PlasmIT
            </p>
            <p
              className={cn(
                "text-sm font-medium",
                revealAfterHero ? "text-foreground" : "text-foreground"
              )}
            >
              Healthcare IT Vector
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "h-9 px-3",
                revealAfterHero
                  ? "text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
                  : "text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button
              asChild
              className={cn(
                "h-9 px-4",
                revealAfterHero
                  ? "border border-primary/60 bg-primary text-primary-foreground hover:bg-primary/85"
                  : "border border-primary/60 bg-primary text-primary-foreground hover:bg-primary/85"
              )}
            >
              <Link href="/contact-us">
                Start a conversation
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  revealAfterHero
                    ? "border-foreground/14 bg-foreground/5 text-foreground hover:bg-foreground/10"
                    : "border-foreground/14 bg-foreground/5 text-foreground hover:bg-foreground/10"
                )}
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-foreground/8 bg-background text-foreground">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription className="text-muted-foreground">
                  Explore product, commercial, and company pages.
                </SheetDescription>
              </SheetHeader>
              <Separator />
              <div className="grid gap-2 p-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className="justify-start px-0 text-muted-foreground hover:bg-foreground/8 hover:text-foreground"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Separator className="my-2" />
                <div className="flex flex-col gap-2">
                  <Button asChild className="border border-primary/60 bg-primary text-primary-foreground hover:bg-primary/85">
                    <Link href="/contact-us">Start a conversation</Link>
                  </Button>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
