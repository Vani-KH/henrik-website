import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-stone-950 text-white">
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
