'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[var(--foreground)]" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
              Montreal · Since 2003 · IPC Certified
            </span>
          </div>

          {/* Oversized headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter mb-8">
            Trusted
            <br />
            <span className="italic font-normal">Partner in</span>
            <br />
            PCB Assembly
          </h1>

          {/* Decorative rule with square */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[4px] w-24 bg-[var(--foreground)]" />
            <div className="w-3 h-3 border-2 border-[var(--foreground)]" />
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl mb-12">
            From prototypes to mid-volume production — we handle fabrication,
            procurement, and assembly under one roof. Same-day quotes.
            24–48 hour turn capability.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats bar — inverted */}
      <div className="bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
        {/* Subtle vertical line texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, #fff 1px, #fff 2px)',
            backgroundSize: '4px 100%',
            opacity: 0.03,
          }}
        />
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-10 relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: '35+', label: 'Years Experience' },
              { value: '200–400', label: 'Products / Year' },
              { value: 'IPC Cl.2', label: 'Build Standard' },
              { value: '24–48hr', label: 'Fastest Turn' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
