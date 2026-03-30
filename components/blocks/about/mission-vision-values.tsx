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
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[var(--foreground)]">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-[var(--foreground)] last:border-b-0 last:border-r-0 transition-colors duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <div className="w-12 h-12 border-2 border-current flex items-center justify-center mb-6">
                <card.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 italic">{card.title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
