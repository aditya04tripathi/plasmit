import type { Metadata } from "next"
import { Manrope, Newsreader } from "next/font/google"

import { siteMeta } from "@/lib/site-content"
import { cn } from "@/lib/utils"

import "./globals.css"

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteMeta.name,
  description: siteMeta.description,
  metadataBase: new URL("https://www.plasmitvector.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          sans.variable,
          display.variable,
          "min-h-dvh bg-background font-sans text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  )
}
