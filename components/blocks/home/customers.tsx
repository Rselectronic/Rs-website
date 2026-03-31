'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

const customers = [
  { name: 'Bombardier', logo: '/logos/google.png', hasLogo: false },
  { name: 'Alstom', logo: null, hasLogo: false },
  { name: 'Creaform', logo: null, hasLogo: false },
  { name: 'Pratt & Whitney Canada', logo: null, hasLogo: false },
  { name: 'Google', logo: '/logos/google.png', hasLogo: true },
];

export function Customers() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          {t('home.customers.label')}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 mt-12">
          {customers.map((c) => (
            <div
              key={c.name}
              className="opacity-30 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              title={c.name}
            >
              {c.hasLogo && c.logo ? (
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={140}
                  height={34}
                  unoptimized
                  style={{ height: 34, width: 'auto' }}
                />
              ) : (
                <span className="font-display text-xl md:text-2xl font-bold text-[var(--blue-900)]">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
