'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ContactForm() {
  return (
    <section className="border-t-4 border-[var(--foreground)] pb-24 md:pb-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Form */}
          <div className="lg:col-span-3 border-2 border-[var(--foreground)] p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-2">Request a Quote</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-10">
              Complete RFQs receive a same-day quote turnaround.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] block mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border-b-2 border-[var(--foreground)] bg-transparent px-0 py-3 text-sm focus:border-b-[4px] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] block mb-2">Company *</label>
                  <input
                    type="text"
                    required
                    className="w-full border-b-2 border-[var(--foreground)] bg-transparent px-0 py-3 text-sm focus:border-b-[4px] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full border-b-2 border-[var(--foreground)] bg-transparent px-0 py-3 text-sm focus:border-b-[4px] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] block mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full border-b-2 border-[var(--foreground)] bg-transparent px-0 py-3 text-sm focus:border-b-[4px] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] block mb-2">Message / Project Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project — board count, volume, assembly type (turnkey / assembly only / consignment), target lead time, and any special requirements."
                  className="w-full border-2 border-[var(--foreground)] bg-transparent px-4 py-3 text-sm placeholder:text-[var(--muted-foreground)] placeholder:italic focus:border-[4px] focus:outline-none transition-all resize-none"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Request <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">
                We typically respond within 2–4 business hours during Montreal business hours (Mon–Fri, 8am–5pm EST).
              </p>
            </form>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 bg-[var(--foreground)] text-[var(--background)] p-8 md:p-10 font-mono text-sm">
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-8">Reach Us</p>

            <div className="space-y-6 opacity-80">
              <div>
                <p className="text-[var(--background)] font-medium opacity-100 mb-0.5">Address</p>
                <p className="opacity-60">5580 Rue Vanden Abeele</p>
                <p className="opacity-60">Saint-Laurent, QC H4S 1P9</p>
              </div>
              <div>
                <p className="text-[var(--background)] font-medium opacity-100 mb-0.5">Phone</p>
                <a href="tel:4388338477" className="opacity-60 hover:opacity-100 transition-opacity duration-100">+1 (438) 833-8477</a>
              </div>
              <div>
                <p className="text-[var(--background)] font-medium opacity-100 mb-0.5">Sales inquiries</p>
                <a href="mailto:sales@rspcbassembly.com" className="opacity-60 hover:opacity-100 transition-opacity duration-100">sales@rspcbassembly.com</a>
              </div>
              <div>
                <p className="text-[var(--background)] font-medium opacity-100 mb-0.5">General info</p>
                <a href="mailto:info@rspcbassembly.com" className="opacity-60 hover:opacity-100 transition-opacity duration-100">info@rspcbassembly.com</a>
              </div>
            </div>

            <div className="border-t border-[var(--background)]/20 mt-8 pt-8">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-3">Hours</p>
              <p className="opacity-80">Mon–Fri: 8:00 AM – 5:00 PM EST</p>
              <p className="opacity-40">Sat–Sun: Closed</p>
              <p className="opacity-40 mt-2">For urgent orders, call directly.</p>
            </div>

            <div className="border-t border-[var(--background)]/20 mt-8 pt-8">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-3">Memberships</p>
              <p className="opacity-60">IPC · SMTA · STIQ · CFIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
