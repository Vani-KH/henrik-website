import Hero from './components/Hero'
import Banner from './components/Banner'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Banner />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
