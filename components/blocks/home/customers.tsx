'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const customers = ['Bombardier', 'Alstom', 'Creaform', 'Pratt & Whitney Canada', 'Google'];

export function Customers() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="py-20 px-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-10">
          OUR CUSTOMERS SELL TO
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {customers.map((name) => (
            <span
              key={name}
              className="font-display font-bold text-xl text-[--text-primary]/25 hover:text-[--text-primary]/70 transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <Link
            href="/about"
            className="text-sm text-[--accent-blue] hover:text-[--accent-green] transition-colors"
          >
            Meet our customers →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
