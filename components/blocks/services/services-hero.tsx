'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const { t } = useI18n();

  return (
    <section ref={containerRef} className="relative">
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <div className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
          <motion.div style={{ y }} className="relative h-full w-full">
            <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80" alt="Electronics manufacturing" fill style={{ objectFit: 'cover' }} priority />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-6">{t('services.label')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none">
            {t('services.title1')}<br /><span className="italic font-normal">{t('services.title2')}</span>{t('services.title3')}<br />{t('services.title4')}
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mt-6">{t('services.description')}</p>
        </div>
      </div>
    </section>
  );
}
