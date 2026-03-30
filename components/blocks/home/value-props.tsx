'use client';

import { Zap, Shield, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const props = [
  {
    icon: Zap,
    title: 'Same-Day Quotes',
    body: 'Get your PCB assembly quote within the same day. 24\u201348 hour turn capability for urgent builds — no premium fees on standard lead times.',
  },
  {
    icon: Shield,
    title: 'IPC Class 2 Standard',
    body: 'Every board ships to IPC Class 2. Need Class 3? Just ask. Strict quality controls, IPC training, and continuous process improvement are non-negotiable here.',
  },
  {
    icon: Package,
    title: 'Full Turnkey Service',
    body: 'We handle PCB fabrication, component procurement, BOM management, and final assembly. Send us your files — we deliver finished boards.',
  },
];

export function ValueProps() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[var(--primary)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            Why RS PCB Assembly
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-[var(--blue-900)]">
          Built for engineers who<br />need it done <span className="italic font-normal">right</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 transition-all duration-200 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-200">
                <prop.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-[var(--blue-900)]">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{prop.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
