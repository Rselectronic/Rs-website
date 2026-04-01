import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'What types of orders does R.S. Electronique Inc. usually build?',
    a: 'Our core service is managing clients that have many PCBAs with low to mid volumes. With an average of 200 to 400 different products built each year, R.S. has vast experience in keeping track of component databases, production schedules, and pricing. Our in-house team procures all the components on the BOM, orders the PCBs from several fab houses, and completes the assembly in house.',
  },
  {
    q: 'What quality standard does R.S. Electronique Inc. provide?',
    a: 'Our quality of work has been accepted by many industry-leading companies. We boast our assemblies being sold directly or indirectly to internationally renowned companies. Our standard build is IPC Class 2 for all assemblies, but IPC Class 3 can be met upon customer request. Strict measures have been put in place including IPC training, strict quality controls, and continuous process improvement programs. R.S. Electronique Inc. is currently working on acquiring ISO certification.',
  },
  {
    q: 'What is the fastest lead time you can provide?',
    a: 'The fastest lead time we can provide is a full turnkey board assembled in 3–5 business days. This includes component procurement, PCB fabrication, and PCB assembly. For urgent inquiries please contact sales@rspcbassembly.com or call 438-833-8477.',
  },
  {
    q: 'What industries do you have experience with?',
    a: 'R.S. Electronique Inc. has experience across all major manufacturing fields thanks to the diverse manufacturing hub of Montreal. We have direct experience in aerospace, industrial electronics, communications, consumer electronics, rail & transportation, medical devices, quantum computing, and power electronics. With 15+ years of experience — if it has a PCB, we\'ve built it.',
  },
  {
    q: 'Do you offer both turnkey and consignment assembly?',
    a: 'Yes, we offer three flexible service models. Turnkey — we handle everything from start to finish: component sourcing through DigiKey, Mouser, and 10+ authorized suppliers, bare PCB fabrication via our global fab partners, full assembly, inspection, and shipping. Consignment — you supply part of the kit and we take care of the rest. You can provide the components while we procure the PCBs and complete assembly, or provide the PCBs while we source the components and assembley. Assembly Only — you supply both the components and the bare PCBs, and we handle the assembly. All three options include our full quality inspection process.',
  },
  {
    q: 'Is customer satisfaction guaranteed?',
    a: 'R.S. Electronique Inc. will always make sure its customers are satisfied. If the contrary ever occurs, we will contact our client and do whatever we can to ensure satisfaction. Upholding customer relationships is a core part of our business and how we\'ve grown throughout the years.',
  },
  {
    q: 'What are your technology capabilities?',
    a: 'We have been working daily on improving our internal software and are working towards a fully automated system. We have APIs connected with suppliers such as DigiKey, Mouser, Arrow, Avnet, Future, TTI and e-Sonic with plans to add all major distributors and manufacturers. This provides real-time visibility in terms of pricing and stock availability for faster and more accurate quoting.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Simply upload your BOM (Bill of Materials) and Gerber files through our Request a Quote page. We review your project and send a detailed quote with pricing at multiple quantity levels within 24 hours. You can also email us directly at apatel@rspcbassembly.com.',
  },
]

function AccordionItem({ faq, isOpen, toggle }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-pcb-200">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50/50 transition-colors"
      >
        <span className={`text-[15px] font-semibold ${isOpen ? 'text-pcb-600' : 'text-sierra-900'} transition-colors`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
          isOpen ? 'bg-pcb-600 text-white' : 'bg-gray-100 text-gray-500'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
          <p className="pt-4">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(2) // "fastest lead time" open by default

  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">FAQ</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Frequently Asked
              <br />
              <span className="text-pcb-400">Questions</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              Everything you need to know about working with R.S. Electronique Inc.
              Can't find what you're looking for? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sierra-900">Still Have Questions?</h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Our team is happy to help. Send us a message or request a quote — we respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary text-sm px-7 py-3.5">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/quote" className="btn-outline text-sm px-7 py-3.5">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
