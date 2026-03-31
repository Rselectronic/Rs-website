'use client';

import { Plane, Factory, Radio, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export function TeamIndustries() {
  const { t } = useI18n();

  const industries = [
    { icon: Plane, name: t('about.industries.aerospace'), note: t('about.industries.aerospace.note') },
    { icon: Factory, name: t('about.industries.industrial'), note: t('about.industries.industrial.note') },
    { icon: Radio, name: t('about.industries.communications'), note: t('about.industries.communications.note') },
    { icon: Cpu, name: t('about.industries.consumer'), note: t('about.industries.consumer.note') },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            {t('about.industries.label')}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-4">
          {t('about.industries.title1')} <span className="italic font-normal">{t('about.industries.title2')}</span>
        </h2>
        <p className="text-[#64748B] leading-relaxed max-w-2xl mb-16">
          {t('about.industries.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-5 p-6 md:p-8 bg-[#EFF6FF] rounded-2xl border border-[#E2E8F0] transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <ind.icon size={20} strokeWidth={1.5} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-1">{ind.name}</h3>
                <p className="text-sm text-[#64748B]">{ind.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
