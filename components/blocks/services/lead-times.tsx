'use client';

import { motion } from 'framer-motion';

const leadTimes = [
  { type: 'Assembly Only (standard)', time: '1–2 weeks', notes: 'No premium fees' },
  { type: 'Full Turnkey', time: '2–3 weeks', notes: 'Includes fab + procurement + assembly' },
  { type: 'Quickturn Turnkey', time: '5–7 business days', notes: 'Subject to component availability' },
  { type: 'Urgent / Emergency', time: '24–48 hours', notes: 'Call to discuss — 438-833-8477' },
];

export function LeadTimes() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            Turnaround
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-4">
          Lead <span className="italic font-normal">times</span>
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-12">
          We offer some of the fastest turnarounds in Montreal — with no premium fees on standard lead times.
        </p>

        <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#2563EB] text-white px-6 py-4">
            <span className="font-mono text-[10px] uppercase tracking-widest">Service Type</span>
            <span className="font-mono text-[10px] uppercase tracking-widest">Lead Time</span>
            <span className="font-mono text-[10px] uppercase tracking-widest">Notes</span>
          </div>

          {leadTimes.map((lt, i) => (
            <motion.div
              key={lt.type}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-3 px-6 py-5 border-t border-[#E2E8F0] hover:bg-[#EFF6FF] transition-colors duration-200"
            >
              <span className="text-sm font-medium text-[#0F172A]">{lt.type}</span>
              <span className="font-mono text-sm font-bold text-[#2563EB]">{lt.time}</span>
              <span className="text-sm text-[#64748B]">{lt.notes}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-[#64748B] mt-8">
          For urgent orders, call{' '}
          <a href="tel:4388338477" className="text-[#2563EB] underline underline-offset-4 hover:no-underline">
            +1 (438) 833-8477
          </a>{' '}
          or email{' '}
          <a href="mailto:sales@rspcbassembly.com" className="text-[#2563EB] underline underline-offset-4 hover:no-underline">
            sales@rspcbassembly.com
          </a>
          . We&apos;ll tell you within the hour if we can hit your deadline.
        </p>
      </div>
    </section>
  );
}
