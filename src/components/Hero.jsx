import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  '/images/hero page image.png',
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-stone-950">

      {/* Carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <img
            src={slides[current]}
            alt="Henrik Modul"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/92 via-stone-950/60 to-stone-950/20" />
      <div className="absolute inset-0 bg-stone-950/20" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-20 max-w-5xl">
        <motion.div {...fadeUp(0.2)} className="w-14 h-0.5 bg-burgundy mb-8" />

        <motion.h1
          {...fadeUp(0.4)}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
        >
          Handcrafted<br />
          <span className="text-burgundy">Modular</span><br />
          Furniture
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="text-base md:text-lg text-white/55 mb-12 max-w-sm font-light leading-relaxed"
        >
          Håndlaget i Trondheim.<br />Designet for å vare — og høres.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex items-center gap-8">
          <a
            href="#produkter"
            className="inline-block bg-burgundy text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-burgundy-deep transition-colors duration-300"
          >
            Se kolleksjonen
          </a>
          <a
            href="#om-oss"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors duration-300"
          >
            Om Henrik →
          </a>
        </motion.div>
      </div>

      {/* Slide counter — bottom left */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/30 text-xs font-mono tracking-widest">
          0{current + 1} / 0{slides.length}
        </span>
      </motion.div>

      {/* Slide indicators — bottom right */}
      <motion.div
        className="absolute bottom-10 right-8 md:right-20 z-10 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-5 transition-all duration-500 ${
              i === current ? 'w-8 bg-burgundy' : 'w-1.5 bg-white/25 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </motion.div>
    </section>
  )
}
