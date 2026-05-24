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
      <div className="absolute inset-0 bg-stone-950/65" />

      {/* Logo — centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src={`${base}images/logo.png`}
          alt="Henrik Modul"
          className="w-[80vw] md:w-[60vw] lg:w-[50vw] max-w-4xl h-auto object-contain"
        />
      </div>
    </section>
  )
}
