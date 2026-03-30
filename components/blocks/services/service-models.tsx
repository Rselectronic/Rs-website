'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ServiceModels() {
  return (
    <section className="border-y-4 border-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-12">
          How would you like to <span className="italic font-normal">work with us?</span>
        </h2>

        <Tabs defaultValue="turnkey" className="w-full">
          <TabsList className="w-full flex border-2 border-[var(--foreground)] bg-transparent p-0 mb-10 h-auto">
            {['turnkey', 'assembly', 'consignment'].map((val) => (
              <TabsTrigger
                key={val}
                value={val}
                className="flex-1 font-mono text-xs uppercase tracking-widest py-4 data-[state=active]:bg-[var(--foreground)] data-[state=active]:text-[var(--background)] text-[var(--muted-foreground)] transition-colors duration-100 border-r-2 border-[var(--foreground)] last:border-r-0"
              >
                {val === 'turnkey' ? 'Turnkey' : val === 'assembly' ? 'Assembly Only' : 'Consignment'}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="turnkey" className="border-2 border-[var(--foreground)] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold mb-4">Turnkey PCB Manufacturing</h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">We manage the entire process:</p>
            <ul className="space-y-3 text-[var(--muted-foreground)] mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" />
                <span><strong className="text-[var(--foreground)]">PCB Fabrication</strong> — ordered from our network of trusted fab houses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" />
                <span><strong className="text-[var(--foreground)]">Component Procurement</strong> — full BOM sourcing and management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" />
                <span><strong className="text-[var(--foreground)]">PCB Assembly</strong> — completed in-house at our Saint-Laurent facility</span>
              </li>
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest">Best for: Companies that want to hand off the entire supply chain.</p>
          </TabsContent>

          <TabsContent value="assembly" className="border-2 border-[var(--foreground)] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold mb-6">Assembly Only</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-4 pb-2 border-b-2 border-[var(--foreground)] inline-block">You provide</p>
                <ul className="space-y-3 text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>Bare PCBs</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>All components per BOM</span></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-4 pb-2 border-b-2 border-[var(--foreground)] inline-block">We provide</p>
                <ul className="space-y-3 text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>Full in-house assembly</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>Same quality standards as turnkey</span></li>
                </ul>
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest">Best for: Companies with existing supplier relationships who just need reliable assembly.</p>
          </TabsContent>

          <TabsContent value="consignment" className="border-2 border-[var(--foreground)] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold mb-4">Consignment / Partial Consignment</h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">Flexible hybrid model:</p>
            <ul className="space-y-3 text-[var(--muted-foreground)] mb-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>You supply either PCBs, components, or select components</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>RS sources the remainder and manages inventory</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[var(--foreground)] mt-2 shrink-0" /><span>We can stock your recurring components for ongoing programs</span></li>
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest">Best for: Long-running programs or companies managing multi-source procurement.</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
