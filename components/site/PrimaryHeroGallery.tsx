import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
} from "lucide-react"

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
    <HeroGalleryContainerScroll className="h-[320vh]">
      <BentoGrid className="sticky top-0 left-0 h-screen w-full p-4 md:p-6">
        {IMAGES.map((image, index) => (
          <BentoCell
            key={image.src}
            className="relative overflow-hidden border border-white/8 bg-slate-950 shadow-[0_25px_90px_rgba(2,6,23,0.45)]"
          >
            <Image
              fill
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(2,6,23,0.18)_55%,rgba(2,6,23,0.72)_100%)]" />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="z-10 w-[min(92vw,900px)] text-center">
        <div className="border border-white/10 bg-slate-950/72 p-6 text-slate-50 shadow-[0_28px_120px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-10">
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl leading-[0.9] font-medium tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            Continuous connected care should feel as clear as the intervention
            window is small.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            PlasmIT positions PiMed as the shift from periodic physical rounds
            to continuous connected rounds, giving hospitals, clinicians, and
            investors a cleaner way to evaluate the system, the workflow, and
            the opportunity.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 border border-emerald-300/60 bg-emerald-300 px-5 text-slate-950 hover:bg-emerald-200"
            >
              <Link href="/hospital-corner">
                Explore hospital value
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-white/15 bg-white/5 px-5 text-slate-50 hover:bg-white/10"
            >
              <Link href="/investor-corner">
                Investor corner
                <TrendingUp className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-11 px-5 text-slate-200 hover:bg-white/8 hover:text-white"
            >
              <Link href="/pimed">
                <Play className="size-4" />
                View PiMed
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {[
              [
                "24×7 visibility",
                "Live patient context available beyond the bedside.",
              ],
              [
                "Clinical coordination",
                "Interdisciplinary collaboration around one operating surface.",
              ],
              [
                "Commercial posture",
                "Hospital ROI, investor readiness, and care continuity in one system story.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border border-white/8 bg-white/4 p-4">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center border border-white/10 bg-white/6">
                  <Stethoscope className="size-4 text-emerald-200" />
                </div>
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScale>
    </HeroGalleryContainerScroll>
  )
}
