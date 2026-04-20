import { useAnimation, useInView, UseInViewOptions } from "framer-motion"
import { RefObject, useEffect } from "react"

export function useInViewMotion(
  ref: RefObject<HTMLElement | null>,
  once = true,
  margin: UseInViewOptions["margin"] = "-10%"
) {
  return useInView(ref, { once, margin })
}

export function useReveal(
  ref: RefObject<HTMLElement | null>,
  { once = true, margin = "-10%" }: { once?: boolean; margin?: UseInViewOptions["margin"] } = {}
) {
  const controls = useAnimation()
  const inView = useInView(ref, { once, margin })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  return controls
}
