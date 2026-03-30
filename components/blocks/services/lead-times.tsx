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
    <section className="border-y-4 border-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Lead <span className="italic font-normal">times</span>
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-12">
          We offer some of the fastest turnarounds in Montreal — with no premium fees on standard lead times.
        </p>

        <div className="border-2 border-[var(--foreground)]">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[var(--foreground)] text-[var(--background)] px-6 py-4">
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
              className="grid grid-cols-3 px-6 py-5 border-t-2 border-[var(--foreground)] hover:bg-[var(--muted)] transition-colors duration-100"
            >
              <span className="text-sm font-medium">{lt.type}</span>
              <span className="font-mono text-sm font-bold">{lt.time}</span>
              <span className="text-sm text-[var(--muted-foreground)]">{lt.notes}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-[var(--muted-foreground)] mt-8">
          For urgent orders, call{' '}
          <a href="tel:4388338477" className="text-[var(--foreground)] underline underline-offset-4 hover:no-underline">
            +1 (438) 833-8477
          </a>{' '}
          or email{' '}
          <a href="mailto:sales@rspcbassembly.com" className="text-[var(--foreground)] underline underline-offset-4 hover:no-underline">
            sales@rspcbassembly.com
          </a>
          . We&apos;ll tell you within the hour if we can hit your deadline.
        </p>
      </div>
    </section>
  );
}
