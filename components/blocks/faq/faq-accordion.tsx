'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useI18n } from '@/lib/i18n';

export function FaqAccordion() {
  const { t } = useI18n();

  const categories = [
    {
      title: t('faq.category.working'),
      items: [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
      ],
    },
    {
      title: t('faq.category.quality'),
      items: [
        { q: t('faq.q5'), a: t('faq.a5') },
        { q: t('faq.q6'), a: t('faq.a6') },
        { q: t('faq.q7'), a: t('faq.a7') },
        { q: t('faq.q8'), a: t('faq.a8') },
      ],
    },
    {
      title: t('faq.category.technical'),
      items: [
        { q: t('faq.q9'), a: t('faq.a9') },
        { q: t('faq.q10'), a: t('faq.a10') },
        { q: t('faq.q11'), a: t('faq.a11') },
        { q: t('faq.q12'), a: t('faq.a12') },
      ],
    },
  ];

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12 pt-16">
      <div className="mx-auto max-w-3xl space-y-16">
        {categories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-1 rounded-full bg-[var(--primary)]" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)] font-medium">
                {category.title}
              </span>
            </div>
            <Accordion multiple className="space-y-3">
              {category.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${category.title}-${i}`}
                  className="border border-[var(--border)] rounded-xl px-6 transition-colors duration-200 data-[state=open]:border-[var(--primary)] data-[state=open]:bg-[var(--blue-50)] data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left font-display text-base font-medium py-5 hover:no-underline text-[var(--blue-900)]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--muted-foreground)] leading-relaxed pb-6 text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
