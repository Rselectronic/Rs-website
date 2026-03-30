'use client';

import { Target, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: Target,
    title: 'Mission',
    body: 'To provide high quality assembly solutions for companies and individuals looking to produce printed circuit boards.',
  },
  {
    icon: Globe,
    title: 'Vision',
    body: 'To become one of the most reputable Electronics Manufacturing Service providers in the world by ensuring high quality and customer satisfaction.',
  },
  {
    icon: Users,
    title: 'Values',
    body: 'Maintain strong relationships with all clients and always provide the best service possible.',
  },
];

export function MissionVisionValues() {
  return (
    <section className="py-24 px-6 border-y border-[--border-color] bg-[--bg-surface]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-[--border-color] bg-[--bg-elevated] p-6 hover:border-[--border-accent] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[--accent-dim] flex items-center justify-center mb-5">
                <card.icon className="h-6 w-6 text-[--accent-blue]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[--text-primary] mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-[--text-secondary] leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
