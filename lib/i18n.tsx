'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Locale = 'en' | 'fr';

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Quote in 24-Hours Now!',
    'nav.cta.short': 'Get a Quote',

    // Home Hero
    'hero.tagline': 'Montreal \u00b7 Since 2003 \u00b7 IPC Certified',
    'hero.description': 'From prototypes to mid-volume production — we handle fabrication, procurement, and assembly under one roof.',
    'hero.headline1': 'Trusted Partner in',
    'hero.headline2': 'Exceptional',
    'hero.headline3': 'PCB Assembly',
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'View Our Services',

    // Stats
    'stats.experience': 'Years Experience',
    'stats.products': 'Products / Year',
    'stats.standard': 'Build Standard',
    'stats.turn': 'Fastest Turn',

    // Value Props
    'value.label': 'Why RS',
    'value.title1': 'Why manufacturers trust',
    'value.title2': 'RS PCB Assembly',

    // Home CTA
    'cta.title1': 'Ready to get',
    'cta.title2': 'started?',
    'cta.description': "Send us your Gerber files and BOM. We'll have a quote back to you the same day.",
    'cta.button': 'Request a Quote',
    'cta.address': '5580 Rue Vanden Abeele, Saint-Laurent, QC',

    // Footer
    'footer.tagline': "Montreal's trusted PCB assembly partner since 2003.",
    'footer.navigate': 'Navigate',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': '\u00a9 2026 R. S. \u00c9lectronique Inc. All rights reserved.',
    'footer.turnkey': 'Turnkey PCB Manufacturing',
    'footer.assembly': 'Assembly Only',
    'footer.consignment': 'Consignment / Partial Consignment',

    // Contact Hero
    'contact.label': 'Contact',
    'contact.title1': 'Request a quote',
    'contact.title2': 'or get in touch',
    'contact.description': 'Located in Saint-Laurent, Montreal. Send your Gerber files and BOM for a same-day quote.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.visit': 'Visit',
    'contact.phone.desc': 'Mon\u2013Fri, 8am\u20135pm EST',
    'contact.email.desc': 'Same-day quote turnaround',

    // Contact Form
    'form.title': 'Send Us a Message',
    'form.subtitle': 'Complete RFQs receive a same-day quote turnaround.',
    'form.name': 'Name',
    'form.company': 'Company',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message / Project Description',
    'form.message.placeholder': 'Describe your project — board count, volume, assembly type (turnkey / assembly only / consignment), target lead time, and any special requirements.',
    'form.submit': 'Send Message',
    'form.response': 'We typically respond within 2\u20134 business hours (Mon\u2013Fri, 8am\u20135pm EST).',
    'form.details': 'Contact Details',
    'form.address': 'Address',
    'form.sales': 'Sales',
    'form.general': 'General',
    'form.hours': 'Business Hours',
    'form.weekdays': 'Monday \u2013 Friday',
    'form.weekdays.time': '8:00 AM \u2013 5:00 PM',
    'form.weekend': 'Saturday \u2013 Sunday',
    'form.weekend.time': 'Closed',
    'form.urgent': 'For urgent orders, call us directly.',
    'form.memberships': 'Memberships',

    // Contact Details
    'location.label': 'Our Location',
    'location.title1': 'Conveniently located in',
    'location.title2': 'Saint-Laurent',
    'location.description': 'Our facility at 5580 Rue Vanden Abeele is close to the Trans-Canada Highway and accessible from across the Montreal region. Serving Quebec and North America since 2003. Schedule a visit by emailing',

    // About Hero
    'about.label': 'About Us',
    'about.title1': '35 years of experience.',
    'about.title2': 'One standard: excellence.',
    'about.description': 'R. S. \u00c9lectronique Inc. has been serving the Montreal manufacturing community since 2003 \u2014 building a reputation on high quality, unwavering integrity, and consistent on-time delivery.',

    // Services Hero
    'services.label': 'Services',
    'services.title1': 'Full turnkey PCB',
    'services.title2': 'manufacturing',
    'services.title3': ' \u2014 or just',
    'services.title4': 'the parts you need',
    'services.description': 'R. S. \u00c9lectronique Inc. has been providing PCB assembly services for over 20 years with 35+ years of field experience. Three service models. One standard of quality.',

    // FAQ Hero
    'faq.label': 'FAQ',
    'faq.title1': 'Answers to',
    'faq.title2': 'common questions',
    'faq.description': 'Everything you need to know about working with RS PCB Assembly \u2014 lead times, quality standards, service models, and more.',

    // Blog Hero
    'blog.label': 'Blog',
    'blog.title1': 'Industry Insights',
    'blog.title2': '& Updates',
    'blog.description': 'Expert perspectives on PCB assembly, manufacturing standards, and electronics industry trends from the RS PCB Assembly team in Montreal.',
    'blog.readMore': 'Read more',
    'blog.backToBlog': 'Back to Blog',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': '\u00c0 propos',
    'nav.services': 'Services',
    'nav.blog': 'Blogue',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Soumission en 24 heures!',
    'nav.cta.short': 'Soumission',

    // Home Hero
    'hero.tagline': 'Montr\u00e9al \u00b7 Depuis 2003 \u00b7 Certifi\u00e9 IPC',
    'hero.description': 'Du prototype \u00e0 la production en moyennes s\u00e9ries \u2014 nous g\u00e9rons la fabrication, l\u2019approvisionnement et l\u2019assemblage sous un m\u00eame toit.',
    'hero.headline1': 'Votre partenaire de confiance en',
    'hero.headline2': 'assemblage',
    'hero.headline3': 'de circuits imprim\u00e9s',
    'hero.cta1': 'Demander une soumission',
    'hero.cta2': 'Voir nos services',

    // Stats
    'stats.experience': 'Ans d\u2019exp\u00e9rience',
    'stats.products': 'Produits / an',
    'stats.standard': 'Standard IPC',
    'stats.turn': 'D\u00e9lai le plus court',

    // Value Props
    'value.label': 'Pourquoi RS',
    'value.title1': 'Pourquoi les fabricants font confiance \u00e0',
    'value.title2': 'RS PCB Assembly',

    // Home CTA
    'cta.title1': 'Pr\u00eat \u00e0',
    'cta.title2': 'commencer?',
    'cta.description': 'Envoyez-nous vos fichiers Gerber et votre nomenclature (BOM). Nous vous retournerons une soumission le jour m\u00eame.',
    'cta.button': 'Demander une soumission',
    'cta.address': '5580 Rue Vanden Abeele, Saint-Laurent, QC',

    // Footer
    'footer.tagline': 'Partenaire de confiance en assemblage de circuits imprim\u00e9s \u00e0 Montr\u00e9al depuis 2003.',
    'footer.navigate': 'Navigation',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': '\u00a9 2026 R. S. \u00c9lectronique Inc. Tous droits r\u00e9serv\u00e9s.',
    'footer.turnkey': 'Fabrication cl\u00e9 en main',
    'footer.assembly': 'Assemblage seulement',
    'footer.consignment': 'Consignation / Consignation partielle',

    // Contact Hero
    'contact.label': 'Contact',
    'contact.title1': 'Demandez une soumission',
    'contact.title2': 'ou contactez-nous',
    'contact.description': 'Situ\u00e9s \u00e0 Saint-Laurent, Montr\u00e9al. Envoyez vos fichiers Gerber et BOM pour une soumission le jour m\u00eame.',
    'contact.phone': 'T\u00e9l\u00e9phone',
    'contact.email': 'Courriel',
    'contact.visit': 'Visite',
    'contact.phone.desc': 'Lun\u2013ven, 8h\u201317h HNE',
    'contact.email.desc': 'Soumission le jour m\u00eame',

    // Contact Form
    'form.title': 'Envoyez-nous un message',
    'form.subtitle': 'Les demandes compl\u00e8tes re\u00e7oivent une soumission le jour m\u00eame.',
    'form.name': 'Nom',
    'form.company': 'Entreprise',
    'form.email': 'Courriel',
    'form.phone': 'T\u00e9l\u00e9phone',
    'form.message': 'Message / Description du projet',
    'form.message.placeholder': 'D\u00e9crivez votre projet \u2014 nombre de cartes, volume, type d\u2019assemblage (cl\u00e9 en main / assemblage seulement / consignation), d\u00e9lai souhait\u00e9 et exigences particuli\u00e8res.',
    'form.submit': 'Envoyer le message',
    'form.response': 'Nous r\u00e9pondons g\u00e9n\u00e9ralement dans un d\u00e9lai de 2 \u00e0 4 heures ouvrables (lun\u2013ven, 8h\u201317h HNE).',
    'form.details': 'Coordonn\u00e9es',
    'form.address': 'Adresse',
    'form.sales': 'Ventes',
    'form.general': 'G\u00e9n\u00e9ral',
    'form.hours': 'Heures d\u2019ouverture',
    'form.weekdays': 'Lundi \u2013 vendredi',
    'form.weekdays.time': '8h00 \u2013 17h00',
    'form.weekend': 'Samedi \u2013 dimanche',
    'form.weekend.time': 'Ferm\u00e9',
    'form.urgent': 'Pour les commandes urgentes, appelez-nous directement.',
    'form.memberships': 'Affiliations',

    // Contact Details
    'location.label': 'Notre emplacement',
    'location.title1': 'Situ\u00e9s avantageusement \u00e0',
    'location.title2': 'Saint-Laurent',
    'location.description': 'Notre installation au 5580 Rue Vanden Abeele est proche de l\u2019autoroute Transcanadienne et accessible de partout dans la r\u00e9gion de Montr\u00e9al. Au service du Qu\u00e9bec et de l\u2019Am\u00e9rique du Nord depuis 2003. Planifiez une visite en \u00e9crivant \u00e0',

    // About Hero
    'about.label': '\u00c0 propos',
    'about.title1': '35 ans d\u2019exp\u00e9rience.',
    'about.title2': 'Un seul standard\u00a0: l\u2019excellence.',
    'about.description': 'R. S. \u00c9lectronique Inc. est au service de la communaut\u00e9 manufacturi\u00e8re montr\u00e9alaise depuis 2003 \u2014 b\u00e2tissant une r\u00e9putation fond\u00e9e sur la qualit\u00e9, l\u2019int\u00e9grit\u00e9 et la livraison dans les d\u00e9lais.',

    // Services Hero
    'services.label': 'Services',
    'services.title1': 'Fabrication cl\u00e9 en main',
    'services.title2': 'de circuits imprim\u00e9s',
    'services.title3': ' \u2014 ou seulement',
    'services.title4': 'ce dont vous avez besoin',
    'services.description': 'R. S. \u00c9lectronique Inc. offre des services d\u2019assemblage de circuits imprim\u00e9s depuis plus de 20 ans avec 35+ ans d\u2019exp\u00e9rience. Trois mod\u00e8les de service. Un seul standard de qualit\u00e9.',

    // FAQ Hero
    'faq.label': 'FAQ',
    'faq.title1': 'R\u00e9ponses aux',
    'faq.title2': 'questions fr\u00e9quentes',
    'faq.description': 'Tout ce que vous devez savoir pour travailler avec RS PCB Assembly \u2014 d\u00e9lais, standards de qualit\u00e9, mod\u00e8les de service et plus encore.',

    // Blog Hero
    'blog.label': 'Blogue',
    'blog.title1': 'Perspectives',
    'blog.title2': '& actualit\u00e9s',
    'blog.description': 'Points de vue d\u2019experts sur l\u2019assemblage de circuits imprim\u00e9s, les normes de fabrication et les tendances de l\u2019industrie \u00e9lectronique par l\u2019\u00e9quipe de RS PCB Assembly \u00e0 Montr\u00e9al.',
    'blog.readMore': 'Lire la suite',
    'blog.backToBlog': 'Retour au blogue',
  },
} as const;

type TranslationKey = keyof typeof translations.en;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
