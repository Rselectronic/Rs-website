'use client';

import { MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function ContactDetails() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="h-5 w-5 text-[var(--primary)]" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)] font-medium">
            {t('location.label')}
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--blue-900)]">
          {t('location.title1')}{' '}
          <span className="italic font-normal text-[var(--primary)]">{t('location.title2')}</span>
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
          {t('location.description')}{' '}
          <a
            href="mailto:info@rspcbassembly.com"
            className="text-[var(--primary)] underline underline-offset-4 hover:no-underline font-medium"
          >
            info@rspcbassembly.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
