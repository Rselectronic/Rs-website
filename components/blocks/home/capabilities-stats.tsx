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
    <section className="bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
      {/* Subtle vertical line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, #fff 1px, #fff 2px)',
          backgroundSize: '4px 100%',
          opacity: 0.03,
        }}
      />
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 md:py-20 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
