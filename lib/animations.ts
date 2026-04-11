export const routeTransitions = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.02, y: -10 },
  transition: {
    duration: 0.4,
    ease: [0.25, 1, 0.5, 1], // custom cubic-bezier for a premium feel
  }
} as const

export const motionTokens = {
  ease: [0.45, 0, 0.55, 1] as const,
  duration: {
    fast: 0.6,
    base: 0.9,
    slow: 1.2,
  },
} as const
