'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const memberships = [
  { name: 'IPC', fullName: 'Institute for Printed Circuits', logo: '/logos/ipc.svg' },
  { name: 'SMTA', fullName: 'Surface Mount Technology Association', logo: '/logos/smta.svg' },
  { name: 'STIQ', fullName: 'Sous-traitance Industrielle Québec', logo: '/logos/stiq.svg' },
  { name: 'CFIB', fullName: 'Canadian Federation of Independent Business', logo: '/logos/cfib.svg' },
];

export function Memberships() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          Industry Memberships
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {memberships.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8 flex flex-col items-center justify-center hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-200"
            >
              <div className="h-14 flex items-center justify-center mb-3">
                <Image
                  src={m.logo}
                  alt={m.name}
                  width={120}
                  height={56}
                  className="object-contain max-h-14"
                  style={{ height: 'auto', maxHeight: 56, width: 'auto' }}
                />
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">{m.fullName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
