import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * HOW TO ADD IMAGES:
 * 1. Put your photos in the public/gallery/ folder (e.g. smt-line.jpg, pcb-closeup.jpg)
 * 2. Add an entry to the `images` array below with src, alt, and category
 * 3. Rebuild and redeploy
 */
const images = [
  // === REPLACE THESE with your real photos ===
  { src: '/gallery/sample-1.jpg', alt: 'SMT Assembly Line', category: 'Facility' },
  { src: '/gallery/sample-2.jpg', alt: 'Pick and Place Machine', category: 'Equipment' },
  { src: '/gallery/sample-3.jpg', alt: 'PCB Close-up', category: 'Products' },
  { src: '/gallery/sample-4.jpg', alt: 'Quality Inspection', category: 'Quality' },
  { src: '/gallery/sample-5.jpg', alt: 'Reflow Oven', category: 'Equipment' },
  { src: '/gallery/sample-6.jpg', alt: 'Finished PCB Assembly', category: 'Products' },
  { src: '/gallery/sample-7.jpg', alt: 'Component Storage', category: 'Facility' },
  { src: '/gallery/sample-8.jpg', alt: 'AOI Machine', category: 'Equipment' },
]

const categories = ['All', ...new Set(images.map((img) => img.category))]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i === 0 ? filtered.length - 1 : i - 1))
  const next = () => setLightbox((i) => (i === filtered.length - 1 ? 0 : i + 1))

  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">Our Facility</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Photo
              <br />
              <span className="text-pcb-400">Gallery</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              Take a look inside our Montreal facility — our equipment, our process, and the boards we build every day.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-pcb-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No images in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-pcb-500 focus:ring-offset-2"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-center p-4'
                      placeholder.innerHTML = `<div class="text-gray-300 text-sm">${img.alt}</div><div class="text-gray-300 text-xs mt-1">Add image to public/gallery/</div>`
                      e.target.parentElement.appendChild(placeholder)
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                    <p className="text-white/60 text-xs">{img.category}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-sm">{filtered[lightbox].alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
