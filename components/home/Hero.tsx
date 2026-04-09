"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motionTokens } from "@/lib/animations"

const sentence = "Critical care should not depend on physical presence."
const words = sentence.split(" ")

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const headlineY = useTransform(scrollYProgress, [0, 0.5], [0, -10])
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.88])

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] overflow-hidden bg-background"
    >
      <div className="sticky top-0 min-h-dvh overflow-hidden">
        <div className="ambient-grid absolute inset-0 opacity-75" />
        <div className="edge-vignette absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl items-center px-6 pt-28 pb-16 lg:px-8">
          <div className="max-w-5xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              The constraint of physical care
            </p>

            <motion.h1
              className="mt-8 text-5xl leading-[0.96] font-normal tracking-[-0.04em] text-balance text-foreground sm:text-7xl md:text-8xl"
              style={{
                y: headlineY,
                opacity: headlineOpacity,
              }}
            >
              {sentence}
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: motionTokens.duration.fast,
                ease: motionTokens.ease,
              }}
            >
              Care today is limited by location, timing, and fragmented systems.
            </motion.p>

            <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
              <Card className="bg-card/60">
                <CardHeader className="pb-0">
                  <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                    Today
                  </p>
                  <CardTitle className="mt-3 text-base font-medium tracking-[-0.01em] text-foreground">
                    Periodic. Fragmented. Location-bound.
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Periodic rounds. Delayed interventions. Data scattered
                    across devices and teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/60">
                <CardHeader className="pb-0">
                  <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                    With PiMed
                  </p>
                  <CardTitle className="mt-3 text-base font-medium tracking-[-0.01em] text-foreground">
                    Continuous, connected visibility.
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Continuous connected care, visible, interpretable, and
                    actionable from anywhere.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="fade-to-bg absolute right-0 bottom-0 left-0 h-28"
        />
      </div>
    </section>
  )
}
