'use client';

import { motion } from 'framer-motion';

const memberships = [
  { acronym: 'IPC', name: 'Institute for Printed Circuits' },
  { acronym: 'SMTA', name: 'Surface Mount Technology Association' },
  { acronym: 'STIQ', name: 'Sous-traitance Industrielle Québec' },
  { acronym: 'CFIB', name: 'Canadian Federation of Independent Business' },
];

export function Memberships() {
  return (
    <section className="border-y-4 border-[var(--foreground)] py-20 md:py-28 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          Industry Memberships
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 border-2 border-[var(--foreground)]">
          {memberships.map((m, i) => (
            <motion.div
              key={m.acronym}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--foreground)] last:border-b-0 last:border-r-0 text-center"
            >
              <p className="font-display text-3xl font-bold mb-2">{m.acronym}</p>
              <p className="text-xs text-[var(--muted-foreground)]">{m.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
