import type { Metadata } from 'next';
import { FaqHero } from '@/components/blocks/faq/faq-hero';
import { FaqAccordion } from '@/components/blocks/faq/faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ | RS PCB Assembly — Common Questions Answered',
  description:
    'Answers to common questions about PCB assembly services, lead times, quality standards, and working with R. S. Électronique Inc. in Montreal.',
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqAccordion />
    </>
  );
}
