'use client';

import { Zap, Shield, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const props = [
  {
    icon: Zap,
    title: 'Same-Day Quotes',
    body: 'Get your PCB assembly quote within the same day. 24–48 hour turn capability for urgent builds — no premium fees on standard lead times.',
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
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-3">
          WHY RS PCB ASSEMBLY
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-12">
          Built for engineers who need it done right
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6 hover:border-[--border-accent] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[--accent-dim] flex items-center justify-center mb-5">
                <prop.icon className="h-6 w-6 text-[--accent-blue]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[--text-primary] mb-3">
                {prop.title}
              </h3>
              <p className="text-sm text-[--text-secondary] leading-relaxed">
                {prop.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
