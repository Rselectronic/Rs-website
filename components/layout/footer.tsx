'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

const memberships = ['IPC', 'SMTA', 'STIQ', 'CFIB'];

export function Footer() {
  const { locale, setLocale, t } = useI18n();

  const navigateLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/faq', label: t('nav.faq') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    t('footer.turnkey'),
    t('footer.assembly'),
    t('footer.consignment'),
  ];

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center">
                <span className="font-display text-base font-bold text-white">RS</span>
              </div>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex flex-wrap gap-2">
              {memberships.map((m) => (
                <span
                  key={m}
                  className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md border border-[var(--primary)]/20 text-[var(--primary)] bg-[var(--blue-50)]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-6 pb-2 border-b-2 border-[var(--primary)] inline-block">
              {t('footer.navigate')}
            </h3>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-6 pb-2 border-b-2 border-[var(--primary)] inline-block">
              {t('footer.services')}
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
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-6 pb-2 border-b-2 border-[var(--primary)] inline-block">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <li>5580 Rue Vanden Abeele,<br />Saint-Laurent, QC H4S 1P9</li>
              <li>
                <a href="tel:4388338477" className="hover:text-[var(--primary)] transition-colors duration-200">
                  +1 (438) 833-8477
                </a>
              </li>
              <li>
                <a href="mailto:sales@rspcbassembly.com" className="hover:text-[var(--primary)] transition-colors duration-200">
                  sales@rspcbassembly.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — dark blue */}
      <div className="bg-[var(--blue-900)]">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
            {t('footer.rights')}
          </p>
          <div className="flex gap-3 font-mono text-[10px] uppercase tracking-widest text-white/50">
            <button
              onClick={() => setLocale('en')}
              className={`transition-colors duration-200 ${locale === 'en' ? 'text-white' : 'hover:text-white cursor-pointer'}`}
            >
              EN
            </button>
            <span>|</span>
            <button
              onClick={() => setLocale('fr')}
              className={`transition-colors duration-200 ${locale === 'fr' ? 'text-white' : 'hover:text-white cursor-pointer'}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
