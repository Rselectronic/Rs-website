'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

const stats = [
  { value: '2003', labelKey: 'Year founded' },
  { value: '35+ yrs', labelKey: 'Field experience' },
  { value: '20+ yrs', labelKey: 'As a company' },
  { value: '200–400', labelKey: 'Products/year' },
];

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const { t } = useI18n();

  return (
    <section ref={containerRef} className="relative">
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <div className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
          <motion.div style={{ y }} className="relative h-full w-full">
            <Image src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1920&q=80" alt="Circuit board closeup" fill style={{ objectFit: 'cover' }} priority />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-6">{t('about.label')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none">
            {t('about.title1')}<br /><span className="italic font-normal">{t('about.title2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mt-6">{t('about.description')}</p>
        </div>
      </div>

      <div className="bg-[#0F172A] mx-4 md:mx-8 rounded-2xl -mt-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.labelKey} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-white/10 last:border-b-0 last:border-r-0">
                <p className="font-display text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">{stat.labelKey}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
