import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Articles', path: '/Articles' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-sierra-950 text-gray-400 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a href="tel:+14388338477" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              +1 (438) 833-8477
            </a>
            <a href="mailto:apatel@rspcbassembly.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              apatel@rspcbassembly.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Montreal, QC, Canada</span>
            <span className="text-gray-600">|</span>
            <span>Mon – Fri: 8 AM – 5 PM EST</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img src={`${import.meta.env.BASE_URL}RS Logo.png`} alt="RS Electronique" className="h-9 w-auto" />
              <span className="text-lg font-bold text-sierra-900 tracking-tight">R.S. ELECTRONIQUE INC.</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-pcb-700 bg-pcb-50'
                      : 'text-sierra-600 hover:text-sierra-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="ml-4 px-5 py-2.5 bg-pcb-600 text-white text-sm font-semibold rounded-lg hover:bg-pcb-500 transition-all duration-200 btn-pulse-glow"
              >
                Get a Quote in 24-Hours Now!
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-sierra-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-pcb-700 bg-pcb-50'
                      : 'text-sierra-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-3 px-5 py-3 bg-pcb-600 text-white text-sm font-semibold rounded-lg"
              >
                Get a Quote in 24-Hours Now!
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}