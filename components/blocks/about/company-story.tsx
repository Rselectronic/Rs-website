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
  {
    label: 'Industries',
    value: 'Aerospace · Industrial · Communications · Consumer',
  },
];

export function CompanyStory() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Story text */}
          <div className="lg:col-span-3 space-y-6 text-[--text-secondary] leading-relaxed">
            <p>
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl border border-[--border-color] bg-[--bg-surface] p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-blue] mb-6">
              AT A GLANCE
            </p>
            <div className="space-y-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs text-[--text-secondary]">
                    {spec.label}
                  </span>
                  <span className="font-mono text-sm text-[--text-primary]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
