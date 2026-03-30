import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HomeCta() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[--border-color] bg-[--bg-surface] p-10 sm:p-14 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-4">
          Ready to get started?
        </h2>
        <p className="text-[--text-secondary] leading-relaxed mb-8 max-w-xl mx-auto">
          Send us your Gerber files and BOM. We&apos;ll have a quote back to you the same day.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:4388338477">+1 (438) 833-8477</a>
          </Button>
        </div>

        <p className="font-mono text-xs text-[--text-mono] mt-6">
          5580 Rue Vanden Abeele, Saint-Laurent, QC · sales@rspcbassembly.com
        </p>
      </div>
    </section>
  );
}
