'use client';

import { Zap, Shield, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export function ValueProps() {
  const { t } = useI18n();

  const props = [
    {
      icon: Zap,
      title: t('home.value.quotes.title'),
      body: t('home.value.quotes.body'),
    },
    {
      icon: Shield,
      title: t('home.value.ipc.title'),
      body: t('home.value.ipc.body'),
    },
    {
      icon: Package,
      title: t('home.value.turnkey.title'),
      body: t('home.value.turnkey.body'),
    },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[var(--primary)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            {t('home.value.label')}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-[var(--blue-900)]">
          {t('home.value.title1')}<br />{t('home.value.title2')} <span className="italic font-normal">{t('home.value.title3')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 transition-all duration-200 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-200">
                <prop.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-[var(--blue-900)]">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{prop.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
