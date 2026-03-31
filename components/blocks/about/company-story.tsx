'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export function CompanyStory() {
  const { t } = useI18n();

  const specs = [
    { label: t('about.story.spec.founded'), value: t('about.story.spec.founded.value') },
    { label: t('about.story.spec.location'), value: t('about.story.spec.location.value') },
    { label: t('about.story.spec.standard'), value: t('about.story.spec.standard.value') },
    { label: t('about.story.spec.capacity'), value: t('about.story.spec.capacity.value') },
    { label: t('about.story.spec.leadtime'), value: t('about.story.spec.leadtime.value') },
    { label: t('about.story.spec.turnkey'), value: t('about.story.spec.turnkey.value') },
    { label: t('about.story.spec.products'), value: t('about.story.spec.products.value') },
    { label: t('about.story.spec.industries'), value: t('about.story.spec.industries.value') },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6 text-[#64748B] leading-relaxed"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-[2px] bg-[#2563EB]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
                {t('about.story.label')}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-4">
              {t('about.story.title1')} <span className="italic font-normal">{t('about.story.title2')}</span>
            </h2>
            <p className="text-lg text-[#0F172A] first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#2563EB]">
              {t('about.story.p1')}
            </p>
            <p>
              {t('about.story.p2')}
            </p>
            <p>
              {t('about.story.p3')}
            </p>
          </motion.div>

          {/* Spec panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] mb-8 pb-2 border-b border-[#2563EB]/30 inline-block">
              {t('about.story.glance')}
            </p>
            <div className="space-y-5">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#64748B] block">
                    {spec.label}
                  </span>
                  <span className="font-mono text-sm text-[#0F172A]">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
