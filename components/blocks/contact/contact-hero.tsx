import { Phone, Mail, MapPin } from 'lucide-react';

const tiles = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (438) 833-8477',
    href: 'tel:4388338477',
    description: 'Mon\u2013Fri, 8am\u20135pm EST',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@rspcbassembly.com',
    href: 'mailto:sales@rspcbassembly.com',
    description: 'Same-day quote turnaround',
  },
  {
    icon: MapPin,
    label: 'Visit',
    value: '5580 Rue Vanden Abeele',
    href: 'https://maps.google.com/?q=5580+Rue+Vanden+Abeele+Saint-Laurent+QC+H4S+1P9',
    description: 'Saint-Laurent, QC H4S 1P9',
  },
];

export function ContactHero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <Mail className="h-5 w-5 text-[var(--primary)]" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)] font-medium">
            Contact
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6 text-[var(--blue-900)]">
          Request a quote
          <br />
          <span className="italic font-normal text-[var(--primary)]">or get in touch</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-16">
          R. S. Électronique Inc. is strategically located in Saint-Laurent, close
          to the highway and minutes from downtown Montreal. For a same-day quote,
          send your Gerber files and BOM to sales@rspcbassembly.com.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.href}
              target={tile.href.startsWith('http') ? '_blank' : undefined}
              rel={tile.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8 transition-all duration-200 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--blue-50)] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-200">
                <tile.icon size={22} strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)] mb-1">
                {tile.label}
              </p>
              <p className="text-sm font-semibold text-[var(--blue-900)] mb-1">{tile.value}</p>
              <p className="text-xs text-[var(--muted-foreground)]">{tile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
