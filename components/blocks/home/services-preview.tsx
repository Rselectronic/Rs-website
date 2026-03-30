'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Turnkey',
    body: 'We manage everything — PCB fabrication, component procurement & BOM management, and assembly. You send the files, we deliver finished boards.',
    hasLink: true,
  },
  {
    num: '02',
    title: 'Assembly Only',
    body: 'You provide the PCBs and all components. We handle the assembly with the same precision and speed as our full turnkey builds.',
    hasLink: false,
  },
  {
    num: '03',
    title: 'Consignment',
    body: 'Partial or full consignment. You supply some materials; RS stocks and manages the rest. Flexible per project.',
    hasLink: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="border-y-4 border-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[var(--foreground)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            Our Services
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Three ways to <span className="italic font-normal">work with us</span>
        </h2>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t-2 border-[var(--foreground)] last:border-b-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-100 px-4 md:px-6"
            >
              <div className="md:col-span-1 font-mono text-sm text-[var(--muted-foreground)] group-hover:text-[var(--background)] group-hover:opacity-60">
                {service.num}
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed opacity-70">{service.body}</p>
              </div>
              <div className="md:col-span-1 flex items-start justify-end">
                {service.hasLink && (
                  <Link href="/services" className="group-hover:text-[var(--background)]">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
