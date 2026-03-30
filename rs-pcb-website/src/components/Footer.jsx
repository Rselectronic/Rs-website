import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sierra-950 text-gray-400">
      {/* CTA strip */}
      <div className="bg-pcb-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold">Ready to start your next PCB project?</p>
            <p className="text-pcb-200 text-sm">Upload your files and get a quote within 24 hours.</p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-pcb-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm shadow-md"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={`${import.meta.env.BASE_URL}RS Logo.png`} alt="RS Electronique" className="h-9 w-auto brightness-0 invert" />
              <span className="text-lg font-bold text-white tracking-tight">R.S. ELECTRONIQUE INC.</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Contract electronics manufacturing and SMT PCB assembly in Montreal, Canada. Prototypes to production.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-gray-600">
              <span>Member of AQT</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span>Member of SMTA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Articles', path: '/Articles' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact', path: '/contact' },
                { name: 'Request a Quote', path: '/quote' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-500 hover:text-pcb-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>SMT Assembly</li>
              <li>Through-Hole Assembly</li>
              <li>Turnkey Manufacturing</li>
              <li>Prototype Assembly</li>
              <li>PCB Procurement</li>
              <li>Quality Inspection (AOI)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pcb-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-500">
                  5580 Vanden Abeele<br />Saint-Laurent, QC H4S 1P9<br />Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pcb-500 flex-shrink-0" />
                <a href="tel:+14388338477" className="text-sm text-gray-500 hover:text-white transition-colors">
                  +1 (438) 833-8477
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pcb-500 flex-shrink-0" />
                <a href="mailto:apatel@rspcbassembly.com" className="text-sm text-gray-500 hover:text-white transition-colors">
                  apatel@rspcbassembly.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-sierra-800 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} R.S. Electronique Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}