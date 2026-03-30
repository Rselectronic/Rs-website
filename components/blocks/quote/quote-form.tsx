'use client';

import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const inputClass =
  'w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all';

const labelClass = 'text-xs font-medium text-[var(--muted-foreground)] block mb-1.5';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

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
              Quote Request Received
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Thank you — we've received your request and will follow up within the same business day.
              For urgent orders call{' '}
              <a href="tel:4388338477" className="text-[var(--primary)] font-medium hover:underline">
                +1 (438) 833-8477
              </a>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] hover:underline"
            >
              Submit another request
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
                RFQ — Request for Quote
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-8">
                Fields marked <span className="text-[var(--destructive)]">*</span> are required.
                Attach files via email after submitting.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Contact info */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-4 pb-2 border-b border-[var(--border)]">
                    Contact Information
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Name <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Company <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="text" required placeholder="Company name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Email <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="email" required placeholder="you@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-4 pb-2 border-b border-[var(--border)]">
                    Project Details
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Assembly Type <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <select required className={inputClass}>
                        <option value="">Select service model</option>
                        <option value="turnkey">Turnkey (fab + components + assembly)</option>
                        <option value="assembly">Assembly Only (you supply boards + parts)</option>
                        <option value="consignment">Consignment / Partial Consignment</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Board Quantity <span className="text-[var(--destructive)]">*</span>
                      </label>
                      <input type="number" required min="1" placeholder="e.g. 50" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Unique Components (approx.)</label>
                      <input type="number" min="1" placeholder="e.g. 24" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>PCB Layers</label>
                      <select className={inputClass}>
                        <option value="">Select layer count</option>
                        {[1,2,4,6,8,10,12].map((n) => (
                          <option key={n} value={n}>{n}-layer</option>
                        ))}
                        <option value="other">Other / Unknown</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Target Lead Time</label>
                      <select className={inputClass}>
                        <option value="">Select lead time</option>
                        <option value="24-48hr">24–48 hours (urgent)</option>
                        <option value="5-7days">5–7 business days (quickturn)</option>
                        <option value="1-2weeks">1–2 weeks (standard)</option>
                        <option value="2-3weeks">2–3 weeks (turnkey)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>IPC Class</label>
                      <select className={inputClass}>
                        <option value="">Select IPC class</option>
                        <option value="class2">IPC Class 2 (standard)</option>
                        <option value="class3">IPC Class 3 (high-reliability)</option>
                        <option value="unsure">Not sure</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Files note */}
                <div className="rounded-xl bg-[var(--blue-50)] border border-[var(--blue-100)] px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-1">
                    Files (Gerbers + BOM)
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    After submitting, email your Gerber files, drill files, BOM, and assembly drawing to{' '}
                    <a href="mailto:sales@rspcbassembly.com" className="text-[var(--primary)] font-medium hover:underline">
                      sales@rspcbassembly.com
                    </a>{' '}
                    with your name in the subject line.
                  </p>
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>Additional Notes / Special Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Conformal coating, testing requirements, packaging, anything else we should know..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Submit Quote Request
                </Button>

                <p className="font-mono text-[10px] text-center text-[var(--muted-foreground)] tracking-wide">
                  We typically respond within 2–4 business hours (Mon–Fri, 8am–5pm EST).
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[var(--blue-900)] mb-5">
                What to prepare
              </h3>
              <ul className="space-y-4 text-sm text-[var(--muted-foreground)]">
                {[
                  ['Gerber files', 'RS-274X format preferred, including drill files.'],
                  ['Bill of Materials', 'With manufacturer part numbers (MPNs) on every line.'],
                  ['Assembly drawing', 'Top/bottom side indicator, any special placement notes.'],
                  ['Centroid / pick-and-place file', 'Optional but speeds up programming.'],
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
                Prefer to call?
              </h3>
              <a
                href="tel:4388338477"
                className="block text-[var(--primary)] text-lg font-semibold hover:underline mb-1"
              >
                +1 (438) 833-8477
              </a>
              <p className="text-sm text-[var(--muted-foreground)]">Mon–Fri, 8 AM – 5 PM EST</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-3">
                For urgent or emergency orders, call directly — we can often confirm feasibility within the hour.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--blue-900)] p-8 text-white">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-3">
                Lead Times
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between"><span>Assembly only</span><span className="font-medium text-white">1–2 weeks</span></li>
                <li className="flex justify-between"><span>Full turnkey</span><span className="font-medium text-white">2–3 weeks</span></li>
                <li className="flex justify-between"><span>Quickturn</span><span className="font-medium text-white">5–7 days</span></li>
                <li className="flex justify-between"><span>Emergency</span><span className="font-medium text-white">24–48 hrs</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
