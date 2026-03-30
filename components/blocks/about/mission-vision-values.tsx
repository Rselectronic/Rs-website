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
    <section className="bg-[#EFF6FF] py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            What Drives Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mt-3">
            Mission, Vision &amp; <span className="italic font-normal">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#2563EB]/20 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <card.icon size={20} strokeWidth={1.5} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4 italic">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#64748B]">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
