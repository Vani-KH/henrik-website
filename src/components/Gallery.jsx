import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const base = import.meta.env.BASE_URL

const photos = [
  { src: `${base}images/gallery-1.jpg`, alt: 'Vinyl record storage unit' },
  { src: `${base}images/gallery-2.jpg`, alt: 'Håndlaget hylle i eik' },
  { src: `${base}images/gallery-3.jpg`, alt: 'Dovetail joint detalj' },
  { src: `${base}images/gallery-4.jpg`, alt: 'Modulært sidebord' },
  { src: `${base}images/gallery-5.jpg`, alt: 'Studiooppsett med vinyl' },
  { src: `${base}images/gallery-6.jpg`, alt: 'Ferdig hylle — helhetlig' },
]

function Img({ src, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden bg-stone-800 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-semibold">{alt}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const headerRef = useRef(null)
  const gridRef   = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const gridInView   = useInView(gridRef,   { once: true, margin: '-60px' })

  return (
    <section id="produkter" className="bg-stone-950 pt-24 pb-28 px-8 md:px-20">

      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="text-burgundy text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
            Kolleksjonen
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-[0.95] tracking-tight">
            Håndlaget<br />med omhu
          </h2>
        </div>
        <p className="text-stone-500 text-sm font-light max-w-xs mt-6 md:mt-0 leading-relaxed">
          Hvert stykke er et enkelt stykke — skreddersydd for deg og ditt rom.
        </p>
      </motion.div>

      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: 40 }}
        animate={gridInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2"
      >
        {/* Row 1: full-width landscape */}
        <Img src={photos[0].src} alt={photos[0].alt} className="w-full aspect-video" />

        {/* Row 2: two side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Img src={photos[1].src} alt={photos[1].alt} className="aspect-square" />
          <Img src={photos[2].src} alt={photos[2].alt} className="aspect-square" />
        </div>

        {/* Row 3: three equal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Img src={photos[3].src} alt={photos[3].alt} className="aspect-square" />
          <Img src={photos[4].src} alt={photos[4].alt} className="aspect-square" />
          <Img src={photos[5].src} alt={photos[5].alt} className="aspect-square" />
        </div>
      </motion.div>

    </section>
  )
}
