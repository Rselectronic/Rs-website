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
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-[var(--foreground)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            About Us
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-none">
          35 years of experience.
          <br />
          <span className="italic font-normal">One standard: excellence.</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-16">
          R. S. Électronique Inc. has been serving the Montreal manufacturing
          community since 2003 — building a reputation on high quality, unwavering
          integrity, and consistent on-time delivery.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-2 border-[var(--foreground)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 md:p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-[var(--foreground)] last:border-b-0 last:border-r-0"
            >
              <p className="font-display text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
