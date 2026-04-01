import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Upload,
  Cpu,
  Zap,
  Shield,
  Clock,
  Package,
  Microscope,
  ChevronRight,
  CheckCircle,
  Layers,
  CircuitBoard,
} from 'lucide-react'
import CountUp from '../components/CountUp'
import AnimatedBG from '../components/AnimatedBG'

const services = [
  {
    icon: Cpu,
    title: 'SMT Assembly',
    desc: 'High-precision surface mount technology with Panasonic CM602 and Fuji CP6 pick-and-place equipment. Components down to 0201.',
  },
  {
    icon: Package,
    title: 'Turnkey Manufacturing',
    desc: 'We source all components and bare PCBs, assemble, inspect, and ship. One PO, one vendor, zero hassle.',
  },
  {
    icon: Zap,
    title: 'Quick-Turn Prototypes',
    desc: 'Got a deadline? We offer expedited assembly for time-critical prototypes and pre-production runs.',
  },
  {
    icon: Microscope,
    title: 'Inspection & Testing',
    desc: 'Automated optical inspection (AOI), visual inspection, and first-article reports. Every board verified.',
  },
  {
    icon: CircuitBoard,
    title: 'Through-Hole Assembly',
    desc: 'Manual and selective wave soldering for connectors, transformers, and mixed-technology boards.',
  },
  {
    icon: Shield,
    title: 'PCB Procurement',
    desc: 'Bare PCB sourcing through our global fab network. Competitive pricing with fast turnaround.',
  },
]

const stats = [
  { end: 15, suffix: '+', label: 'Years Experience' },
  { end: 500, suffix: '+', label: 'Projects Delivered' },
  { end: 50, suffix: '+', label: 'Active Customers' },
  { end: 24, suffix: 'hr', label: 'Quote Turnaround' },
]

const industries = [
  'Rail & Transportation',
  'Aerospace & Defence',
  'Medical Devices',
  'Industrial Automation',
  'IoT & Connected Devices',
  'Quantum Computing',
  'Power Electronics',
  'Imaging & Cameras',
]

const whyUs = [
  { title: 'No Minimums', desc: 'From 1 board to 10,000+. We scale with your project.' },
  { title: 'Direct Communication', desc: 'Talk directly to the engineers building your boards.' },
  { title: 'Canadian Manufacturing', desc: 'Assembled in Montreal with North American quality standards.' },
  { title: 'Full Traceability', desc: 'Component-level tracking and documentation on every order.' },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-sierra-950 overflow-hidden">
        {/* Animated circuit background */}
        <AnimatedBG />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-pcb-600/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-pcb-600/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pcb-900/50 rounded-full border border-pcb-700/30 mb-6">
                <div className="w-2 h-2 bg-pcb-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-pcb-300">Since 2003 — Montreal, Canada</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] tracking-tight">
                PCB Fabrication,
                <br />
                Assembly &
                <br />
                <span className="text-pcb-400">Components</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                Upload your design files for a fast quote — and the fastest
                turnaround in Canada. From prototype to production, fully
                assembled boards in as fast as 5 days.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/quote" className="btn-primary text-sm px-7 py-3.5">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Files & Get Quote
                </Link>
                <Link to="/services" className="btn-outline text-sm px-7 py-3.5">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            {/* Right: Quick-action card */}
            <div className="hidden lg:block">
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-semibold text-lg mb-1">How It Works</h3>
                <p className="text-gray-500 text-sm mb-6">Three steps to finished boards.</p>
                <div className="space-y-5">
                  {[
                    { num: '1', title: 'Upload Your Files', sub: 'BOM, Gerbers, and assembly drawings.' },
                    { num: '2', title: 'Get Your Quote', sub: 'Detailed pricing at multiple quantity levels within 24 hours.' },
                    { num: '3', title: 'We Build & Ship', sub: 'Turnkey assembly, inspected and delivered to your door.' },
                  ].map((s) => (
                    <div key={s.num} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-pcb-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        {s.num}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{s.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/quote"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-pcb-600 text-white font-semibold rounded-lg hover:bg-pcb-500 transition-colors text-sm"
                >
                  Start Your Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-pcb-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="mt-0.5 text-xs text-pcb-200 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE TIERS — ProtoExpress style ===== */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Our Solutions</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">
              Choose Your Assembly Path
            </h2>
            <p className="mt-3 text-gray-500 text-base">
              Flexibility and transparency for every project, from quick prototypes to high-volume production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier 1: Prototype */}
            <div className="border-2 border-gray-100 rounded-2xl p-8 hover:border-pcb-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-pcb-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pcb-600 transition-colors">
                <Zap className="w-6 h-6 text-pcb-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-bold text-pcb-600 uppercase tracking-wider mb-1">Prototype</div>
              <h3 className="text-xl font-bold text-sierra-900 mb-2">Quick-Turn Assembly</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Fast-track your design validation. Small batches assembled in as fast as 5 business days.
              </p>
              <ul className="space-y-2 mb-6">
                {['1–50 boards', 'Expedited turnaround', 'BOM review & DFM feedback', 'First article inspection'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pcb-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/quote" className="text-sm font-semibold text-pcb-600 hover:text-pcb-500 inline-flex items-center gap-1 transition-colors">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tier 2: Turnkey (Featured) */}
            <div className="relative border-2 border-pcb-500 rounded-2xl p-8 shadow-xl shadow-pcb-500/10 group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-pcb-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div className="w-12 h-12 bg-pcb-600 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs font-bold text-pcb-600 uppercase tracking-wider mb-1">Turnkey</div>
              <h3 className="text-xl font-bold text-sierra-900 mb-2">Full-Service Assembly</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Send your files, we do the rest. Component sourcing, PCB fab, assembly, inspection, and shipping.
              </p>
              <ul className="space-y-2 mb-6">
                {['Any quantity', 'Component procurement', 'Bare PCB sourcing', 'AOI inspection', 'Full documentation'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pcb-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/quote" className="btn-primary text-sm w-full justify-center">
                Get Turnkey Quote <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Tier 3: Consignment */}
            <div className="border-2 border-gray-100 rounded-2xl p-8 hover:border-pcb-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-pcb-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pcb-600 transition-colors">
                <Layers className="w-6 h-6 text-pcb-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-bold text-pcb-600 uppercase tracking-wider mb-1">Consignment</div>
              <h3 className="text-xl font-bold text-sierra-900 mb-2">You Supply, We Build</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Already have your components? Ship them to us. You control sourcing, we provide precision assembly.
              </p>
              <ul className="space-y-2 mb-6">
                {['Kit audit against BOM', 'Lower per-board cost', 'Same quality process', 'Flexible scheduling'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pcb-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/quote" className="text-sm font-semibold text-pcb-600 hover:text-pcb-500 inline-flex items-center gap-1 transition-colors">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES GRID ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Capabilities</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">
              End-to-End Electronics Manufacturing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-pcb-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-pcb-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pcb-600 transition-colors">
                  <s.icon className="w-5 h-5 text-pcb-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-sierra-900 mb-1.5">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Why R.S. ELECTRONIQUE INC.</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">
                Your Dedicated EMS Partner
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Unlike large contract manufacturers where small runs get lost in the queue,
                RS gives every project the attention it deserves. Direct communication,
                fast turnaround, no red tape.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {whyUs.map((w) => (
                  <div key={w.title} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-pcb-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-pcb-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-sierra-900">{w.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-pcb-600 font-semibold text-sm hover:text-pcb-500 transition-colors">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="/new/circuit-board site.jpg" alt="RS PCB Assembly facility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding bg-sierra-950">
        <div className="container-width text-center">
          <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">Industries</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Trusted Across Sectors
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            From rail systems to quantum computing, our boards power critical applications.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm font-medium hover:border-pcb-500 hover:text-white transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-gradient-to-r from-pcb-700 to-pcb-800 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Next Build?
            </h2>
            <p className="mt-3 text-pcb-200 text-lg max-w-lg mx-auto">
              Upload your BOM and Gerber files. We'll have a detailed quote back to you within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pcb-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm">
                <Upload className="w-4 h-4" /> Upload Files & Quote
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}