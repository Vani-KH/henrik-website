import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  { src: '/images/gallery-1.jpg', alt: 'Vinyl record storage unit' },
  { src: '/images/gallery-2.jpg', alt: 'Håndlaget hylle i eik' },
  { src: '/images/gallery-3.jpg', alt: 'Dovetail joint detalj' },
  { src: '/images/gallery-4.jpg', alt: 'Modulært sidebord' },
  { src: '/images/gallery-5.jpg', alt: 'Studiooppsett med vinyl' },
  { src: '/images/gallery-6.jpg', alt: 'Ferdig hylle — helhetlig' },
]

function GalleryCard({ photo, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group relative aspect-square overflow-hidden bg-stone-200 cursor-pointer"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
          {photo.alt}
        </span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="produkter" className="py-28 px-8 md:px-20 bg-cream">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <span className="text-burgundy text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
          Kolleksjonen
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-stone-900 leading-[0.95] tracking-tight">
          Håndlaget<br />med omhu
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {photos.map((photo, i) => (
          <GalleryCard key={i} photo={photo} index={i} />
        ))}
      </div>
    </section>
  )
}
