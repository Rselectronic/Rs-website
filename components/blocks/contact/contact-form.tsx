'use client';

import { Button } from '@/components/ui/button';

export function ContactForm() {
  return (
    <section className="py-12 px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Form */}
          <div className="lg:col-span-3 rounded-2xl border border-[--border-color] bg-[--bg-surface] p-8">
            <h2 className="font-display text-2xl font-bold text-[--text-primary] mb-2">
              Request a Quote
            </h2>
            <p className="text-sm text-[--text-secondary] mb-8">
              Complete RFQs receive a same-day quote turnaround.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-[--text-secondary] mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-[--border-color] bg-[--bg-elevated] px-4 py-2.5 text-sm text-[--text-primary] placeholder:text-[--text-secondary]/50 focus:outline-none focus:border-[--accent-blue] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[--text-secondary] mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-[--border-color] bg-[--bg-elevated] px-4 py-2.5 text-sm text-[--text-primary] placeholder:text-[--text-secondary]/50 focus:outline-none focus:border-[--accent-blue] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-[--text-secondary] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-[--border-color] bg-[--bg-elevated] px-4 py-2.5 text-sm text-[--text-primary] placeholder:text-[--text-secondary]/50 focus:outline-none focus:border-[--accent-blue] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[--text-secondary] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-[--border-color] bg-[--bg-elevated] px-4 py-2.5 text-sm text-[--text-primary] placeholder:text-[--text-secondary]/50 focus:outline-none focus:border-[--accent-blue] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[--text-secondary] mb-1.5">
                  Message / Project Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project — board count, volume, assembly type (turnkey / assembly only / consignment), target lead time, and any special requirements."
                  className="w-full rounded-xl border border-[--border-color] bg-[--bg-elevated] px-4 py-2.5 text-sm text-[--text-primary] placeholder:text-[--text-secondary]/50 focus:outline-none focus:border-[--accent-blue] transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Request →
              </Button>

              <p className="font-mono text-xs text-[--text-mono] text-center">
                We typically respond within 2–4 business hours during Montreal
                business hours (Mon–Fri, 8am–5pm EST).
              </p>
            </form>
          </div>

          {/* Right — Contact Details Card */}
          <div className="lg:col-span-2 rounded-2xl border border-[--border-color] bg-[--bg-surface] p-8 font-mono text-sm h-fit">
            <p className="text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-6">
              REACH US
            </p>

            <div className="space-y-5 text-[--text-secondary]">
              <div>
                <p className="text-[--text-primary] font-medium mb-0.5">Address</p>
                <p>5580 Rue Vanden Abeele</p>
                <p>Saint-Laurent, QC H4S 1P9</p>
              </div>

              <div>
                <p className="text-[--text-primary] font-medium mb-0.5">Phone</p>
                <a href="tel:4388338477" className="hover:text-[--accent-blue] transition-colors">
                  +1 (438) 833-8477
                </a>
              </div>

              <div>
                <p className="text-[--text-primary] font-medium mb-0.5">Sales inquiries</p>
                <a href="mailto:sales@rspcbassembly.com" className="hover:text-[--accent-blue] transition-colors">
                  sales@rspcbassembly.com
                </a>
              </div>

              <div>
                <p className="text-[--text-primary] font-medium mb-0.5">General info</p>
                <a href="mailto:info@rspcbassembly.com" className="hover:text-[--accent-blue] transition-colors">
                  info@rspcbassembly.com
                </a>
              </div>
            </div>

            <div className="border-t border-[--border-color] mt-6 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
                HOURS
              </p>
              <p className="text-[--text-primary]">Mon–Fri: 8:00 AM – 5:00 PM EST</p>
              <p className="text-[--text-secondary]">Sat–Sun: Closed</p>
              <p className="text-[--text-secondary] mt-2">For urgent orders, call directly.</p>
            </div>

            <div className="border-t border-[--border-color] mt-6 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
                MEMBERSHIPS
              </p>
              <p className="text-[--text-secondary]">IPC · SMTA · STIQ · CFIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
