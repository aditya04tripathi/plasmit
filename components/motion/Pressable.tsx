"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"

export function Pressable({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion()
  const motionProps: HTMLMotionProps<"div"> = reduceMotion
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { y: 0, scale: 0.98 },
        transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      }

  return (
    <motion.div className={className} {...motionProps} {...props}>
      {children}
    </motion.div>
  )
}
