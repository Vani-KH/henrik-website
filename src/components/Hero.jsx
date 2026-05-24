const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-stone-950">

      {/* Full-page hero image */}
      <img
        src={`${base}images/hero page image.png`}
        alt="Henrik Modul"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dim overlay */}
      <div className="absolute inset-0 bg-stone-950/80" />

      {/* Logo — centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src={`${base}images/logo.png`}
          alt="Henrik Modul"
          className="w-[95vw] md:w-[78vw] lg:w-[65vw] max-w-[1165px] h-auto object-contain"
        />
      </div>
    </section>
  )
}
