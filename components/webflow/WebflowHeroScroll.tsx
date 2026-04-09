import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CirclePlay,
  HeartPulse,
  Sparkles,
} from "lucide-react"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WebflowHeroScroll() {
  return (
    <section className="relative overflow-hidden border-b border-sky-950/8 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#f3f8ff_42%,#eef6ff_100%)]">
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <div className="mx-auto max-w-3xl">
              <p className="text-[11px] tracking-[0.3em] text-sky-700 uppercase">
                Webflow-inspired homepage
              </p>
              <h1 className="mt-5 text-5xl leading-[0.9] font-medium tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-8xl">
                A brighter storytelling system for connected critical care.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                This alternate route treats PlasmIT as its own polished
                marketing entity: lighter, smoother, and more interactive while
                preserving the same crawled content and page architecture.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-11 border border-sky-500 bg-sky-500 px-5 text-white hover:bg-sky-600"
                >
                  <Link href="/webflow/pimed">
                    Explore PiMed
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 border-sky-200 bg-white px-5 text-slate-950 hover:bg-sky-50"
                >
                  <Link href="/webflow/contact-us">
                    <CirclePlay className="size-4" />
                    Request a walkthrough
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid h-full w-full grid-cols-1 rounded-b-none bg-white">
          <div className="border-b-none relative min-h-[16rem] w-full border-slate-200/80 lg:border-r lg:border-b-0">
            <video
              className="absolute inset-0 h-full w-full rounded-b-none object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Webflow hero product demo video"
            >
              <source src="/media/webflow-hero-demo.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}
