'use client';

import Image from 'next/image';

const customers = [
  { name: 'Bombardier', logo: '/logos/bombardier.svg', h: 40 },
  { name: 'Alstom', logo: '/logos/alstom.svg', h: 44 },
  { name: 'Creaform', logo: '/logos/creaform.svg', h: 28 },
  { name: 'Pratt & Whitney Canada', logo: '/logos/pratt-whitney.svg', h: 36 },
  { name: 'Google', logo: '/logos/google.png', h: 34, png: true },
];

export function Customers() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          Our Customers Sell To
        </span>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 mt-12">
          {customers.map((c) => (
            <div
              key={c.name}
              className="opacity-30 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              title={c.name}
            >
              {c.png ? (
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={c.h * 4}
                  height={c.h}
                  unoptimized
                  style={{ height: c.h, width: 'auto' }}
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{ height: c.h, width: 'auto' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
