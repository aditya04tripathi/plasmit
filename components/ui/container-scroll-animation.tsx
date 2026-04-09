"use client"

import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import type { MotionValue } from "framer-motion"

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)
  const prefersReducedMotion = useReducedMotion()

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scaleDimensions = React.useMemo<[number, number]>(() => {
    if (prefersReducedMotion) return [1, 1]
    return isMobile ? [0.92, 1] : [1.06, 1]
  }, [isMobile, prefersReducedMotion])

  const rotate = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [18, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions)
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -96]
  )

  return (
    <div
      ref={containerRef}
      className="relative flex h-[58rem] items-center justify-center overflow-hidden px-4 sm:h-[74rem] sm:px-6 lg:px-8"
    >
      <div
        className="relative w-full py-12 sm:py-24"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

function Header({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>
  titleComponent: string | React.ReactNode
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  children: React.ReactNode
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #00000014, 0 12px 22px #1e3a8a14, 0 48px 48px #1e3a8a12, 0 96px 60px #1e3a8a0d",
      }}
      className="mx-auto mt-10 h-[24rem] w-full max-w-6xl rounded-[2rem] border border-sky-200/70 bg-[#dfeeff] p-2 sm:mt-12 sm:h-[34rem] sm:p-4 lg:h-[40rem] lg:p-5"
    >
      <div className="h-full w-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white">
        {children}
      </div>
    </motion.div>
  )
}
