'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export function CapabilitiesStats() {
  const { t } = useI18n();

  const stats = [
    { value: '180', label: t('home.stats.feeders') },
    { value: '24\u201348hr', label: t('home.stats.turnaround') },
    { value: 'IPC Cl.2', label: t('home.stats.standard') },
    { value: '200\u2013400', label: t('home.stats.products') },
    { value: '3\u20135 days', label: t('home.stats.turnkey') },
  ];

  return (
    <section className="bg-[var(--blue-900)] text-white relative overflow-hidden">
      {/* Subtle vertical line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)',
          backgroundSize: '4px 100%',
        }}
      />
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 md:py-20 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
