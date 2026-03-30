'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    title: 'Surface Mount Technology (SMT)',
    detail: 'Automated pick & place with 180 feeder slots. High accuracy for fine-pitch and BGA components.',
  },
  {
    title: 'Through-Hole Technology (THT)',
    detail: 'Lead-free wave solder machine. Full through-hole capability including mixed boards.',
  },
  {
    title: 'Mixed SMT + THT',
    detail: 'Boards with both surface mount and through-hole components handled in a single workflow.',
  },
  {
    title: 'Cable Harness Assembly',
    detail: 'Wire harness assembly for complete electro-mechanical builds.',
  },
  {
    title: 'Complete Turnkey with Enclosures',
    detail: 'Full box-build capability including enclosures, mechanical assembly, and final integration.',
  },
  {
    title: 'Inventory & Consignment Management',
    detail: 'We stock components for ongoing programs, manage reorder points, and track component databases.',
  },
];

export function CapabilitiesDetail() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-12">
          Core assembly capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6 hover:border-[--border-accent] transition-all duration-300"
            >
              <h3 className="font-display text-lg font-bold text-[--text-primary] mb-2 flex items-center justify-between">
                {cap.title}
                <ArrowRight className="h-4 w-4 text-[--accent-blue] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-[--text-secondary] leading-relaxed">
                {cap.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
