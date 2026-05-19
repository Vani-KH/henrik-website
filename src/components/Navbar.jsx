import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['Produkter', 'Om oss', 'Kontakt']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 py-5 transition-all duration-500 ${
        scrolled ? 'bg-stone-950/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#" className="text-sm font-black uppercase tracking-[0.25em] text-white">
        Henrik Modul
      </a>

      <ul className="hidden md:flex items-center gap-10">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className="hidden md:inline-block bg-burgundy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-burgundy-deep transition-colors duration-300"
      >
        Bestill →
      </a>

      <button className="md:hidden flex flex-col gap-1.5" aria-label="Meny">
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-4 h-0.5 bg-white" />
      </button>
    </motion.nav>
  )
}
