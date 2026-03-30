export function ServicesHero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-[var(--foreground)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            Services
          </span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
          Full turnkey PCB
          <br />
          <span className="italic font-normal">manufacturing</span> — or just
          <br />
          the parts you need
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[4px] w-24 bg-[var(--foreground)]" />
          <div className="w-3 h-3 border-2 border-[var(--foreground)]" />
        </div>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
          R. S. Électronique Inc. has been providing PCB assembly services for over
          20 years with 35+ years of field experience. Three service models. One
          standard of quality.
        </p>
      </div>
    </section>
  );
}
