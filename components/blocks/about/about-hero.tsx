'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';

const stats = [
  { value: '2003', label: 'Year founded' },
  { value: '35+ yrs', label: 'Field experience' },
  { value: '20+ yrs', label: 'As a company' },
  { value: '200–400', label: 'Products/year' },
];

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative">
      {/* Hero image container */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <div className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
          <motion.div style={{ y }} className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1920&q=80"
              alt="Circuit board closeup"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-6">
            About Us
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none">
            35 years of experience.
            <br />
            <span className="italic font-normal">One standard: excellence.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mt-6">
            R. S. Électronique Inc. has been serving the Montreal manufacturing
            community since 2003 — building a reputation on high quality, unwavering
            integrity, and consistent on-time delivery.
          </p>
        </div>
      </div>

      {/* Stats row — dark blue */}
      <div className="bg-[#0F172A] mx-4 md:mx-8 rounded-2xl -mt-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-white/10 last:border-b-0 last:border-r-0"
              >
                <p className="font-display text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
