import { MapPin } from 'lucide-react';

export function ContactDetails() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="h-5 w-5 text-[var(--primary)]" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)] font-medium">
            Our Location
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--blue-900)]">
          Conveniently located in{' '}
          <span className="italic font-normal text-[var(--primary)]">Saint-Laurent</span>
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
          Our facility at 5580 Rue Vanden Abeele is close to the Trans-Canada
          Highway and accessible from across the Montreal region. Serving Quebec
          and North America since 2003. Schedule a visit by emailing{' '}
          <a
            href="mailto:info@rspcbassembly.com"
            className="text-[var(--primary)] underline underline-offset-4 hover:no-underline font-medium"
          >
            info@rspcbassembly.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
