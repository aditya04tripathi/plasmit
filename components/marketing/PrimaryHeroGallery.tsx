import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { HeroArchitectureDiagram } from "@/components/marketing/HeroArchitectureDiagram"
import { Pressable } from "@/components/motion/Pressable"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { companyHero, homePage } from "@/lib/site-content"

const HERO_IMAGES = [
  {
    src: "/media/hero/hero-cell-1.webp",
    alt: "Hospital care environment with clinical equipment and daylight",
  },
  {
    src: "/media/hero/hero-cell-2.webp",
    alt: "Clinician consultation focused on patient care planning",
  },
  {
    src: "/media/hero/hero-cell-3.webp",
    alt: "Clinical team using technology during patient care",
  },
  {
    src: "/media/hero/hero-cell-4.webp",
    alt: "Modern hospital interior and care circulation",
  },
] as const

const HERO_TILE_CLASSES = [
  "col-span-2 md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "col-span-2 md:col-span-2",
] as const

const tileNudgeDelay = [
  "",
  "marketing-view-nudge-delay-1",
  "marketing-view-nudge-delay-2",
  "marketing-view-nudge-delay-3",
  "marketing-view-nudge-delay-4",
] as const

export function PrimaryHeroGallery() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,rgba(56,189,248,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="marketing-hero-drift-1 text-xs font-medium tracking-[0.35em] text-muted-foreground uppercase">
              Critical care infrastructure
            </p>
            <h1 className="marketing-hero-drift-2 max-w-2xl leading-[0.92] font-medium tracking-[-0.06em] text-balance text-foreground sm:text-[clamp(2.5rem,4vw,3.4rem)]">
              {companyHero.headline}
            </h1>
            <p className="marketing-hero-drift-3 max-w-[65ch] text-base leading-body text-muted-foreground">
              {companyHero.lead}
            </p>
            <p className="marketing-hero-drift-4 max-w-[65ch] text-base leading-body text-muted-foreground">
              <span className="font-medium text-foreground">
                {companyHero.productLine}
              </span>
            </p>
          </div>

          <div className="marketing-hero-drift-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Pressable className="w-full sm:w-fit">
              <Button
                asChild
                size="lg"
                className="h-11 w-full border border-primary/60 bg-primary px-5 text-primary-foreground hover:bg-primary/85 active:bg-primary/90 sm:w-fit"
              >
                <Link href="/about-us">
                  About PlasmIT
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Pressable>
            <p className="flex flex-wrap items-center gap-x-1 gap-y-2 text-muted-foreground">
              <Link
                href="/pimed"
                className="inline-flex min-h-11 min-w-11 items-center px-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/55 focus-visible:outline-none active:opacity-80"
              >
                PiMed
              </Link>
              <span className="text-foreground/25" aria-hidden>
                ·
              </span>
              <Link
                href="/hospital-corner"
                className="inline-flex min-h-11 min-w-11 items-center px-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/55 focus-visible:outline-none active:opacity-80"
              >
                Hospitals
              </Link>
              <span className="text-foreground/25" aria-hidden>
                ·
              </span>
              <Link
                href="/investor-corner"
                className="inline-flex min-h-11 min-w-11 items-center px-2 text-foreground underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring/55 focus-visible:outline-none active:opacity-80"
              >
                Investors
              </Link>
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {homePage.metrics.map((metric, index) => (
              <div
                key={metric.value}
                className={cn(
                  "marketing-view-nudge rounded-lg border border-border/70 bg-muted/30 p-3",
                  tileNudgeDelay[Math.min(index, 4) as 0 | 1 | 2 | 3 | 4]
                )}
              >
                <p className="text-lg font-medium text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="marketing-hero-drift-media relative">
          <div className="grid auto-rows-[minmax(160px,1fr)] gap-3 sm:grid-cols-2 md:auto-rows-[minmax(150px,1fr)] md:grid-cols-3">
            {HERO_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  "marketing-view-nudge shadow-marketing-lg relative overflow-hidden border border-border/70 bg-background",
                  HERO_TILE_CLASSES[index],
                  tileNudgeDelay[Math.min(index, 4) as 0 | 1 | 2 | 3 | 4]
                )}
              >
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 32vw"
                  className="object-cover object-center"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="bg-hero-image-scrim pointer-events-none absolute inset-0" />
              </div>
            ))}
            <div
              className={cn(
                "marketing-view-nudge shadow-marketing-lg col-span-2 flex items-center justify-center border border-border/70 bg-muted/40 p-3 md:col-span-1",
                tileNudgeDelay[4]
              )}
            >
              <HeroArchitectureDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
