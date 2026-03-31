'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export function LeadTimes() {
  const { t } = useI18n();

  const leadTimes = [
    { type: t('services.leadtimes.assembly.type'), time: t('services.leadtimes.assembly.time'), notes: t('services.leadtimes.assembly.notes') },
    { type: t('services.leadtimes.turnkey.type'), time: t('services.leadtimes.turnkey.time'), notes: t('services.leadtimes.turnkey.notes') },
    { type: t('services.leadtimes.quickturn.type'), time: t('services.leadtimes.quickturn.time'), notes: t('services.leadtimes.quickturn.notes') },
    { type: t('services.leadtimes.urgent.type'), time: t('services.leadtimes.urgent.time'), notes: t('services.leadtimes.urgent.notes') },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            {t('services.leadtimes.label')}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-4">
          {t('services.leadtimes.title1')} <span className="italic font-normal">{t('services.leadtimes.title2')}</span>
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-12">
          {t('services.leadtimes.description')}
        </p>

        <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
          {/* Header — desktop only */}
          <div className="hidden md:grid grid-cols-3 bg-[#2563EB] text-white px-6 py-4">
            <span className="font-mono text-[10px] uppercase tracking-widest">{t('services.leadtimes.header.type')}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest">{t('services.leadtimes.header.time')}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest">{t('services.leadtimes.header.notes')}</span>
          </div>

          {leadTimes.map((lt, i) => (
            <motion.div
              key={lt.type}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-3 px-6 py-5 gap-1 md:gap-0 border-t border-[#E2E8F0] hover:bg-[#EFF6FF] transition-colors duration-200"
            >
              <span className="text-sm font-medium text-[#0F172A]">{lt.type}</span>
              <span className="font-mono text-sm font-bold text-[#2563EB]">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#64748B] font-normal mr-1 md:hidden">{t('services.leadtimes.mobileLeadTime')}</span>
                {lt.time}
              </span>
              <span className="text-sm text-[#64748B]">
                <span className="font-mono text-[9px] uppercase tracking-widest mr-1 md:hidden">{t('services.leadtimes.mobileNotes')}</span>
                {lt.notes}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-[#64748B] mt-8">
          {t('services.leadtimes.footer')}{' '}
          <a href="tel:4388338477" className="text-[#2563EB] underline underline-offset-4 hover:no-underline">
            +1 (438) 833-8477
          </a>{' '}
          {t('services.leadtimes.footer2')}{' '}
          <a href="mailto:sales@rspcbassembly.com" className="text-[#2563EB] underline underline-offset-4 hover:no-underline">
            sales@rspcbassembly.com
          </a>
          {t('services.leadtimes.footer3')}
        </p>
      </div>
    </section>
  );
}
