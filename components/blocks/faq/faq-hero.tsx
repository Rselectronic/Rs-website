import { HelpCircle } from 'lucide-react';

export function FaqHero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-[var(--blue-50)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-5 w-5 text-[var(--primary)]" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)] font-medium">
            FAQ
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6 text-[var(--blue-900)]">
          Answers to
          <br />
          <span className="italic font-normal text-[var(--primary)]">common questions</span>
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-20 rounded-full bg-[var(--primary)]" />
          <div className="h-1 w-8 rounded-full bg-[var(--primary)] opacity-40" />
        </div>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
          In the manufacturing world, many factors have to be taken into
          consideration to ensure successful production. Here are the questions we
          get asked most.
        </p>
      </div>
    </section>
  );
}
