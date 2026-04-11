"use client"

import { motion } from "framer-motion"
import { routeTransitions } from "@/lib/animations"

export default function PageTransition({ children }: { children: React.ReactNode }) {
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
