'use client';

import Image from 'next/image';

const customers = [
  { name: 'Bombardier', logo: '/logos/bombardier.svg', height: 30 },
  { name: 'Alstom', logo: '/logos/alstom.svg', height: 40 },
  { name: 'Creaform', logo: '/logos/creaform.svg', height: 32 },
  { name: 'Pratt & Whitney Canada', logo: '/logos/pratt-whitney.svg', height: 28 },
  { name: 'Google', logo: '/logos/google.png', height: 36 },
];

export function Customers() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          Our Customers Sell To
        </span>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mt-10">
          {customers.map((c) => (
            <div
              key={c.name}
              className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={c.height * 4}
                height={c.height}
                className="object-contain"
                style={{ height: c.height, width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
