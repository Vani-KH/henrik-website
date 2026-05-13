import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimateIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="om-oss" className="bg-stone-950 text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-28">
          <AnimateIn delay={0.1}>
            <span className="text-burgundy text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
              Om Henrik Modul
            </span>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-10">
              Et håndverk,<br />
              <span className="text-burgundy">en lidenskap.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="w-12 h-0.5 bg-burgundy mb-10" />
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <p className="text-stone-300 leading-relaxed text-base md:text-lg mb-8 max-w-md font-light">
              Henrik Hepsø er en 28 år gammel snekker fra Trondheim med en lidenskap for vinyl og
              analogt lydbilde. Han spiller inn sin egen musikk på kassett, og tar med seg den
              samme &ldquo;old world&rdquo;-kvaliteten og fokuset på håndverk inn i sitt modulære
              møbeldesign.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <p className="text-stone-400 leading-relaxed text-base md:text-lg max-w-md font-light">
              Hvert møbel er skreddersydd, hvert skjøt er presist, og hvert stykke bærer preg
              av den roen og fokuset du kun finner hos en håndverker som virkelig bryr seg.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.65}>
            <blockquote className="mt-12 border-l-2 border-burgundy pl-6">
              <p className="text-2xl md:text-3xl font-black uppercase leading-tight text-stone-100">
                &ldquo;Same focus as<br />the tape machine.&rdquo;
              </p>
            </blockquote>
          </AnimateIn>
        </div>

        {/* Right — photos */}
        <div className="relative flex flex-col gap-2.5 p-2.5 lg:py-20 lg:pr-20 lg:pl-2.5">
          <AnimateIn delay={0.3} className="flex-1 min-h-[300px] lg:min-h-0">
            <div className="relative w-full h-full min-h-[300px] overflow-hidden bg-stone-800">
              <img
                src="/images/about-1.jpg"
                alt="Henrik i verkstedet"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.5} className="flex-1 min-h-[200px] lg:min-h-0 lg:max-h-[40%]">
            <div className="relative w-full h-full min-h-[200px] overflow-hidden bg-stone-700 ml-auto lg:w-4/5">
              <img
                src="/images/about-2.jpg"
                alt="Detalj fra verkstedet"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="absolute bottom-4 right-4">
                <span className="text-white/50 text-[10px] uppercase tracking-[0.2em]">
                  Trondheim, Norge
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>

      </div>
    </section>
  )
}
