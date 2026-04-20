"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"

export function StackReveal({
  children,
  index = 0,
  className,
  ...props
}: {
  children: ReactNode
  index?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion()
  const motionProps: HTMLMotionProps<"div"> = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98, y: 18 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true, margin: "-12%" },
        transition: {
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.12,
        },
      }

  return (
    <motion.div {...motionProps} className={className} {...props}>
      {children}
    </motion.div>
  )
}
