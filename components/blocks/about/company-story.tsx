'use client';

import { motion } from 'framer-motion';

const specs = [
  { label: 'Founded', value: '2003' },
  { label: 'Location', value: 'Saint-Laurent, Montreal' },
  { label: 'Build standard', value: 'IPC Class 2 (Class 3 on request)' },
  { label: 'Capacity', value: '180 feeder slots' },
  { label: 'Lead time (min)', value: '24–48 hours' },
  { label: 'Turnkey speed', value: '3–5 business days' },
  { label: 'Products/year', value: '200–400 distinct' },
  { label: 'Industries', value: 'Aerospace · Industrial · Communications · Consumer' },
];

export function CompanyStory() {
  return (
    <section className="border-y-4 border-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Story */}
          <div className="lg:col-span-3 space-y-6 text-[var(--muted-foreground)] leading-relaxed">
            <p className="text-lg text-[var(--foreground)] first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              R. S. Électronique Inc., formerly known as R.S Electronics, began
              serving Montreal, Quebec in 2003. Since then it has fulfilled the
              assembly needs of manufacturers, entrepreneurs, and researchers
              across Canada and internationally. Its reputation has been built on
              high quality, unwavering integrity, and consistent reliability.
            </p>
            <p>
              The team is comprised of individuals with more than 35 years of
              experience in the field. Rarely does a situation arise for which a
              solution cannot be found. New challenges are tackled by driven
              members always striving for the highest level of customer
              satisfaction — two strengths that give RS its distinctive reputation
              in Montreal&apos;s manufacturing community.
            </p>
            <p>
              RS&apos;s clientele spans a wide range of sectors: aerospace, industrial
              electronics, communications, and consumer electronics. That diversity
              has allowed the company to facilitate new orders efficiently and
              avoid the errors that come with inexperience. With an average of
              200–400 distinct products built each year, RS has deep expertise in
              component databases, production scheduling, and pricing accuracy.
            </p>
          </div>

          {/* Spec panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-2 border-[var(--foreground)] p-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mb-8 pb-2 border-b-2 border-[var(--foreground)] inline-block">
              At a Glance
            </p>
            <div className="space-y-5">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] block">
                    {spec.label}
                  </span>
                  <span className="font-mono text-sm text-[var(--foreground)]">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
