"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { ReactNode, useRef } from "react"
import { useReveal } from "@/hooks/motion"

export function Reveal({
  children,
  y = 18,
  delay = 0,
  className,
  ...props
}: {
  children: ReactNode
  y?: number
  delay?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const controls = useReveal(ref)
  const motionProps: HTMLMotionProps<"div"> = reduceMotion
    ? {}
    : {
        initial: "hidden",
        animate: controls,
        variants: {
          hidden: { opacity: 0, y },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.45,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        },
      }

  return (
    <motion.div ref={ref} className={className} {...motionProps} {...props}>
      {children}
    </motion.div>
  )
}
