import { Hero } from '@/components/blocks/home/hero';
import { ValueProps } from '@/components/blocks/home/value-props';
import { ServicesPreview } from '@/components/blocks/home/services-preview';
import { CapabilitiesStats } from '@/components/blocks/home/capabilities-stats';
import { Customers } from '@/components/blocks/home/customers';
import { Memberships } from '@/components/blocks/home/memberships';
import { HomeCta } from '@/components/blocks/home/home-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <CapabilitiesStats />
      <Customers />
      <Memberships />
      <HomeCta />
    </>
  );
}
