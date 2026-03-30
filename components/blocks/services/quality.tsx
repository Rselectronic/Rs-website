'use client';

import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, FileCheck } from 'lucide-react';

const qualityPoints = [
  { icon: Shield, title: 'IPC Class 2 — Standard on every build', body: 'All RS assemblies meet IPC Class 2 by default — the commercial/industrial standard accepted by industry-leading companies worldwide.' },
  { icon: Award, title: 'IPC Class 3 — Available on request', body: 'For aerospace, medical, and high-reliability applications, IPC Class 3 is available. Strict process controls are in place to meet this standard.' },
  { icon: TrendingUp, title: 'Continuous Process Improvement', body: 'Strict quality controls, IPC training for all assembly staff, anti-static storage and packaging, and ongoing process improvement programs.' },
  { icon: FileCheck, title: 'ISO 9001 — In progress', body: 'RS is actively working toward ISO 9001 certification.' },
];

export function Quality() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Quality you can <span className="italic font-normal">count on</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {qualityPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-6 p-8 border-2 border-[var(--foreground)] -mt-[2px] -ml-[2px] transition-colors duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <div className="w-10 h-10 border-2 border-current flex items-center justify-center shrink-0">
                <point.icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-sm leading-relaxed opacity-70">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
