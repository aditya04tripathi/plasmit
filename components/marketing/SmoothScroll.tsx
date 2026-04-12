"use client"

import { type ReactNode, useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 0.55,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 1.25,
      smoothWheel: true,
      wheelMultiplier: 1.15,
      syncTouch: true,
      syncTouchLerp: 0.12,
    })

    let raf = 0
    const onFrame = (time: number) => {
      lenis.raf(time)
      raf = window.requestAnimationFrame(onFrame)
    }
    raf = window.requestAnimationFrame(onFrame)

    return () => {
      window.cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

