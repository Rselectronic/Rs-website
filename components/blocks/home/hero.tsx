'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { useI18n } from '@/lib/i18n';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start'],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const { t } = useI18n();

  return (
    <>
      {/* Parallax image hero */}
      <div className="mt-3 mx-3 md:mx-5 overflow-hidden rounded-3xl relative">
        <div
          ref={container}
          className="relative flex h-[85vh] min-h-[600px] items-end overflow-hidden"
        >
          {/* Text overlay with mix-blend */}
          <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-12 lg:p-16 text-white mix-blend-difference">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-white" />
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  {t('hero.tagline')}
                </span>
              </div>
              <p className="hidden md:block w-[28vw] text-right text-sm md:text-base leading-relaxed opacity-80">
                {t('hero.description')}
              </p>
            </div>

            {/* Bottom headline */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-[7vw] lg:text-[5.5vw] font-bold leading-[0.95] tracking-tighter uppercase">
                {t('hero.headline1')}
                <br />
                <span className="italic font-normal">{t('hero.headline2')}</span> {t('hero.headline3')}
              </h1>

              {/* CTAs below headline */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center bg-[var(--primary)] text-white font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[var(--primary)]/90 border-2 border-[var(--primary)] transition-colors duration-200"
                >
                  {t('hero.cta1')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center bg-transparent text-white font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-[var(--blue-900)] transition-colors duration-200"
                >
                  {t('hero.cta2')}
                </Link>
              </div>
            </div>
          </div>

          {/* Parallax background image */}
          <div className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
            <motion.div className="relative h-full w-full" style={{ y }}>
              <Image
                alt="Close-up of a green printed circuit board with electronic components and copper traces"
                fill
                priority
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
                style={{ objectFit: 'cover' }}
                className="brightness-[0.35]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar — dark blue */}
      <div className="bg-[var(--blue-900)] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)',
            backgroundSize: '4px 100%',
          }}
        />
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-10 relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: '35+', label: t('stats.experience') },
              { value: '200\u2013400', label: t('stats.products') },
              { value: 'IPC Cl.2', label: t('stats.standard') },
              { value: '24\u201348hr', label: t('stats.turn') },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
