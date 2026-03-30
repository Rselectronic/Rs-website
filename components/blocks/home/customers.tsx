'use client';

const customers = ['Bombardier', 'Alstom', 'Creaform', 'Pratt & Whitney Canada', 'Google'];

export function Customers() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          Our Customers Sell To
        </span>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10">
          {customers.map((name) => (
            <span
              key={name}
              className="font-display text-xl md:text-2xl font-bold text-[var(--blue-900)] opacity-20 hover:opacity-100 hover:text-[var(--primary)] transition-all duration-200"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
