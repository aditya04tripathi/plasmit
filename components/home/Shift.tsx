export function Shift() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto flex min-h-dvh max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-32">
        <div className="surface-3 relative w-full overflow-hidden px-7 py-12 sm:px-10 sm:py-16">

          <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
            The paradigm change
          </p>

          <div className="mt-10 text-4xl leading-[1.04] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
            <div className="text-muted-foreground">
              From{" "}
              <span className="text-foreground/85">
                periodic physical rounds
              </span>
            </div>
            <div className="mt-3 text-muted-foreground">
              to{" "}
              <span className="text-foreground">
                continuous connected care.
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="divider-fade mt-10"
          />

          <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground">
            Visibility becomes continuous, signals become interpretable, and care
            becomes deliverable without being physically present.
          </p>
        </div>
      </div>
    </section>
  )
}

