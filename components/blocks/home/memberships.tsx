'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export function Memberships() {
  const { t } = useI18n();

  const memberships = [
    { acronym: 'IPC', fullName: t('home.memberships.ipc'), logo: '/logos/ipc.svg', hasLogo: true },
    { acronym: 'SMTA', fullName: t('home.memberships.smta'), logo: null, hasLogo: false },
    { acronym: 'STIQ', fullName: t('home.memberships.stiq'), logo: null, hasLogo: false },
    { acronym: 'CFIB', fullName: t('home.memberships.cfib'), logo: null, hasLogo: false },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          {t('home.memberships.label')}
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {memberships.map((m, i) => (
            <motion.div
              key={m.acronym}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8 flex flex-col items-center justify-center hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-200"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                {m.hasLogo && m.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={m.logo}
                    alt={m.acronym}
                    style={{ maxHeight: 56, width: 'auto' }}
                  />
                ) : (
                  <span className="font-display text-3xl font-bold text-[var(--primary)]">
                    {m.acronym}
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--muted-foreground)] leading-snug">{m.fullName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
