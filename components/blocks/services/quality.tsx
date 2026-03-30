'use client';

import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, FileCheck } from 'lucide-react';

const qualityPoints = [
  {
    icon: Shield,
    title: 'IPC Class 2 — Standard on every build',
    body: 'All RS assemblies meet IPC Class 2 by default — the commercial/industrial standard accepted by industry-leading companies worldwide.',
  },
  {
    icon: Award,
    title: 'IPC Class 3 — Available on request',
    body: 'For aerospace, medical, and high-reliability applications, IPC Class 3 is available. Strict process controls are in place to meet this standard.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Process Improvement',
    body: 'Strict quality controls, IPC training for all assembly staff, anti-static storage and packaging, and ongoing process improvement programs.',
  },
  {
    icon: FileCheck,
    title: 'ISO 9001 — In progress',
    body: 'RS is actively working toward ISO 9001 certification.',
  },
];

export function Quality() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-12">
          Quality you can count on
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualityPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6 hover:border-[--border-accent] transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[--accent-dim] flex items-center justify-center shrink-0">
                <point.icon className="h-5 w-5 text-[--accent-blue]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[--text-primary] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-[--text-secondary] leading-relaxed">
                  {point.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
