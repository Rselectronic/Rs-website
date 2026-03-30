import { Phone, Mail, MapPin } from 'lucide-react';

const tiles = [
  { icon: Phone, label: 'Call us', value: '+1 (438) 833-8477', href: 'tel:4388338477' },
  { icon: Mail, label: 'Email us', value: 'sales@rspcbassembly.com', href: 'mailto:sales@rspcbassembly.com' },
  { icon: MapPin, label: 'Visit us', value: '5580 Rue Vanden Abeele, Saint-Laurent, QC H4S 1P9', href: 'https://maps.google.com/?q=5580+Rue+Vanden+Abeele+Saint-Laurent+QC+H4S+1P9' },
];

export function ContactHero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-[var(--foreground)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">Contact</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
          Request a quote
          <br />
          <span className="italic font-normal">or get in touch</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-16">
          R. S. Électronique Inc. is strategically located in Saint-Laurent, close
          to the highway and minutes from downtown Montreal. For a same-day quote,
          send your Gerber files and BOM to sales@rspcbassembly.com.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-[var(--foreground)]">
          {tiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.href}
              target={tile.href.startsWith('http') ? '_blank' : undefined}
              rel={tile.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group p-6 md:p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-[var(--foreground)] last:border-b-0 last:border-r-0 transition-colors duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <tile.icon size={20} strokeWidth={1.5} className="mb-4" />
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-1">{tile.label}</p>
              <p className="text-sm font-medium">{tile.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
