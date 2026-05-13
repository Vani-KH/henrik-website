import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Background image — drop your photo at public/images/hero.jpg */}
      <img
        src="/images/hero page image.png"
        alt="Vinyl record storage av Henrik Modul"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/65 to-stone-900/20" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-20 max-w-5xl">
        {/* Burgundy accent line */}
        <motion.div
          {...fadeUp(0.2)}
          className="w-14 h-0.5 bg-burgundy mb-8"
        />

        <motion.h1
          {...fadeUp(0.4)}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white uppercase leading-[0.95] tracking-tight mb-8"
        >
          Handcrafted<br />
          <span className="text-burgundy">Modular</span><br />
          Furniture
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="text-base md:text-lg text-white/65 mb-12 max-w-sm font-light leading-relaxed"
        >
          Håndlaget i Trondheim.<br />
          Designet for å vare — og høres.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex items-center gap-6">
          <a
            href="#produkter"
            className="inline-block bg-burgundy text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-burgundy-deep transition-colors duration-300"
          >
            Se kolleksjonen
          </a>
          <a
            href="#om-oss"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300"
          >
            Om Henrik →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-white/20 origin-top"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
