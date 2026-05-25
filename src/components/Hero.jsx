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

      {/* Centered image + caption */}
      <div className="flex-1 flex flex-col items-center justify-center py-16 gap-4">
        <img
          src={`${base}images/midcentury.jpg`}
          alt="Hepsø Modul"
          className="max-w-xl w-full h-auto object-contain"
        />
        <p className="text-[#6E2127] text-xs font-light tracking-wide text-center max-w-xl">
          Et håndlaget designermøbel som oppbevarer dine vinyler
        </p>
      </div>

    </section>
  )
}
