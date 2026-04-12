export function HeroArchitectureDiagram() {
  return (
    <svg
      role="img"
      aria-label="Diagram: ICU bedside edge, secured cloud handoff, and PiMed on mobile."
      viewBox="0 0 400 200"
      className="h-full w-full max-h-[200px] text-primary"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="16"
        width="376"
        height="168"
        rx="4"
        className="stroke-border"
        strokeWidth="1"
        fill="color-mix(in srgb, var(--primary) 8%, transparent)"
      />
      <rect
        x="36"
        y="64"
        width="80"
        height="72"
        rx="4"
        className="stroke-primary/50"
        strokeWidth="1.5"
        fill="var(--background)"
      />
      <rect
        x="160"
        y="64"
        width="80"
        height="72"
        rx="4"
        className="stroke-primary/50"
        strokeWidth="1.5"
        fill="var(--background)"
      />
      <rect
        x="284"
        y="64"
        width="80"
        height="72"
        rx="4"
        className="stroke-primary/50"
        strokeWidth="1.5"
        fill="var(--background)"
      />
      <circle cx="76" cy="92" r="6" className="fill-primary/70" />
      <path
        d="M76 104 v16 M68 112 h16"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 78 v44 M190 88 h20 M190 112 h20"
        className="stroke-muted-foreground opacity-60"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="308"
        y="88"
        width="32"
        height="48"
        rx="4"
        className="stroke-primary"
        strokeWidth="1.5"
        fill="var(--background)"
      />
      <path
        d="M116 100 H160 M240 100 H284"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
