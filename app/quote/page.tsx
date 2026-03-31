import type { Metadata } from 'next';
import { QuoteHero } from '@/components/blocks/quote/quote-hero';
import { QuoteForm } from '@/components/blocks/quote/quote-form';

export const metadata: Metadata = {
  title: 'Request a PCB Assembly Quote | RS PCB Assembly — Same-Day Turnaround',
  description:
    'Request a same-day PCB assembly quote from RS PCB Assembly in Montreal. Turnkey, assembly-only, and consignment services. Submit your Gerbers and BOM for a fast, accurate quote.',
};

export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <QuoteForm />
    </>
  );
}
