import type { Metadata } from 'next';
import { ServicesHero } from '@/components/blocks/services/services-hero';
import { ServiceModels } from '@/components/blocks/services/service-models';
import { CapabilitiesDetail } from '@/components/blocks/services/capabilities-detail';
import { LeadTimes } from '@/components/blocks/services/lead-times';
import { Quality } from '@/components/blocks/services/quality';
import { ServicesCta } from '@/components/blocks/services/services-cta';

export const metadata: Metadata = {
  title: 'PCB Assembly Services | Turnkey, Assembly Only, Consignment | RS PCB Assembly',
  description:
    'Full turnkey PCB manufacturing, assembly only, and consignment services. SMT, THT, mixed assembly, cable harness. IPC Class 2 standard. Montreal, QC.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceModels />
      <CapabilitiesDetail />
      <LeadTimes />
      <Quality />
      <ServicesCta />
    </>
  );
}
