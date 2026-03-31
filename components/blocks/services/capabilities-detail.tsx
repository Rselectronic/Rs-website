'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function CapabilitiesDetail() {
  const { t } = useI18n();

  const capabilities = [
    { title: t('services.capabilities.smt.title'), detail: t('services.capabilities.smt.detail') },
    { title: t('services.capabilities.tht.title'), detail: t('services.capabilities.tht.detail') },
    { title: t('services.capabilities.mixed.title'), detail: t('services.capabilities.mixed.detail') },
    { title: t('services.capabilities.cable.title'), detail: t('services.capabilities.cable.detail') },
    { title: t('services.capabilities.boxbuild.title'), detail: t('services.capabilities.boxbuild.detail') },
    { title: t('services.capabilities.inventory.title'), detail: t('services.capabilities.inventory.detail') },
  ];

  return (
    <section className="bg-[#EFF6FF] py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            {t('services.capabilities.label')}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-16">
          {t('services.capabilities.title1')} <span className="italic font-normal">{t('services.capabilities.title2')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-8 transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2 flex items-center justify-between">
                {cap.title}
                <ArrowRight size={16} strokeWidth={1.5} className="text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-sm leading-relaxed text-[#64748B]">{cap.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
