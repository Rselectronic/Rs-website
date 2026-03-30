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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]">
      {/* Top info bar */}
      <div
        className={cn(
          'border-b border-[var(--border-light)] transition-all duration-100 overflow-hidden',
          isScrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        )}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:4388338477" className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-100">
              <Phone size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">+1 (438) 833-8477</span>
            </a>
            <a href="mailto:sales@rspcbassembly.com" className="hidden sm:flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-100">
              <Mail size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">sales@rspcbassembly.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:flex items-center gap-1.5 text-[var(--muted-foreground)]">
              <MapPin size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">Montreal, QC</span>
            </span>
            <span className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
              <Clock size={12} strokeWidth={1.5} />
              <span className="font-mono text-[11px]">Mon–Fri: 8 AM – 5 PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="border-b-2 border-[var(--foreground)]">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center">
              <span className="font-display text-base font-bold">RS</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest font-medium hidden sm:block">
              R.S. Électronique Inc.
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-100',
                  pathname === link.href
                    ? 'text-[var(--foreground)] border-b-2 border-[var(--foreground)]'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-[var(--foreground)] text-[var(--background)] font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)] transition-colors duration-100"
            >
              Get a Quote →
            </Link>

            <button
              className="lg:hidden p-2 text-[var(--foreground)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[4.5rem] bg-[var(--background)] z-40 border-t-2 border-[var(--foreground)]">
          <div className="flex flex-col items-start px-8 pt-12 gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'w-full py-4 border-b border-[var(--border-light)] font-display text-3xl transition-colors duration-100',
                  pathname === link.href
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center bg-[var(--foreground)] text-[var(--background)] font-mono text-xs uppercase tracking-widest px-8 py-4 border-2 border-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors duration-100"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
