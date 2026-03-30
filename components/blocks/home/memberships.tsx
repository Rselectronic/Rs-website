'use client';

import { motion } from 'framer-motion';

const memberships = [
  { acronym: 'IPC', name: 'Institute for Printed Circuits' },
  { acronym: 'SMTA', name: 'Surface Mount Technology Association' },
  { acronym: 'STIQ', name: 'Sous-traitance Industrielle Qu\u00e9bec' },
  { acronym: 'CFIB', name: 'Canadian Federation of Independent Business' },
];

export function Memberships() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          Industry Memberships
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {memberships.map((m, i) => (
            <motion.div
              key={m.acronym}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8 text-center hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-200"
            >
              <p className="font-display text-3xl font-bold text-[var(--primary)] mb-2">{m.acronym}</p>
              <p className="text-xs text-[var(--muted-foreground)]">{m.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
