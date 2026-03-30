'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative">
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
            alt="Electronics manufacturing"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 mix-blend-difference">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-6">
            Services
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none">
            Full turnkey PCB
            <br />
            <span className="italic font-normal">manufacturing</span> — or just
            <br />
            the parts you need
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mt-6">
            R. S. Électronique Inc. has been providing PCB assembly services for over
            20 years with 35+ years of field experience. Three service models. One
            standard of quality.
          </p>
        </div>
      </div>
    </section>
  );
}
