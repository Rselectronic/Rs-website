'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';

export function FaqHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1920&q=80"
            alt="PCB assembly quality control"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-6">
            FAQ
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none mb-4">
            Answers to
            <br />
            <span className="italic font-normal">common questions</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Everything you need to know about working with RS PCB Assembly —
            lead times, quality standards, service models, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
