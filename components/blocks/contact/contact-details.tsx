export function ContactDetails() {
  return (
    <section className="py-16 px-6 border-t border-[--border-color]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-2xl font-bold text-[--text-primary] mb-4">
          Conveniently located in Saint-Laurent
        </h2>
        <p className="text-[--text-secondary] leading-relaxed max-w-2xl mx-auto">
          Our facility at 5580 Rue Vanden Abeele is close to the Trans-Canada
          Highway and accessible from across the Montreal region. Schedule a visit
          by emailing{' '}
          <a
            href="mailto:info@rspcbassembly.com"
            className="text-[--accent-blue] hover:text-[--accent-green] transition-colors"
          >
            info@rspcbassembly.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
