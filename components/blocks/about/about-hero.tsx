'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '2003', label: 'Year founded' },
  { value: '35+ yrs', label: 'Field experience' },
  { value: '20+ yrs', label: 'As a company' },
  { value: '200–400', label: 'Products/year' },
];

export function AboutHero() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
          ABOUT US
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[--text-primary] mb-6 leading-tight">
          35 years of experience. One standard: excellence.
        </h1>
        <p className="text-lg text-[--text-secondary] leading-relaxed max-w-2xl mx-auto mb-16">
          R. S. Électronique Inc. has been serving the Montreal manufacturing
          community since 2003 — building a reputation on high quality, unwavering
          integrity, and consistent on-time delivery.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-[--border-color]">
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
