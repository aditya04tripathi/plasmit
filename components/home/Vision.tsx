"use client"

export function Vision() {
  return (
    <section className="relative bg-background">
      <div
        className="edge-vignette absolute inset-0 opacity-90"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.34em] text-muted-foreground uppercase">
              Vision
            </p>
            <h2 className="mt-8 text-4xl leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-5xl">
              Healthcare should reach the patient, not wait for the patient.
            </h2>
          </div>

          <div className="w-full">
            <div className="surface-3 px-7 py-7">
              <p className="text-xs tracking-[0.26em] text-muted-foreground uppercase">
                Thesis
              </p>
              <h3 className="mt-3 text-xl leading-[1.15] font-normal tracking-[-0.04em] text-foreground">
                Connect the signals. Connect the stakeholders.
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                PlasmIT’s thesis is simple: connect the signals, connect the
                stakeholders, and move from reactive care to point-in-time
                intervention, regardless of distance.
              </p>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Built on interoperability principles and designed for highly
                available, compliance-grade delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
