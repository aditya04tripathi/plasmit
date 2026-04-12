export function sectionClassName(tone: "default" | "muted" = "default") {
  return tone === "muted"
    ? "border-y border-foreground/8 bg-background/92"
    : "border-t border-foreground/8 bg-background"
}
