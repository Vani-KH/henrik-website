const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex flex-col px-8 md:px-16 py-10">

      {/* Logo top left */}
      <div>
        <img
          src={`${base}images/logo 2.png`}
          alt="Hepsø Modul"
          className="h-10 md:h-14 w-auto object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      {/* Centered image */}
      <div className="flex-1 flex items-center justify-center py-16">
        <img
          src={`${base}images/hero page image.png`}
          alt="Hepsø Modul"
          className="max-w-xl w-full h-auto object-contain"
        />
      </div>

    </section>
  )
}
