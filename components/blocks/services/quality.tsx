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
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            Quality Assurance
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-16">
          Quality you can <span className="italic font-normal">count on</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualityPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-5 p-6 md:p-8 bg-[#EFF6FF] rounded-2xl border border-[#E2E8F0] transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                <point.icon size={18} strokeWidth={1.5} className="text-[#2563EB]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">{point.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
