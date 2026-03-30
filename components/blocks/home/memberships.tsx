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
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-10">
          INDUSTRY MEMBERSHIPS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memberships.map((m, i) => (
            <motion.div
              key={m.acronym}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6 hover:border-[--border-accent] transition-all duration-300"
            >
              <p className="font-mono text-2xl font-bold text-[--accent-blue] mb-2">
                {m.acronym}
              </p>
              <p className="text-xs text-[--text-secondary]">{m.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
