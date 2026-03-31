'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const { t } = useI18n();

  const tiles = [
    { icon: Phone, label: t('contact.phone'), value: '+1 (438) 833-8477', href: 'tel:4388338477', description: t('contact.phone.desc') },
    { icon: Mail, label: t('contact.email'), value: 'sales@rspcbassembly.com', href: 'mailto:sales@rspcbassembly.com', description: t('contact.email.desc') },
    { icon: MapPin, label: t('contact.visit'), value: '5580 Rue Vanden Abeele', href: 'https://maps.google.com/?q=5580+Rue+Vanden+Abeele+Saint-Laurent+QC+H4S+1P9', description: 'Saint-Laurent, QC H4S 1P9' },
  ];

  return (
    <section ref={containerRef} className="relative">
      <div className="relative h-[65vh] md:h-[75vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <div className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
          <motion.div style={{ y }} className="relative h-full w-full">
            <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80" alt="RS PCB Assembly facility Montreal" fill style={{ objectFit: 'cover' }} priority />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-6">{t('contact.label')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none mb-4">
            {t('contact.title1')}<br /><span className="italic font-normal">{t('contact.title2')}</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">{t('contact.description')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            {tiles.map((tile) => (
              <a key={tile.label} href={tile.href} target={tile.href.startsWith('http') ? '_blank' : undefined} rel={tile.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex items-center gap-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 hover:bg-white/20 transition-all duration-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white"><tile.icon size={18} strokeWidth={1.5} /></div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-0.5">{tile.label}</p>
                  <p className="text-sm font-semibold text-white truncate">{tile.value}</p>
                  <p className="text-xs text-white/50">{tile.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
