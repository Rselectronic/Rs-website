'use client';

import { Plane, Factory, Radio, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { icon: Plane, name: 'Aerospace', note: 'High-reliability builds, tight tolerances' },
  { icon: Factory, name: 'Industrial Electronics', note: 'Harsh environment, rugged assemblies' },
  { icon: Radio, name: 'Communications', note: 'RF boards, antennas, signal integrity' },
  { icon: Cpu, name: 'Consumer Electronics', note: 'Prototype-to-production pipeline' },
];

export function TeamIndustries() {
  return (
    <section className="border-y-4 border-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[var(--foreground)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            Industries Served
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Experience across <span className="italic font-normal">every sector</span>
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-16">
          Montreal&apos;s manufacturing hub has exposed RS to the full spectrum of
          electronics production. Whatever your industry, we&apos;ve built boards like yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-6 p-8 border-2 border-[var(--foreground)] -mt-[2px] -ml-[2px] first:mt-0 transition-colors duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <div className="w-12 h-12 border-2 border-current flex items-center justify-center shrink-0">
                <ind.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">{ind.name}</h3>
                <p className="text-sm opacity-70">{ind.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
