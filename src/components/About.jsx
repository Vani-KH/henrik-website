const base = import.meta.env.BASE_URL

export default function About() {
  return (
    <section id="om-oss" style={{ backgroundColor: '#ffffff', color: '#6E2127' }} className="py-20 px-8 md:px-16">

      <h2 className="text-2xl md:text-3xl italic font-normal mb-10">
        Om Hepsø Modul
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div className="space-y-5 text-sm font-light leading-relaxed">
          <p>
            Henrik Hepsø er en 28 år gammel snekker fra Trondheim med en lidenskap for vinyl og
            analogt lydbilde. Han spiller inn sin egen musikk på kassett, og tar med seg den
            samme kvaliteten og fokuset på håndverk inn i sitt modulære møbeldesign.
          </p>
          <p>
            Hvert møbel er skreddersydd, hvert skjøt er presist, og hvert stykke bærer preg
            av den roen og fokuset du kun finner hos en håndverker som virkelig bryr seg.
            Inspirasjonen kommer fra en tid da ting ble laget for å vare — da materialvalg og
            utførelse var viktigere enn produksjonshastighet.
          </p>
          <p>
            Hepsø Modul startet som et personlig prosjekt: Henrik ville ha et møbel som kunne
            romme platesamlingen hans på en måte som både var funksjonell og vakker. Da ingenting
            på markedet møtte kravene hans, bygde han det selv. Det ble starten på noe større.
          </p>
          <p>
            I dag lager Henrik møbler på bestilling til kunder over hele landet. Hvert stykke
            er unikt og bygget etter kundens behov — dimensjoner, treslag, overflatebehandling
            og antall moduler tilpasses individuelt. Leveringstid er typisk fire til åtte uker
            avhengig av kompleksitet og pågående oppdrag.
          </p>
          <p>
            Verkstedet ligger i Trondheim, og Henrik tar gjerne imot besøk etter avtale for
            de som ønsker å se arbeidet på nært hold.
          </p>
        </div>

        <img
          src={`${base}images/about photo 2.jpg`}
          alt="Henrik Hepsø"
          className="w-full h-auto object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />

      </div>

    </section>
  )
}
