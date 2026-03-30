import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ServicesCta() {
  return (
    <section className="bg-[#0F172A] relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at top center, #2563EB, transparent 60%)',
          opacity: 0.15,
        }}
      />
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 relative text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
          Ready to get <span className="italic font-normal">started?</span>
        </h2>
        <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-12">
          Send us your Gerber files and BOM. We&apos;ll have a quote back to you the same day.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button asChild>
            <Link href="/contact">
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#0F172A] hover:border-white">
            <a href="tel:4388338477">+1 (438) 833-8477</a>
          </Button>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
          5580 Rue Vanden Abeele, Saint-Laurent, QC · sales@rspcbassembly.com
        </p>
      </div>
    </section>
  );
}
