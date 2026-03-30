'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '180', label: 'Pick & place feeder slots' },
  { value: '24–48hr', label: 'Fastest assembly turnaround' },
  { value: 'IPC Cl.2', label: 'Build standard' },
  { value: '200–400', label: 'Distinct products per year' },
  { value: '3–5 days', label: 'Fastest full turnkey' },
];

export function CapabilitiesStats() {
  return (
    <section className="py-16 px-6 border-y border-[--border-color] bg-[--bg-surface]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[--accent-blue]">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-[--text-secondary] uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
