import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handler = () => {
      // Show after scrolling 400px down
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50" style={{ animation: 'floatBounce 3s ease-in-out infinite' }}>
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        {/* CTA button */}
        <Link
          to="/quote"
          className="flex items-center gap-2 px-6 py-3.5 bg-pcb-600 text-white font-bold text-sm rounded-full shadow-lg hover:bg-pcb-500 transition-all hover:scale-[1.03]"
          style={{ boxShadow: '0 8px 30px rgba(37,99,235,0.4), 0 2px 8px rgba(0,0,0,0.1)' }}
        >
          <span
            className="w-2 h-2 bg-green-400 rounded-full"
            style={{ animation: 'dotPulse 1.5s ease-in-out infinite' }}
          />
          Get a Quote in 24-Hours Now!
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
