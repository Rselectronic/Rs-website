'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ServiceModels() {
  return (
    <section className="py-24 px-6 border-y border-[--border-color] bg-[--bg-surface]">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--text-primary] mb-10 text-center">
          How would you like to work with us?
        </h2>

        <Tabs defaultValue="turnkey" className="w-full">
          <TabsList className="w-full flex bg-[--bg-elevated] rounded-xl p-1 mb-8">
            <TabsTrigger
              value="turnkey"
              className="flex-1 font-mono text-sm data-[state=active]:bg-[--accent-blue] data-[state=active]:text-[--bg-base] rounded-lg py-2.5 text-[--text-secondary] transition-all"
            >
              Turnkey
            </TabsTrigger>
            <TabsTrigger
              value="assembly"
              className="flex-1 font-mono text-sm data-[state=active]:bg-[--accent-blue] data-[state=active]:text-[--bg-base] rounded-lg py-2.5 text-[--text-secondary] transition-all"
            >
              Assembly Only
            </TabsTrigger>
            <TabsTrigger
              value="consignment"
              className="flex-1 font-mono text-sm data-[state=active]:bg-[--accent-blue] data-[state=active]:text-[--bg-base] rounded-lg py-2.5 text-[--text-secondary] transition-all"
            >
              Consignment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="turnkey" className="rounded-2xl border border-[--border-color] bg-[--bg-elevated] p-8">
            <h3 className="font-display text-xl font-bold text-[--text-primary] mb-4">
              Turnkey PCB Manufacturing
            </h3>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              We manage the entire process:
            </p>
            <ul className="space-y-2 text-[--text-secondary] mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[--accent-blue] mt-1">•</span>
                <span><strong className="text-[--text-primary]">PCB Fabrication</strong> — ordered from our network of trusted fab houses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent-blue] mt-1">•</span>
                <span><strong className="text-[--text-primary]">Component Procurement</strong> — full BOM sourcing and management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent-blue] mt-1">•</span>
                <span><strong className="text-[--text-primary]">PCB Assembly</strong> — completed in-house at our Saint-Laurent facility</span>
              </li>
            </ul>
            <p className="font-mono text-sm text-[--accent-blue]">
              Best for: Companies that want to hand off the entire supply chain.
            </p>
          </TabsContent>

          <TabsContent value="assembly" className="rounded-2xl border border-[--border-color] bg-[--bg-elevated] p-8">
            <h3 className="font-display text-xl font-bold text-[--text-primary] mb-4">
              Assembly Only
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[--accent-blue] mb-3">You provide:</p>
                <ul className="space-y-2 text-[--text-secondary]">
                  <li className="flex items-start gap-2">
                    <span className="text-[--accent-blue] mt-1">•</span>
                    <span>Bare PCBs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[--accent-blue] mt-1">•</span>
                    <span>All components per BOM</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[--accent-blue] mb-3">We provide:</p>
                <ul className="space-y-2 text-[--text-secondary]">
                  <li className="flex items-start gap-2">
                    <span className="text-[--accent-blue] mt-1">•</span>
                    <span>Full in-house assembly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[--accent-blue] mt-1">•</span>
                    <span>Same quality standards as turnkey</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="font-mono text-sm text-[--accent-blue]">
              Best for: Companies with existing supplier relationships who just need reliable assembly.
            </p>
          </TabsContent>

          <TabsContent value="consignment" className="rounded-2xl border border-[--border-color] bg-[--bg-elevated] p-8">
            <h3 className="font-display text-xl font-bold text-[--text-primary] mb-4">
              Consignment / Partial Consignment
            </h3>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              Flexible hybrid model:
            </p>
            <ul className="space-y-2 text-[--text-secondary] mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[--accent-blue] mt-1">•</span>
                <span>You supply either PCBs, components, or select components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent-blue] mt-1">•</span>
                <span>RS sources the remainder and manages inventory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent-blue] mt-1">•</span>
                <span>We can stock your recurring components for ongoing programs</span>
              </li>
            </ul>
            <p className="font-mono text-sm text-[--accent-blue]">
              Best for: Long-running programs or companies managing multi-source procurement.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
