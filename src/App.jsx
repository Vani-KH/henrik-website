import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sectionThemes = {
  hero:      false,
  produkter: true,
  'om-oss':  false,
  kontakt:   true,
}

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setDark(sectionThemes[entry.target.id])
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    Object.keys(sectionThemes).forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeContext.Provider value={dark}>
      <div
        className="font-sans min-h-screen"
        style={{
          backgroundColor: dark ? '#6E2127' : '#ffffff',
          color: dark ? '#ffffff' : '#6E2127',
          transition: 'background-color 0.7s ease, color 0.7s ease',
        }}
      >
        <Navbar />
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
