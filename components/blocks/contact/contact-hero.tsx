import { Phone, Mail, MapPin } from 'lucide-react';

const tiles = [
  {
    icon: Phone,
    label: 'Call us',
    value: '+1 (438) 833-8477',
    href: 'tel:4388338477',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'sales@rspcbassembly.com',
    href: 'mailto:sales@rspcbassembly.com',
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: '5580 Rue Vanden Abeele, Saint-Laurent, QC H4S 1P9',
    href: 'https://maps.google.com/?q=5580+Rue+Vanden+Abeele+Saint-Laurent+QC+H4S+1P9',
  },
];

export function ContactHero() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
          CONTACT
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[--text-primary] mb-6 leading-tight">
          Request a quote or get in touch
        </h1>
        <p className="text-lg text-[--text-secondary] leading-relaxed max-w-2xl mx-auto mb-12">
          R. S. Électronique Inc. is strategically located in Saint-Laurent, close
          to the highway and minutes from downtown Montreal. For a same-day quote,
          send your Gerber files and BOM to sales@rspcbassembly.com.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.href}
              target={tile.href.startsWith('http') ? '_blank' : undefined}
              rel={tile.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-2xl border border-[--border-color] bg-[--bg-surface] p-5 hover:border-[--border-accent] transition-all duration-300 text-center group"
            >
              <tile.icon className="h-6 w-6 text-[--accent-blue] mx-auto mb-3 group-hover:text-[--accent-green] transition-colors" />
              <p className="font-mono text-xs text-[--text-secondary] mb-1">{tile.label}</p>
              <p className="text-sm text-[--text-primary] font-medium">{tile.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
