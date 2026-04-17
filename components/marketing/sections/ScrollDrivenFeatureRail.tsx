"use client"

import { useEffect, useRef, useState } from "react"

import type { FeatureCard } from "@/lib/site-content"
import { featureGridIcons } from "@/components/marketing/sections/feature-grid-icons"

const STICKY_TOP_PX = 96

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function ScrollDrivenFeatureRail({ items }: { items: FeatureCard[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const frameRef = useRef<number | null>(null)
  const maxTranslateRef = useRef(0)

  const [isScrollDriven, setIsScrollDriven] = useState(false)
  const [wrapperHeight, setWrapperHeight] = useState<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    )

    const updateMode = () => {
      setIsScrollDriven(mediaQuery.matches)
    }

    updateMode()
    mediaQuery.addEventListener("change", updateMode)

    return () => {
      mediaQuery.removeEventListener("change", updateMode)
    }
  }, [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const sticky = stickyRef.current
    const viewport = viewportRef.current
    const track = trackRef.current

    if (!wrapper || !sticky || !viewport || !track) return

    const applyTranslate = () => {
      if (!isScrollDriven) {
        track.style.transform = "translate3d(0px, 0px, 0px)"
        return
      }

      const rect = wrapper.getBoundingClientRect()
      const translate = clamp(
        STICKY_TOP_PX - rect.top,
        0,
        maxTranslateRef.current
      )
      track.style.transform = `translate3d(${-translate}px, 0px, 0px)`
    }

    const recalc = () => {
      if (!isScrollDriven) {
        maxTranslateRef.current = 0
        setWrapperHeight(null)
        track.style.transform = "translate3d(0px, 0px, 0px)"
        return
      }

      const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth)
      const stickyHeight = sticky.offsetHeight

      maxTranslateRef.current = maxTranslate
      setWrapperHeight(stickyHeight + maxTranslate)
      applyTranslate()
    }

    const onScroll = () => {
      if (frameRef.current !== null) return

      frameRef.current = window.requestAnimationFrame(() => {
        applyTranslate()
        frameRef.current = null
      })
    }

    recalc()
    window.addEventListener("resize", recalc)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", recalc)
      window.removeEventListener("scroll", onScroll)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isScrollDriven, items.length])

  const cards = items.map((item) => {
    const Icon = featureGridIcons[item.icon]

    return (
      <li
        key={item.title}
        className="group min-w-[18rem] shrink-0 border-l-2 border-border/70 bg-muted/20 p-4 transition-colors duration-200 hover:border-primary hover:bg-muted/35 md:min-w-[20rem] xl:min-w-88"
      >
        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-foreground/10 bg-foreground/5 text-primary transition-colors duration-200 group-hover:bg-primary/12">
            <Icon className="size-4" />
          </div>
          <div className="space-y-1.5">
            <h3 className="leading-snug font-medium tracking-[-0.025em] text-foreground">
              {item.title}
            </h3>
            <p className="leading-6 text-muted-foreground">{item.body}</p>
          </div>
        </div>
      </li>
    )
  })

  if (!isScrollDriven) {
    return (
      <div className="mt-5 overflow-x-auto pb-1">
        <ul className="flex min-w-max gap-3.5 pr-1">{cards}</ul>
      </div>
    )
  }

  return (
    <div
      ref={wrapperRef}
      className="relative mt-5"
      style={wrapperHeight ? { height: `${wrapperHeight}px` } : undefined}
    >
      <div
        ref={stickyRef}
        className="sticky"
        style={{ top: `${STICKY_TOP_PX}px` }}
      >
        <div ref={viewportRef} className="overflow-hidden">
          <ul
            ref={trackRef}
            className="flex min-w-max gap-3.5 will-change-transform"
          >
            {cards}
          </ul>
        </div>
      </div>
    </div>
  )
}
