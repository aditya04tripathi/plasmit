import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { HeroArchitectureDiagram } from "@/components/marketing/HeroArchitectureDiagram"
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  HeroGalleryContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

import { companyHero } from "@/lib/site-content"

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

export function PrimaryHeroGallery() {
  return (
    <HeroGalleryContainerScroll className="h-[150vh] sm:h-[185vh]">
      <div className="sticky top-0 z-20 h-1 w-full bg-primary" aria-hidden />
      <BentoGrid className="sticky top-0 left-0 h-svh w-full p-2 pt-3 sm:p-4 md:p-6">
        {HERO_IMAGES.map((image, index) => (
          <BentoCell
            key={image.src}
            className="shadow-marketing-lg relative min-h-0 overflow-hidden border border-border bg-background"
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
          </BentoCell>
        ))}
        <BentoCell className="shadow-marketing-lg relative flex min-h-0 items-center justify-center overflow-hidden border border-border bg-muted/40 p-3">
          <HeroArchitectureDiagram />
        </BentoCell>
      </BentoGrid>

      <ContainerScale className="z-10 w-[min(92vw,880px)] text-left sm:text-left">
        <div className="shadow-marketing-xl min-w-0 border border-t-4 border-border border-t-primary bg-background p-4 ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] pb-[max(1rem,env(safe-area-inset-bottom))] text-foreground backdrop-blur-none sm:p-7 sm:ps-8">
          <h1 className="max-w-4xl leading-[0.9] font-medium tracking-[-0.065em] text-balance sm:mt-2">
            {companyHero.headline}
          </h1>
          <p className="mt-4 max-w-prose leading-6 text-muted-foreground sm:leading-7">
            {companyHero.lead}
          </p>
          <p className="mt-3 max-w-prose leading-6 text-muted-foreground sm:leading-7">
            <span className="font-medium text-foreground">
              {companyHero.productLine}
            </span>
          </p>

          <div className="mt-5 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-6 sm:max-w-none">
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
                className="inline-flex min-h-11 min-w-11 items-center px-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/55 focus-visible:outline-none active:opacity-80"
              >
                Investors
              </Link>
            </p>
          </div>
        </div>
      </ContainerScale>
    </HeroGalleryContainerScroll>
  )
}
