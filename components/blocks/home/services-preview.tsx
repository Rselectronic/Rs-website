'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function ServicesPreview() {
  const { t } = useI18n();

  const services = [
    {
      num: '01',
      title: t('home.services.turnkey.title'),
      body: t('home.services.turnkey.body'),
      hasLink: true,
    },
    {
      num: '02',
      title: t('home.services.assembly.title'),
      body: t('home.services.assembly.body'),
      hasLink: false,
    },
    {
      num: '03',
      title: t('home.services.consignment.title'),
      body: t('home.services.consignment.body'),
      hasLink: false,
    },
  ];

  return (
    <section className="bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[var(--primary)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            {t('home.services.label')}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-[var(--blue-900)]">
          {t('home.services.title1')} <span className="italic font-normal">{t('home.services.title2')}</span>
        </h2>

        <div className="space-y-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 px-6 md:px-8 rounded-2xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
            >
              <div className="md:col-span-1 font-mono text-sm text-[var(--muted-foreground)] group-hover:text-white/60">
                {service.num}
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl font-bold text-[var(--blue-900)] group-hover:text-white">{service.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)] group-hover:text-white/80">{service.body}</p>
              </div>
              <div className="md:col-span-1 flex items-start justify-end">
                {service.hasLink && (
                  <Link href="/services" className="text-[var(--primary)] group-hover:text-white">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
