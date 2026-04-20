"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className,
  ...props
}: {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? "visible" : "hidden"}
      animate={reduceMotion ? "visible" : undefined}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={reduceMotion ? undefined : { once: true, margin: "-12%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup(
  props: {
    children: ReactNode
    staggerDelay?: number
    delayChildren?: number
    className?: string
  } & HTMLMotionProps<"div">
) {
  return <StaggerContainer {...props} />
}

export function StaggerItem({
  children,
  y = 20,
  className,
  ...props
}: {
  children: ReactNode
  y?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={
        reduceMotion
          ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
          : {
              hidden: { opacity: 0, y },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
