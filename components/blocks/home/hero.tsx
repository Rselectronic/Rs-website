'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[--accent-blue] opacity-[0.03] blur-[120px] animate-pulse" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-base)_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimatedGroup preset="blur-slide" className="flex flex-col items-center gap-6">
          {/* Badge */}
          <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-[--accent-dim] text-[--accent-blue] border border-[--border-accent]">
            Montreal · Since 2003 · IPC Certified
          </span>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[--text-primary]">
            Montreal&apos;s Trusted
            <br />
            <span className="text-[--accent-blue]">PCB Assembly</span> Partner
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg text-[--text-secondary] leading-relaxed">
            From prototypes to mid-volume production — we handle PCB fabrication,
            component procurement, and assembly under one roof. Same-day quotes.
            24–48 hour turn capability.
          </p>

          {/* Trust micro-stats */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs text-[--text-mono]">
            <span>200–400 boards/year</span>
            <span className="text-[--border-color]">·</span>
            <span>IPC Class 2</span>
            <span className="text-[--border-color]">·</span>
            <span>Same-day quotes</span>
            <span className="text-[--border-color]">·</span>
            <span>35+ years experience</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Quote →</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
