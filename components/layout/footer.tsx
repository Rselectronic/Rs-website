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
    <footer className="border-t border-[--border-color] bg-[--bg-base]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-0.5 font-mono font-bold text-lg mb-4">
              <span className="text-[--accent-blue]">RS</span>
              <span className="text-[--text-primary]">&nbsp;PCB Assembly</span>
            </Link>
            <p className="text-sm text-[--text-secondary] leading-relaxed mb-6">
              Montreal&apos;s trusted PCB assembly partner since 2003.
            </p>
            <div className="flex flex-wrap gap-2">
              {memberships.map((m) => (
                <span
                  key={m}
                  className="font-mono text-xs px-2 py-1 rounded-md bg-[--accent-dim] text-[--accent-blue] border border-[--border-accent]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[--text-secondary] hover:text-[--text-primary] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service} className="text-sm text-[--text-secondary]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[--text-secondary]">
              <li>5580 Rue Vanden Abeele,<br />Saint-Laurent, QC H4S 1P9</li>
              <li>
                <a href="tel:4388338477" className="hover:text-[--text-primary] transition-colors">
                  +1 (438) 833-8477
                </a>
              </li>
              <li>
                <a href="mailto:sales@rspcbassembly.com" className="hover:text-[--text-primary] transition-colors">
                  sales@rspcbassembly.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[--border-color]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[--text-secondary]">
            © 2026 R. S. Électronique Inc. All rights reserved.
          </p>
          <div className="flex gap-3 text-xs font-mono text-[--text-secondary]">
            <span className="text-[--text-primary]">EN</span>
            <span>|</span>
            <span className="hover:text-[--text-primary] cursor-pointer transition-colors">FR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
