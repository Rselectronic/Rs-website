export function ContactDetails() {
  return (
    <section className="border-t-4 border-[var(--foreground)] py-16 md:py-20 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Conveniently located in <span className="italic font-normal">Saint-Laurent</span>
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
          Our facility at 5580 Rue Vanden Abeele is close to the Trans-Canada
          Highway and accessible from across the Montreal region. Schedule a visit
          by emailing{' '}
          <a
            href="mailto:info@rspcbassembly.com"
            className="text-[var(--foreground)] underline underline-offset-4 hover:no-underline"
          >
            info@rspcbassembly.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
