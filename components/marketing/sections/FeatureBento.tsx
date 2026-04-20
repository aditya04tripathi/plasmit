import type { FeatureCard } from "@/lib/site-content"
import { featureGridIcons } from "@/components/marketing/sections/feature-grid-icons"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"
import { Reveal } from "@/components/motion/Reveal"
import { cn } from "@/lib/utils"

const BENTO_PLACEMENTS_4 = [
  "md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2",
  "md:col-start-4 md:col-span-3 md:row-start-1",
  "md:col-start-4 md:col-span-3 md:row-start-2",
  "md:col-start-1 md:col-span-6 md:row-start-3",
] as const

const BENTO_PLACEMENTS_6 = [
  "md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2",
  "md:col-start-4 md:col-span-3 md:row-start-1",
  "md:col-start-4 md:col-span-3 md:row-start-2",
  "md:col-start-1 md:col-span-2 md:row-start-3",
  "md:col-start-3 md:col-span-2 md:row-start-3",
  "md:col-start-5 md:col-span-2 md:row-start-3",
] as const

const BENTO_PLACEMENTS_8 = [
  "md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2",
  "md:col-start-4 md:col-span-3 md:row-start-1",
  "md:col-start-4 md:col-span-3 md:row-start-2",
  "md:col-start-1 md:col-span-2 md:row-start-3",
  "md:col-start-3 md:col-span-2 md:row-start-3",
  "md:col-start-5 md:col-span-2 md:row-start-3",
  "md:col-start-1 md:col-span-3 md:row-start-4",
  "md:col-start-4 md:col-span-3 md:row-start-4",
] as const

function bentoPlacement(index: number, count: number): string {
  if (count === 4 && index < BENTO_PLACEMENTS_4.length) {
    return BENTO_PLACEMENTS_4[index]
  }
  if (count === 6 && index < BENTO_PLACEMENTS_6.length) {
    return BENTO_PLACEMENTS_6[index]
  }
  if (count === 8 && index < BENTO_PLACEMENTS_8.length) {
    return BENTO_PLACEMENTS_8[index]
  }
  return "md:col-span-2"
}

function bentoGridRowsClass(count: number): string {
  if (count === 8) {
    return "md:grid-rows-[minmax(0,auto)_minmax(0,auto)_minmax(0,auto)_minmax(0,auto)]"
  }
  return "md:grid-rows-[minmax(0,auto)_minmax(0,auto)_minmax(0,auto)]"
}

export function FeatureBento({
  badge,
  title,
  description,
  items,
}: {
  badge?: string
  title: string
  description?: string
  items: FeatureCard[]
}) {
  const count = items.length

  return (
    <Section>
      <Reveal>
        <SectionHeading badge={badge} title={title} description={description} />
      </Reveal>
      <ul
        className={cn(
          "mt-6 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6",
          bentoGridRowsClass(count)
        )}
      >
        {items.map((item, index) => {
          const Icon = featureGridIcons[item.icon]
          const placement = bentoPlacement(index, count)
          const isHero = index === 0

          return (
            <li
              key={item.title}
              className={cn(
                "flex border border-border/70 bg-muted/15 transition-colors duration-200 hover:border-primary/45 hover:bg-muted/28",
                isHero && "border-l-2 border-l-primary/55 bg-muted/20",
                placement
              )}
            >
              <div
                className={cn(
                  "flex w-full flex-col gap-3 p-4 sm:p-5",
                  isHero && "sm:gap-4 sm:p-6 md:justify-between"
                )}
              >
                <div
                  className={cn(
                    "inline-flex shrink-0 items-center justify-center border border-foreground/10 text-primary",
                    isHero ? "h-10 w-10 sm:h-11 sm:w-11" : "h-9 w-9"
                  )}
                >
                  <Icon className={cn(isHero ? "size-4.5" : "size-4")} />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <h3
                    className={cn(
                      "leading-snug font-medium tracking-[-0.025em] text-balance text-foreground",
                      isHero &&
                        "text-lg tracking-[-0.03em] sm:text-xl md:max-w-[24ch]",
                      count === 4 &&
                        index === 3 &&
                        "md:max-w-[min(100%,42rem)]"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "leading-body text-muted-foreground",
                      isHero && "md:max-w-prose md:text-base",
                      count === 4 && index === 3 && "md:max-w-[65ch]"
                    )}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
