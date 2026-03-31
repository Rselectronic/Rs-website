'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/lib/i18n';

export function ServiceModels() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#2563EB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB]">
            {t('services.models.label')}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-12">
          {t('services.models.title1')} <span className="italic font-normal">{t('services.models.title2')}</span>
        </h2>

        <Tabs defaultValue="turnkey" className="w-full flex-col">
          <TabsList className="w-full flex flex-col sm:flex-row bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-1.5 mb-10 h-auto gap-1 sm:gap-0">
            {['turnkey', 'assembly', 'consignment'].map((val) => (
              <TabsTrigger
                key={val}
                value={val}
                className="flex-1 font-mono text-xs uppercase tracking-wide py-3.5 rounded-xl text-[#64748B] transition-all duration-200 data-[state=active]:bg-[#2563EB] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/20 hover:text-[#0F172A] whitespace-nowrap"
              >
                {val === 'turnkey' ? t('services.models.tab.turnkey') : val === 'assembly' ? t('services.models.tab.assembly') : t('services.models.tab.consignment')}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="turnkey" className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{t('services.models.turnkey.title')}</h3>
            <p className="text-[#64748B] leading-relaxed mb-6">{t('services.models.turnkey.intro')}</p>
            <ul className="space-y-3 text-[#64748B] mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span><strong className="text-[#0F172A]">{t('services.models.turnkey.fab')}</strong> {t('services.models.turnkey.fab.desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span><strong className="text-[#0F172A]">{t('services.models.turnkey.procurement')}</strong> {t('services.models.turnkey.procurement.desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                <span><strong className="text-[#0F172A]">{t('services.models.turnkey.assembly')}</strong> {t('services.models.turnkey.assembly.desc')}</span>
              </li>
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest text-[#2563EB]">{t('services.models.turnkey.bestFor')}</p>
          </TabsContent>

          <TabsContent value="assembly" className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-6">{t('services.models.assembly.title')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] mb-4 pb-2 border-b border-[#2563EB]/30 inline-block">{t('services.models.assembly.youProvide')}</p>
                <ul className="space-y-3 text-[#64748B]">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.assembly.youProvide.pcbs')}</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.assembly.youProvide.components')}</span></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] mb-4 pb-2 border-b border-[#2563EB]/30 inline-block">{t('services.models.assembly.weProvide')}</p>
                <ul className="space-y-3 text-[#64748B]">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.assembly.weProvide.assembly')}</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.assembly.weProvide.quality')}</span></li>
                </ul>
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#2563EB]">{t('services.models.assembly.bestFor')}</p>
          </TabsContent>

          <TabsContent value="consignment" className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{t('services.models.consignment.title')}</h3>
            <p className="text-[#64748B] leading-relaxed mb-6">{t('services.models.consignment.intro')}</p>
            <ul className="space-y-3 text-[#64748B] mb-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.consignment.item1')}</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.consignment.item2')}</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" /><span>{t('services.models.consignment.item3')}</span></li>
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest text-[#2563EB]">{t('services.models.consignment.bestFor')}</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
