"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-12 h-6" />

  const isDark = theme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "relative h-7 w-12 rounded-full overflow-hidden transition-colors duration-300",
        isDark ? "bg-zinc-800 border-zinc-700" : "bg-zinc-100 border-zinc-200"
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Pill Background */}
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-white dark:bg-zinc-900 shadow-sm"
          animate={{
            x: isDark ? 12 : -12,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />

        {/* Icons */}
        <div className="relative z-10 flex justify-between w-full px-1">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isDark ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-3.5 h-3.5 text-zinc-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Button>
  )
}
