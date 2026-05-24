export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-stone-950">

      {/* Full-page hero image */}
      <img
        src="/images/hero page image.png"
        alt="Henrik Modul"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dim overlay */}
      <div className="absolute inset-0 bg-stone-950/50" />

      {/* Logo — top right */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 z-10">
        <img
          src="/images/logo.png"
          alt="Henrik Modul"
          className="h-14 md:h-18 w-auto object-contain"
        />
      </div>
    </section>
  )
}
