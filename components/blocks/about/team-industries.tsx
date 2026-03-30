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
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            Industries Served
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-4">
          Experience across <span className="italic font-normal">every sector</span>
        </h2>
        <p className="text-[#64748B] leading-relaxed max-w-2xl mb-16">
          Montreal&apos;s manufacturing hub has exposed RS to the full spectrum of
          electronics production. Whatever your industry, we&apos;ve built boards like yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-5 p-6 md:p-8 bg-[#EFF6FF] rounded-2xl border border-[#E2E8F0] transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <ind.icon size={20} strokeWidth={1.5} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-1">{ind.name}</h3>
                <p className="text-sm text-[#64748B]">{ind.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
