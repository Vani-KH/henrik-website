import { useState } from 'react'

const fieldClass = 'w-full bg-transparent border-b border-[#6E2127] py-3 text-[#6E2127] placeholder-[#6E2127]/50 text-sm font-light focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState({ navn: '', telefon: '', epost: '', melding: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="kontakt" className="bg-white py-20 px-8 md:px-16">

      <h2 className="text-2xl md:text-3xl italic font-normal text-[#6E2127] mb-12">
        Kontakt
      </h2>

      {sent ? (
        <p className="text-[#6E2127] text-sm font-light">Takk for meldingen. Henrik tar kontakt snart.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <input type="text"  name="navn"    placeholder="Navn"    value={form.navn}    onChange={handleChange} required className={fieldClass} />
          </div>
          <div>
            <input type="tel"   name="telefon" placeholder="Telefon" value={form.telefon} onChange={handleChange} className={fieldClass} />
          </div>
          <div className="md:col-span-2">
            <input type="email" name="epost"   placeholder="E-post"  value={form.epost}   onChange={handleChange} required className={fieldClass} />
          </div>
          <div className="md:col-span-2">
            <textarea name="melding" placeholder="Melding" value={form.melding} onChange={handleChange} required rows={5} className={`${fieldClass} resize-none`} />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="text-[#6E2127] text-sm font-light border-b border-[#6E2127] pb-0.5 hover:opacity-60 transition-opacity">
              Send
            </button>
          </div>
        </form>
      )}

    </section>
  )
}
