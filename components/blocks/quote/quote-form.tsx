'use client';

import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

const inputClass =
  'w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all';

const labelClass = 'text-xs font-medium text-[var(--muted-foreground)] block mb-1.5';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12 pt-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-12 shadow-sm">
            <CheckCircle className="h-14 w-14 text-[var(--primary)] mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold text-[var(--blue-900)] mb-3">
              {t('quote.form.received.title')}
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              {t('quote.form.received.description')}{' '}
              <a href="tel:4388338477" className="text-[var(--primary)] font-medium hover:underline">
                +1 (438) 833-8477
              </a>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] hover:underline"
            >
              {t('quote.form.received.another')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[var(--blue-900)] mb-1">
                {t('quote.form.title')}
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-8">
                {t('quote.form.required')} <span className="text-[var(--destructive)]">*</span> {t('quote.form.required2')}
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Contact info */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-4 pb-2 border-b border-[var(--border)]">
                    {t('quote.form.contact.label')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        {t('quote.form.name')} <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="text" required placeholder={t('quote.form.name.placeholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t('quote.form.company')} <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="text" required placeholder={t('quote.form.company.placeholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t('quote.form.email')} <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="email" required placeholder={t('quote.form.email.placeholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('quote.form.phone')}</label>
                      <input type="tel" placeholder={t('quote.form.phone.placeholder')} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-4 pb-2 border-b border-[var(--border)]">
                    {t('quote.form.project.label')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        {t('quote.form.assemblyType')} <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <select required className={inputClass}>
                        <option value="">{t('quote.form.assemblyType.placeholder')}</option>
                        <option value="turnkey">{t('quote.form.assemblyType.turnkey')}</option>
                        <option value="assembly">{t('quote.form.assemblyType.assembly')}</option>
                        <option value="consignment">{t('quote.form.assemblyType.consignment')}</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t('quote.form.boardQty')} <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="number" required min="1" placeholder={t('quote.form.boardQty.placeholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('quote.form.components')}</label>
                      <input type="number" min="1" placeholder={t('quote.form.components.placeholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('quote.form.layers')}</label>
                      <select className={inputClass}>
                        <option value="">{t('quote.form.layers.placeholder')}</option>
                        {[1,2,4,6,8,10,12].map((n) => (
                          <option key={n} value={n}>{n}-layer</option>
                        ))}
                        <option value="other">{t('quote.form.layers.other')}</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{t('quote.form.leadTime')}</label>
                      <select className={inputClass}>
                        <option value="">{t('quote.form.leadTime.placeholder')}</option>
                        <option value="24-48hr">{t('quote.form.leadTime.urgent')}</option>
                        <option value="5-7days">{t('quote.form.leadTime.quickturn')}</option>
                        <option value="1-2weeks">{t('quote.form.leadTime.standard')}</option>
                        <option value="2-3weeks">{t('quote.form.leadTime.turnkey')}</option>
                        <option value="flexible">{t('quote.form.leadTime.flexible')}</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{t('quote.form.ipcClass')}</label>
                      <select className={inputClass}>
                        <option value="">{t('quote.form.ipcClass.placeholder')}</option>
                        <option value="class2">{t('quote.form.ipcClass.class2')}</option>
                        <option value="class3">{t('quote.form.ipcClass.class3')}</option>
                        <option value="unsure">{t('quote.form.ipcClass.unsure')}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Files note */}
                <div className="rounded-xl bg-[var(--blue-50)] border border-[var(--blue-100)] px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-1">
                    {t('quote.form.files.label')}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t('quote.form.files.description')}{' '}
                    <a href="mailto:sales@rspcbassembly.com" className="text-[var(--primary)] font-medium hover:underline">
                      sales@rspcbassembly.com
                    </a>{' '}
                    {t('quote.form.files.description2')}
                  </p>
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>{t('quote.form.notes')}</label>
                  <textarea
                    rows={4}
                    placeholder={t('quote.form.notes.placeholder')}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> {t('quote.form.submit')}
                </Button>

                <p className="font-mono text-[10px] text-center text-[var(--muted-foreground)] tracking-wide">
                  {t('quote.form.response')}
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[var(--blue-900)] mb-5">
                {t('quote.sidebar.prepare.title')}
              </h3>
              <ul className="space-y-4 text-sm text-[var(--muted-foreground)]">
                {[
                  [t('quote.sidebar.prepare.gerber'), t('quote.sidebar.prepare.gerber.desc')],
                  [t('quote.sidebar.prepare.bom'), t('quote.sidebar.prepare.bom.desc')],
                  [t('quote.sidebar.prepare.drawing'), t('quote.sidebar.prepare.drawing.desc')],
                  [t('quote.sidebar.prepare.centroid'), t('quote.sidebar.prepare.centroid.desc')],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--blue-900)]">{title}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[var(--blue-900)] mb-4">
                {t('quote.sidebar.call.title')}
              </h3>
              <a
                href="tel:4388338477"
                className="block text-[var(--primary)] text-lg font-semibold hover:underline mb-1"
              >
                +1 (438) 833-8477
              </a>
              <p className="text-sm text-[var(--muted-foreground)]">{t('quote.sidebar.call.hours')}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-3">
                {t('quote.sidebar.call.urgent')}
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--blue-900)] p-8 text-white">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-3">
                {t('quote.sidebar.leadtimes.label')}
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between"><span>{t('quote.sidebar.leadtimes.assembly')}</span><span className="font-medium text-white">{t('quote.sidebar.leadtimes.assembly.time')}</span></li>
                <li className="flex justify-between"><span>{t('quote.sidebar.leadtimes.turnkey')}</span><span className="font-medium text-white">{t('quote.sidebar.leadtimes.turnkey.time')}</span></li>
                <li className="flex justify-between"><span>{t('quote.sidebar.leadtimes.quickturn')}</span><span className="font-medium text-white">{t('quote.sidebar.leadtimes.quickturn.time')}</span></li>
                <li className="flex justify-between"><span>{t('quote.sidebar.leadtimes.emergency')}</span><span className="font-medium text-white">{t('quote.sidebar.leadtimes.emergency.time')}</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
