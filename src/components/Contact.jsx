import { useState } from 'react'
import { useTheme } from '../ThemeContext'

export default function Contact() {
  const [form, setForm] = useState({ navn: '', telefon: '', epost: '', melding: '' })
  const [sent, setSent] = useState(false)
  const dark = useTheme()

  const borderColor = dark ? 'rgba(255,255,255,0.6)' : '#6E2127'
  const placeholderStyle = dark ? 'placeholder-white/40' : 'placeholder-[#6E2127]/40'
  const fieldClass = `w-full bg-transparent border-b py-3 text-sm font-light focus:outline-none ${placeholderStyle}`

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="kontakt" className="py-20 px-8 md:px-16">

      <h2 className="text-2xl md:text-3xl italic font-normal mb-12" style={{ color: 'inherit' }}>
        Kontakt
      </h2>

      {sent ? (
        <p className="text-sm font-light" style={{ color: 'inherit' }}>
          Takk for meldingen. Henrik tar kontakt snart.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <input type="text"  name="navn"    placeholder="Navn"    value={form.navn}    onChange={handleChange} required
              className={fieldClass} style={{ borderColor, color: 'inherit' }} />
          </div>
          <div>
            <input type="tel"   name="telefon" placeholder="Telefon" value={form.telefon} onChange={handleChange}
              className={fieldClass} style={{ borderColor, color: 'inherit' }} />
          </div>
          <div className="md:col-span-2">
            <input type="email" name="epost"   placeholder="E-post"  value={form.epost}   onChange={handleChange} required
              className={fieldClass} style={{ borderColor, color: 'inherit' }} />
          </div>
          <div className="md:col-span-2">
            <textarea name="melding" placeholder="Melding" value={form.melding} onChange={handleChange} required rows={5}
              className={`${fieldClass} resize-none`} style={{ borderColor, color: 'inherit' }} />
          </div>
          <div className="md:col-span-2">
            <button type="submit"
              className="text-sm font-light border-b pb-0.5 hover:opacity-50 transition-opacity"
              style={{ borderColor, color: 'inherit' }}
            >
              Send
            </button>
          </div>
        </form>
      )}

    </section>
  )
}
