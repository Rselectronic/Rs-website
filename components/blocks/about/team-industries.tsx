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
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
          INDUSTRIES SERVED
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-4">
          Experience across every sector
        </h2>
        <p className="text-[--text-secondary] leading-relaxed max-w-2xl mb-12">
          Montreal&apos;s manufacturing hub has exposed RS to the full spectrum of
          electronics production. Whatever your industry, we&apos;ve built boards like yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6 hover:border-[--border-accent] transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[--accent-dim] flex items-center justify-center shrink-0 group-hover:bg-[--accent-blue]/20 transition-colors">
                <ind.icon className="h-6 w-6 text-[--accent-blue]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[--text-primary] mb-1">
                  {ind.name}
                </h3>
                <p className="text-sm text-[--text-secondary]">{ind.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
