'use client';

import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function ContactForm() {
  const { t } = useI18n();

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[var(--blue-900)] mb-1">
                {t('form.title')}
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-8">
                {t('form.subtitle')}
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                      {t('form.name')} <span className="text-[var(--destructive)]">*</span>
                    </label>
                    <input type="text" required placeholder={t('form.name')} className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                      {t('form.company')} <span className="text-[var(--destructive)]">*</span>
                    </label>
                    <input type="text" required placeholder={t('form.company')} className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                      {t('form.email')} <span className="text-[var(--destructive)]">*</span>
                    </label>
                    <input type="email" required placeholder="you@company.com" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                      {t('form.phone')}
                    </label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                    {t('form.message')}
                  </label>
                  <textarea rows={5} placeholder={t('form.message.placeholder')} className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all resize-none" />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> {t('form.submit')}
                </Button>

                <p className="font-mono text-[10px] text-center text-[var(--muted-foreground)] tracking-wide">
                  {t('form.response')}
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[var(--blue-900)] mb-6">{t('form.details')}</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-medium text-[var(--blue-900)] mb-0.5">{t('form.address')}</p>
                  <p className="text-[var(--muted-foreground)]">5580 Rue Vanden Abeele<br />Saint-Laurent, QC H4S 1P9</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--blue-900)] mb-0.5">{t('form.phone')}</p>
                  <a href="tel:4388338477" className="text-[var(--primary)] hover:underline">+1 (438) 833-8477</a>
                </div>
                <div>
                  <p className="font-medium text-[var(--blue-900)] mb-0.5">{t('form.sales')}</p>
                  <a href="mailto:sales@rspcbassembly.com" className="text-[var(--primary)] hover:underline">sales@rspcbassembly.com</a>
                </div>
                <div>
                  <p className="font-medium text-[var(--blue-900)] mb-0.5">{t('form.general')}</p>
                  <a href="mailto:info@rspcbassembly.com" className="text-[var(--primary)] hover:underline">info@rspcbassembly.com</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[var(--blue-900)] mb-4">{t('form.hours')}</h3>
              <div className="text-sm space-y-2">
                <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">{t('form.weekdays')}</span><span className="font-medium">{t('form.weekdays.time')}</span></div>
                <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">{t('form.weekend')}</span><span className="font-medium">{t('form.weekend.time')}</span></div>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] mt-4">{t('form.urgent')}</p>
            </div>

            <div className="rounded-2xl bg-[var(--blue-900)] p-8 text-white">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-3">{t('form.memberships')}</p>
              <p className="text-sm text-white/70">IPC · SMTA · STIQ · CFIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
