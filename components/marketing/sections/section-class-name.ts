export function sectionClassName(tone: "default" | "muted" = "default") {
  return tone === "muted"
    ? "border-y border-border bg-muted/25"
    : "border-t border-border bg-background"
}
