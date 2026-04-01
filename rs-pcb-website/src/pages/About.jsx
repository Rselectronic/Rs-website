import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Users,
  Target,
  Award,
  MapPin,
  Cpu,
  CheckCircle,
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Every solder joint, every component placement, every inspection — we hold ourselves to the highest standard because your product depends on it.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We don\'t just assemble boards. We work with you through BOM review, DFM feedback, and production planning to make sure your project succeeds.',
  },
  {
    icon: Award,
    title: 'Reliability',
    desc: 'On-time delivery isn\'t a goal — it\'s a commitment. Our customers count on us for production schedules, and we deliver.',
  },
]

const milestones = [
  { year: '2003', text: 'R. S. Electonique Inc., formerly known as R.S Electronics began serving the region of Montreal, Quebec as an Electronic Manufacturing Service (EMS) company' },
  { year: 'Growth', text: 'Expanded SMT capabilities with Panasonic CM602 and Fuji CP6 pick-and-place lines.' },
  { year: 'Diversification', text: 'Grew customer base across rail, aerospace, medical, quantum computing, and defence sectors.' },
  { year: 'Today', text: 'Serving 50+ active customers with turnkey PCB assembly, investing in AI-driven automation and capacity expansion.' },
]

const teamHighlights = [
  'Direct access to the people building your boards',
  'No ticket systems, no 48-hour response windows',
  'BOM review and DFM feedback on every project',
  'Bilingual service — English and French',
  'Component sourcing expertise across 12+ suppliers',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">About Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Built on Precision,
              <br />
              <span className="text-pcb-400">Driven by Partnership</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              R.S. Electronique Inc. is a Montreal-based contract electronics
              manufacturer specializing in surface-mount PCB assembly — from
              first prototypes to full production runs.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Our Story</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">
                Where Quality Meets Agility
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  R.S. ELECTRONIQUE INC. was founded with a simple idea: small and medium electronics
                  companies deserve the same manufacturing quality as the big players — without
                  the big-player minimums, lead times, or bureaucracy.
                </p>
                <p>
                  Based in Saint-Laurent, Montreal, we operate a full SMT assembly line with
                  Panasonic and Fuji pick-and-place machines, reflow ovens, and automated optical
                  inspection. Our turnkey model means we handle everything — from sourcing your
                  components to shipping your finished boards.
                </p>
                <p>
                  What makes us different is how we work with customers. You get direct access
                  to the people building your boards. When you email or call, you get answers fast.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-sierra-900 mb-3 uppercase tracking-wider">What You Get Working With Us</h4>
                <ul className="space-y-2.5">
                  {teamHighlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pcb-500 flex-shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-lg font-semibold text-sierra-900 mb-8">Our Journey</h3>
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-pcb-500 rounded-full mt-1.5" />
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                    </div>
                    <div className="pb-2">
                      <div className="text-sm font-bold text-pcb-600">{m.year}</div>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Our Values</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">What Guides Our Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-pcb-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-pcb-50 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-pcb-600" />
                </div>
                <h3 className="text-lg font-semibold text-sierra-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="bg-sierra-950 rounded-2xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-pcb-400" />
                  <span className="text-pcb-400 font-semibold text-sm uppercase tracking-wider">Our Location</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Montreal, Quebec</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our facility in Saint-Laurent is centrally located in Montreal's
                  industrial hub. Customers across Quebec and Canada can ship to us
                  or pick up directly from our shop floor.
                </p>
                <div className="mt-6 text-gray-300 text-sm">
                  <p className="font-medium text-white">5580 Vanden Abeele</p>
                  <p>Saint-Laurent, QC H4S 1P9, Canada</p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border border-white/5">
                <iframe
                  src="https://maps.google.com/maps?q=R.S%20Electronics%205580%20Rue%20Vanden%20Abeele%2C%20Saint-Laurent%2C%20QC%20H4S%201R9%2C%20Canada&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RS ELECTRONIQUE INC."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sierra-900">Let's Build Something Together</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-md mx-auto">
            Whether it's your first prototype or your hundredth production run, we're ready.
          </p>
          <Link to="/quote" className="btn-primary text-sm px-8 py-3.5 mt-8 inline-flex">
            Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
