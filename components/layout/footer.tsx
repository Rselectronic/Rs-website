import Link from 'next/link';

const navigateLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  'Turnkey PCB Manufacturing',
  'Assembly Only',
  'Consignment / Partial Consignment',
];

const memberships = ['IPC', 'SMTA', 'STIQ', 'CFIB'];

export function Footer() {
  return (
    <footer className="relative z-10 border-t-4 border-[var(--foreground)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center">
                <span className="font-display text-base font-bold">RS</span>
              </div>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
              Montreal&apos;s trusted PCB assembly partner since 2003.
            </p>
            <div className="flex flex-wrap gap-2">
              {memberships.map((m) => (
                <span
                  key={m}
                  className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-[var(--foreground)] text-[var(--foreground)]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground)] mb-6 pb-2 border-b-2 border-[var(--foreground)] inline-block">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground)] mb-6 pb-2 border-b-2 border-[var(--foreground)] inline-block">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service} className="text-sm text-[var(--muted-foreground)]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground)] mb-6 pb-2 border-b-2 border-[var(--foreground)] inline-block">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <li>5580 Rue Vanden Abeele,<br />Saint-Laurent, QC H4S 1P9</li>
              <li>
                <a href="tel:4388338477" className="hover:text-[var(--foreground)] transition-colors duration-100">
                  +1 (438) 833-8477
                </a>
              </li>
              <li>
                <a href="mailto:sales@rspcbassembly.com" className="hover:text-[var(--foreground)] transition-colors duration-100">
                  sales@rspcbassembly.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-[var(--foreground)]">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            © 2026 R. S. Électronique Inc. All rights reserved.
          </p>
          <div className="flex gap-3 font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            <span className="text-[var(--foreground)]">EN</span>
            <span>|</span>
            <span className="hover:text-[var(--foreground)] cursor-pointer transition-colors duration-100">FR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
