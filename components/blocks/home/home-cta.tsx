import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HomeCta() {
  return (
    <section className="bg-[var(--blue-900)] text-white relative overflow-hidden">
      {/* Radial gradient texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at top center, rgba(37,99,235,0.3), transparent 70%)',
        }}
      />
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40 relative text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          Ready to get <span className="italic font-normal">started?</span>
        </h2>
        <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
          Send us your Gerber files and BOM. We&apos;ll have a quote back to you the same day.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button asChild className="bg-[var(--primary)] text-white border-[var(--primary)] hover:bg-white hover:text-[var(--blue-900)] rounded-xl px-8 py-3">
            <Link href="/quote">
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--blue-900)] rounded-xl px-8 py-3">
            <a href="tel:4388338477">+1 (438) 833-8477</a>
          </Button>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
          5580 Rue Vanden Abeele, Saint-Laurent, QC &middot; sales@rspcbassembly.com
        </p>
      </div>
    </section>
  );
}
