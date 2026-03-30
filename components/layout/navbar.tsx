'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  React.useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div
        className={cn(
          'bg-[var(--blue-900)] text-white transition-all duration-300 overflow-hidden',
          isScrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:4388338477" className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <Phone size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">+1 (438) 833-8477</span>
            </a>
            <a href="mailto:sales@rspcbassembly.com" className="hidden sm:flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <Mail size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">sales@rspcbassembly.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:flex items-center gap-1.5 opacity-70">
              <MapPin size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">Montreal, QC, Canada</span>
            </span>
            <span className="flex items-center gap-1.5 opacity-70">
              <Clock size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">Mon – Fri: 8 AM – 5 PM EST</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating glassy navbar */}
      <div className="px-4 md:px-6 py-2.5">
        <nav
          className={cn(
            'mx-auto max-w-7xl flex items-center justify-between h-14 px-6 transition-all duration-300',
            'rounded-2xl border border-white/40',
            'bg-white/75 backdrop-blur-2xl backdrop-saturate-150',
            'shadow-[0_2px_20px_-2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.7)_inset]',
            isScrolled && 'bg-white/85 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.1)]'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[var(--blue-900)] border border-[var(--blue-800)] flex items-center justify-center">
              <span className="font-display text-sm font-bold text-white">RS</span>
            </div>
            <span className="font-display font-bold text-sm text-[var(--foreground)] hidden sm:block">
              R.S. ELECTRONIQUE INC.
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'text-[var(--primary)] bg-[var(--blue-50)]'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--blue-700)] transition-all duration-200 shadow-md shadow-blue-500/25 px-3.5 py-2 text-xs md:px-5 md:py-2.5 md:text-sm"
            >
              <span className="md:hidden">Get a Quote</span>
              <span className="hidden md:inline">Get a Quote in 24-Hours Now!</span>
            </Link>

            <button
              className="lg:hidden p-2 rounded-xl text-[var(--foreground)] hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[5.5rem] z-40 px-4">
          <div className="mx-auto max-w-7xl rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/40 shadow-xl p-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'w-full py-3 px-4 rounded-xl text-lg font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--foreground)] hover:bg-[var(--blue-50)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-4 w-full text-center bg-[var(--primary)] text-white font-semibold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/25"
              >
                Get a Quote in 24-Hours Now!
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
