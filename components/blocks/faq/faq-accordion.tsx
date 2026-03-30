'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const categories = [
  {
    title: 'Working With RS',
    items: [
      { q: 'What types of orders do you usually build?', a: "RS's core service is managing clients that have many different PCBA types at low to mid volumes. With an average of 200\u2013400 distinct products built each year, RS has vast experience in tracking component databases, production schedules, and pricing. Our in-house team procures all components on the BOM, orders PCBs from several fab houses, and completes the assembly in house." },
      { q: 'What is the fastest lead time you can provide?', a: 'The fastest lead time we can provide is a full turnkey board \u2014 component procurement, PCB fabrication, and assembly \u2014 completed in 3\u20135 business days. For urgent inquiries, call +1 (438) 833-8477 or email sales@rspcbassembly.com.' },
      { q: 'Is customer satisfaction guaranteed?', a: "Absolutely. R. S. \u00c9lectronique Inc. will always make sure its customers are satisfied. If anything is not right, we contact the client immediately and do whatever it takes to make it right. Customer relationships are the foundation of how we've grown over 20+ years." },
      { q: 'Do you serve customers outside of Montreal?', a: 'Yes. While we are based in Saint-Laurent, Montreal, we serve clients across Quebec, across Canada, and internationally. Our turnkey model means we can ship completed boards anywhere.' },
    ],
  },
  {
    title: 'Quality & Standards',
    items: [
      { q: 'What quality standard do you build to?', a: 'Our standard build is IPC Class 2 for all assemblies. IPC Class 3 can be met upon customer request. Strict measures are in place including IPC training for assembly staff, strict quality controls, anti-static storage and packaging, and continuous process improvement programs.' },
      { q: 'Are you ISO certified?', a: 'RS is currently working toward ISO 9001 certification. In the meantime, our processes are structured around IPC standards and have been accepted by many industry-leading companies over 20+ years.' },
      { q: 'Do you use anti-static materials for shipping?', a: 'Yes. All components and finished assemblies are stored and shipped using industry-standard anti-static materials and packaging protocols.' },
      { q: "What happens if there's an issue with my order?", a: "We contact you immediately. No ghosting, no excuses. We identify the root cause, fix the issue, and make sure it doesn't happen again. Our reputation in Montreal's manufacturing community is built on exactly this." },
    ],
  },
  {
    title: 'Technical',
    items: [
      { q: 'What assembly technologies do you support?', a: 'We support Surface Mount Technology (SMT) with automated equipment, Through-Hole Technology (THT) with lead-free wave solder, mixed SMT + THT assemblies, cable harness assembly, and complete turnkey builds including enclosures.' },
      { q: 'What is your pick and place capacity?', a: 'Our pick and place machine has a feeder capacity of 180 slots. For higher volumes, we have sub-contracting capabilities with reliable partner suppliers.' },
      { q: 'Do you have distributor integrations for component sourcing?', a: 'Yes. We have APIs connected with DigiKey and Mouser for real-time pricing and stock visibility. We are actively adding all major distributors and manufacturers to our system.' },
      { q: 'What industries have you worked in?', a: "We have direct experience in aerospace, industrial electronics, communications, and consumer electronics. Our customers' products end up at companies like Bombardier, Alstom, Creaform, Pratt & Whitney Canada, and Google. With 35 years of experience \u2014 if it has a PCB, we've likely built it." },
    ],
  },
];

export function FaqAccordion() {
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
