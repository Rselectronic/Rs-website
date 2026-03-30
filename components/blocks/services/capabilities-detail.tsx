'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  { title: 'Surface Mount Technology (SMT)', detail: 'Automated pick & place with 180 feeder slots. High accuracy for fine-pitch and BGA components.' },
  { title: 'Through-Hole Technology (THT)', detail: 'Lead-free wave solder machine. Full through-hole capability including mixed boards.' },
  { title: 'Mixed SMT + THT', detail: 'Boards with both surface mount and through-hole components handled in a single workflow.' },
  { title: 'Cable Harness Assembly', detail: 'Wire harness assembly for complete electro-mechanical builds.' },
  { title: 'Complete Turnkey with Enclosures', detail: 'Full box-build capability including enclosures, mechanical assembly, and final integration.' },
  { title: 'Inventory & Consignment Management', detail: 'We stock components for ongoing programs, manage reorder points, and track component databases.' },
];

export function CapabilitiesDetail() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Core assembly <span className="italic font-normal">capabilities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 border-2 border-[var(--foreground)] -mt-[2px] -ml-[2px] transition-colors duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <h3 className="font-display text-lg font-bold mb-2 flex items-center justify-between">
                {cap.title}
                <ArrowRight size={16} strokeWidth={1.5} className="opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
              </h3>
              <p className="text-sm leading-relaxed opacity-70">{cap.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
