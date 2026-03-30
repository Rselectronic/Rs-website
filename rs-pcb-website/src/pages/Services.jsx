import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  CircuitBoard,
  Layers,
  Package,
  Search,
  Truck,
  Wrench,
  FileCheck,
  CheckCircle,
  Upload,
} from 'lucide-react'

const coreServices = [
  {
    icon: Cpu,
    title: 'SMT Assembly',
    desc: 'Surface mount technology assembly using our Panasonic CM602 and Fuji CP6 pick-and-place machines. Fine-pitch components, BGAs, QFPs, and passives down to 0201.',
    details: ['Lead-free and leaded soldering', 'Reflow profiling per board', 'Solder paste inspection', 'Automated stencil printing'],
  },
  {
    icon: CircuitBoard,
    title: 'Through-Hole Assembly',
    desc: 'Manual and selective through-hole component insertion for connectors, transformers, relays, and PTH components that complement your SMT assembly.',
    details: ['Skilled hand soldering', 'Mixed-technology boards', 'Connector & header installation', 'Wave soldering for high-volume THT'],
  },
  {
    icon: Package,
    title: 'Turnkey Manufacturing',
    desc: 'Send us your BOM and Gerbers — we handle everything. Component procurement, bare PCB sourcing, assembly, inspection, and delivery.',
    details: ['Sourcing via DigiKey, Mouser, 10+ suppliers', 'Global bare PCB fab partners', 'Full BOM review & DFM feedback', 'Single point of contact'],
  },
  {
    icon: Layers,
    title: 'Consignment Assembly',
    desc: 'Already have your components? Ship them to us. You control sourcing, we provide precision assembly and quality inspection.',
    details: ['Incoming component verification', 'Kit audit against BOM', 'Assembly and inspection', 'Reduced per-board cost'],
  },
  {
    icon: Search,
    title: 'Quality & Inspection',
    desc: 'Every board passes through our quality inspection process. We catch defects before they reach your customers.',
    details: ['Automated Optical Inspection (AOI)', 'Visual inspection under magnification', 'First article inspection reports', 'IPC-A-610 workmanship standards'],
  },
  {
    icon: Wrench,
    title: 'Rework & Repair',
    desc: 'Component-level rework, BGA reballing, and board repair services for existing assemblies that need fixing.',
    details: ['Component replacement (BGA, QFP)', 'Solder bridge and defect rework', 'Board modification & wire adds', 'Failure analysis support'],
  },
]

const processSteps = [
  { step: '01', title: 'Submit Your RFQ', desc: 'Upload your BOM, Gerbers, and assembly drawings. We review everything within hours.' },
  { step: '02', title: 'Quote & Review', desc: 'Detailed pricing at multiple quantity levels, lead time, and DFM recommendations.' },
  { step: '03', title: 'Procurement', desc: 'We source all components and bare PCBs, keeping you updated on lead times.' },
  { step: '04', title: 'Assembly', desc: 'Stencil printing, pick-and-place, reflow, through-hole insertion, and soldering.' },
  { step: '05', title: 'Inspection', desc: 'AOI and visual inspection. First articles get extra scrutiny and a detailed report.' },
  { step: '06', title: 'Ship', desc: 'Packed securely and shipped via UPS/FedEx, or available for local pickup in Montreal.' },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">Services & Capabilities</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Full-Service
              <br />
              <span className="text-pcb-400">PCB Assembly</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              Everything you need to go from design files to finished boards, under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-6">
            {coreServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 p-8 hover:border-pcb-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-pcb-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pcb-600 transition-colors">
                    <s.icon className="w-6 h-6 text-pcb-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-sierra-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-pcb-500 flex-shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Our Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">From Files to Finished Boards</h2>
            <p className="mt-3 text-gray-500">A streamlined workflow designed for speed and transparency.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-7 border border-gray-100">
                <div className="text-3xl font-bold text-pcb-500/20 mb-3">{s.step}</div>
                <h3 className="text-base font-semibold text-sierra-900 mb-1.5">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-pcb-600 uppercase tracking-wider">Equipment</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-sierra-900">Industry-Grade Machinery</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Panasonic CM602', type: 'Pick & Place', desc: 'High-speed multi-head placement for fine-pitch SMT components.' },
              { name: 'Fuji CP6', type: 'Pick & Place', desc: 'Flexible chip placer for high-mix production runs.' },
              { name: 'Reflow Oven', type: 'Soldering', desc: 'Ramp-soak-spike profiling for lead-free and leaded assemblies.' },
              { name: 'AOI System', type: 'Inspection', desc: 'Automated optical inspection for placement and solder quality.' },
            ].map((eq) => (
              <div key={eq.name} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <div className="w-12 h-12 bg-sierra-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-pcb-400" />
                </div>
                <div className="text-xs font-bold text-pcb-600 uppercase tracking-wider mb-1">{eq.type}</div>
                <h4 className="text-sm font-semibold text-sierra-900 mb-1.5">{eq.name}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-pcb-700">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
          <p className="mt-3 text-pcb-200 text-lg max-w-lg mx-auto">
            Upload your BOM and Gerber files and get a detailed quote within 24 hours.
          </p>
          <Link to="/quote" className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 bg-white text-pcb-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm">
            <Upload className="w-4 h-4" /> Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
