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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 py-6 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#"
        className={`text-sm font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
          scrolled ? 'text-stone-900' : 'text-white'
        }`}
      >
        Henrik Modul
      </a>

      <ul className="hidden md:flex items-center gap-10">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-500 hover:text-burgundy ${
                scrolled ? 'text-stone-500' : 'text-white/75'
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        className={`md:hidden flex flex-col gap-1.5 transition-colors duration-500 ${
          scrolled ? 'text-stone-900' : 'text-white'
        }`}
        aria-label="Meny"
      >
        <span className="block w-6 h-0.5 bg-current" />
        <span className="block w-4 h-0.5 bg-current" />
      </button>
    </motion.nav>
  )
}
