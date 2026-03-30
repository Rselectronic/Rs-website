import type { Metadata } from 'next';
import { ContactHero } from '@/components/blocks/contact/contact-hero';
import { ContactForm } from '@/components/blocks/contact/contact-form';
import { ContactDetails } from '@/components/blocks/contact/contact-details';

export const metadata: Metadata = {
  title: 'Request a Quote | RS PCB Assembly — Montreal',
  description:
    'Contact RS PCB Assembly for a same-day PCB assembly quote. Located in Saint-Laurent, Montreal. Call +1 (438) 833-8477 or email sales@rspcbassembly.com.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
    </>
  );
}
