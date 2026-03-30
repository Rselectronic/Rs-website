import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutCta() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[--border-color] bg-[--bg-surface] p-10 sm:p-14 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-4">
          See what we can build for you
        </h2>
        <p className="text-[--text-secondary] leading-relaxed mb-8 max-w-xl mx-auto">
          Whether you&apos;re an engineer with a prototype or a manufacturer needing
          reliable mid-volume production, RS PCB Assembly is equipped to deliver.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
