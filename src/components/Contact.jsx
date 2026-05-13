import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimateIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

const inputClass =
  'w-full bg-transparent border-b border-stone-300 py-4 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-burgundy transition-colors duration-300'

export default function Contact() {
  const [form, setForm] = useState({ navn: '', epost: '', melding: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-28 px-8 md:px-20 bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl">

        {/* Left — info */}
        <div>
          <AnimateIn delay={0.1}>
            <span className="text-burgundy text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
              Kontakt
            </span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-stone-900 leading-[0.95] tracking-tight mb-10">
              La oss snakke<br />om prosjektet<br />ditt.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="w-12 h-0.5 bg-burgundy mb-10" />
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <p className="text-stone-500 text-base font-light leading-relaxed mb-10 max-w-sm">
              Har du et spesifikt møbel i tankene, eller ønsker du å bestille en av eksisterende
              design? Ta gjerne kontakt — Henrik svarer personlig.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <div className="space-y-3 text-sm text-stone-500">
              <p>
                <span className="font-semibold text-stone-700 uppercase tracking-wider text-xs">E-post</span><br />
                henrik@henrikmodul.no
              </p>
              <p>
                <span className="font-semibold text-stone-700 uppercase tracking-wider text-xs">Sted</span><br />
                Trondheim, Norge
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Right — form */}
        <AnimateIn delay={0.3} className="flex items-start">
          {sent ? (
            <div className="py-20">
              <div className="w-10 h-0.5 bg-burgundy mb-6" />
              <p className="text-2xl font-black uppercase text-stone-900 tracking-tight">
                Takk for<br />meldingen.
              </p>
              <p className="text-stone-500 mt-4 font-light">Henrik tar kontakt snart.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-8 pt-2">
              <div>
                <input
                  type="text"
                  name="navn"
                  placeholder="Ditt navn"
                  value={form.navn}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="epost"
                  placeholder="E-postadresse"
                  value={form.epost}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <textarea
                  name="melding"
                  placeholder="Fortell om prosjektet ditt…"
                  value={form.melding}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="bg-burgundy text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-burgundy-deep transition-colors duration-300"
              >
                Send melding
              </button>
            </form>
          )}
        </AnimateIn>

      </div>
    </section>
  )
}
