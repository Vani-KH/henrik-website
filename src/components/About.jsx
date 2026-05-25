const base = import.meta.env.BASE_URL

export default function About() {
  return (
    <section id="om-oss" className="bg-white py-20 px-8 md:px-16">

      <h2 className="text-2xl md:text-3xl italic font-normal text-[#6E2127] mb-10">
        Om Hepsø Modul
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div className="space-y-5 text-[#6E2127] text-sm font-light leading-relaxed">
          <p>
            Henrik Hepsø er en 28 år gammel snekker fra Trondheim med en lidenskap for vinyl og
            analogt lydbilde. Han spiller inn sin egen musikk på kassett, og tar med seg den
            samme kvaliteten og fokuset på håndverk inn i sitt modulære møbeldesign.
          </p>
          <p>
            Hvert møbel er skreddersydd, hvert skjøt er presist, og hvert stykke bærer preg
            av den roen og fokuset du kun finner hos en håndverker som virkelig bryr seg.
          </p>
        </div>

        <img
          src={`${base}images/about photo.avif`}
          alt="Henrik Hepsø"
          className="w-full h-auto object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />

      </div>

    </section>
  )
}
