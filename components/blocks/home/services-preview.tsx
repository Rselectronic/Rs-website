'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Turnkey',
    body: 'We manage everything — PCB fabrication, component procurement & BOM management, and assembly. You send the files, we deliver finished boards.',
    hasLink: true,
  },
  {
    title: 'Assembly Only',
    body: 'You provide the PCBs and all components. We handle the assembly with the same precision and speed as our full turnkey builds.',
    hasLink: false,
  },
  {
    title: 'Consignment',
    body: "Partial or full consignment. You supply some materials; RS stocks and manages the rest. Flexible per project.",
    hasLink: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
          OUR SERVICES
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-12">
          Three ways to work with us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6 hover:border-[--border-accent] transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display text-xl font-bold text-[--text-primary] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[--text-secondary] leading-relaxed flex-1">
                {service.body}
              </p>
              {service.hasLink && (
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[--accent-blue] hover:text-[--accent-green] transition-colors font-medium"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
