import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  HeroGalleryContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    alt: "Clinician using a digital healthcare interface",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    alt: "Patient monitor with hospital vitals view",
  },
  {
    src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
    alt: "Care team collaborating over medical data",
  },
  {
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    alt: "Hospital corridor and connected care environment",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    alt: "Critical care room with clinical equipment",
  },
]

export function PrimaryHeroGallery() {
  return (
    <HeroGalleryContainerScroll className="h-[250vh] sm:h-[320vh]">
      <BentoGrid className="sticky top-0 left-0 h-svh w-full p-2 sm:p-4 md:p-6">
        {IMAGES.map((image, index) => (
          <BentoCell
            key={image.src}
            className="relative overflow-hidden border border-foreground/8 bg-background shadow-marketing-lg"
          >
            <Image
              fill
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
              priority={index < 2}
            />
            <div className="bg-hero-image-scrim absolute inset-0" />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="z-10 w-[min(91vw,900px)] text-center">
        <div className="min-w-0 border border-foreground/10 bg-background p-4 text-foreground shadow-marketing-xl backdrop-blur-none sm:p-10">
          <h1 className="mx-auto max-w-4xl text-[clamp(2.35rem,12vw,4rem)] leading-[0.9] font-medium tracking-[-0.065em] sm:mt-6 sm:text-6xl lg:text-8xl">
            Continuous connected care should feel as clear as the intervention
            window is small.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-7">
            PlasmIT positions PiMed as the shift from periodic physical rounds
            to continuous connected rounds, giving hospitals, clinicians, and
            investors a cleaner way to evaluate the system, the workflow, and
            the opportunity.
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch gap-4 sm:mt-8 sm:max-w-none">
            <Button
              asChild
              size="lg"
              className="h-11 w-full border border-primary/60 bg-primary px-5 text-primary-foreground hover:bg-primary/85 sm:mx-auto sm:w-auto"
            >
              <Link href="/hospital-corner">
                Explore hospital value
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              <Link
                href="/investor-corner"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Investor corner
              </Link>
              <span className="mx-2 text-foreground/25" aria-hidden>
                ·
              </span>
              <Link
                href="/pimed"
                className="text-foreground underline-offset-4 hover:underline"
              >
                PiMed product
              </Link>
            </p>
          </div>

          <p className="mx-auto mt-8 hidden max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:block">
            <span className="font-medium text-foreground">24×7 visibility</span>
            {" — live context beyond the bedside. "}
            <span className="text-foreground/25" aria-hidden>
              ·
            </span>
            {
              " Clinical coordination on one surface. · Commercial story for hospitals and investors."
            }
          </p>
        </div>
      </ContainerScale>
    </HeroGalleryContainerScroll>
  )
}
