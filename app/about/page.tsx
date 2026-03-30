import type { Metadata } from 'next';
import { AboutHero } from '@/components/blocks/about/about-hero';
import { CompanyStory } from '@/components/blocks/about/company-story';
import { MissionVisionValues } from '@/components/blocks/about/mission-vision-values';
import { TeamIndustries } from '@/components/blocks/about/team-industries';
import { AboutCta } from '@/components/blocks/about/about-cta';

export const metadata: Metadata = {
  title: 'About Us | RS PCB Assembly — Montreal PCB Manufacturer',
  description:
    '35+ years of PCB assembly experience. R. S. Électronique Inc. has served Montreal\'s manufacturing community since 2003 with quality, integrity, and consistency.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVisionValues />
      <TeamIndustries />
      <AboutCta />
    </>
  );
}
