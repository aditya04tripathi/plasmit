"use client"

import { motion, useReducedMotion } from "framer-motion"

import { routeTransitions } from "@/lib/animations"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={routeTransitions.initial}
      animate={routeTransitions.animate}
      exit={routeTransitions.exit}
      transition={routeTransitions.transition}
    >
      {children}
    </motion.div>
  )
}
