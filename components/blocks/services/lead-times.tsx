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
    <section className="py-24 px-6 border-y border-[--border-color] bg-[--bg-surface]">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-4">
          Lead times
        </h2>
        <p className="text-[--text-secondary] leading-relaxed mb-10">
          We offer some of the fastest turnarounds in Montreal — with no premium fees on standard lead times.
        </p>

        <div className="rounded-2xl border border-[--border-color] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-[--bg-elevated] border-b border-[--border-color] px-6 py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[--accent-blue]">Service Type</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[--accent-blue]">Lead Time</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[--accent-blue]">Notes</span>
          </div>

          {leadTimes.map((lt, i) => (
            <motion.div
              key={lt.type}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-3 px-6 py-4 border-b border-[--border-color] last:border-b-0 hover:bg-[--bg-elevated] transition-colors"
            >
              <span className="text-sm text-[--text-primary] font-medium">{lt.type}</span>
              <span className="font-mono text-sm text-[--accent-blue] font-bold">{lt.time}</span>
              <span className="text-sm text-[--text-secondary]">{lt.notes}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-[--text-secondary] mt-6">
          For urgent orders, call{' '}
          <a href="tel:4388338477" className="text-[--accent-blue] hover:text-[--accent-green] transition-colors">
            +1 (438) 833-8477
          </a>{' '}
          or email{' '}
          <a href="mailto:sales@rspcbassembly.com" className="text-[--accent-blue] hover:text-[--accent-green] transition-colors">
            sales@rspcbassembly.com
          </a>
          . We&apos;ll tell you within the hour if we can hit your deadline.
        </p>
      </div>
    </section>
  );
}
