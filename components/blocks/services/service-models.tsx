'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ServiceModels() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            Service Models
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-12">
          How would you like to <span className="italic font-normal">work with us?</span>
        </h2>

        <Tabs defaultValue="turnkey" className="w-full">
          <TabsList className="w-full flex bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-1.5 mb-10 h-auto">
            {['turnkey', 'assembly', 'consignment'].map((val) => (
              <TabsTrigger
                key={val}
                value={val}
                className="flex-1 font-mono text-xs uppercase tracking-widest py-3.5 rounded-xl text-[#64748B] transition-all duration-200 data-[state=active]:bg-[#2563EB] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/20 hover:text-[#0F172A]"
              >
                {val === 'turnkey' ? 'Turnkey' : val === 'assembly' ? 'Assembly Only' : 'Consignment'}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="turnkey" className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Turnkey PCB Manufacturing</h3>
            <p className="text-[#64748B] leading-relaxed mb-6">We manage the entire process:</p>
            <ul className="space-y-3 text-[#64748B] mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span><strong className="text-[#0F172A]">PCB Fabrication</strong> — ordered from our network of trusted fab houses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span><strong className="text-[#0F172A]">Component Procurement</strong> — full BOM sourcing and management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span><strong className="text-[#0F172A]">PCB Assembly</strong> — completed in-house at our Saint-Laurent facility</span>
              </li>
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest text-[#2563EB]">Best for: Companies that want to hand off the entire supply chain.</p>
          </TabsContent>

          <TabsContent value="assembly" className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-6">Assembly Only</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] mb-4 pb-2 border-b border-[#2563EB]/30 inline-block">You provide</p>
                <ul className="space-y-3 text-[#64748B]">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>Bare PCBs</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>All components per BOM</span></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] mb-4 pb-2 border-b border-[#2563EB]/30 inline-block">We provide</p>
                <ul className="space-y-3 text-[#64748B]">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>Full in-house assembly</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>Same quality standards as turnkey</span></li>
                </ul>
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#2563EB]">Best for: Companies with existing supplier relationships who just need reliable assembly.</p>
          </TabsContent>

          <TabsContent value="consignment" className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">Consignment / Partial Consignment</h3>
            <p className="text-[#64748B] leading-relaxed mb-6">Flexible hybrid model:</p>
            <ul className="space-y-3 text-[#64748B] mb-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>You supply either PCBs, components, or select components</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>RS sources the remainder and manages inventory</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>We can stock your recurring components for ongoing programs</span></li>
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest text-[#2563EB]">Best for: Long-running programs or companies managing multi-source procurement.</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
