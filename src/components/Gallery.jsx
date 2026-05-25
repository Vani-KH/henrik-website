import { useState } from 'react'

const base = import.meta.env.BASE_URL

const photos = [
  `${base}images/gallery-1.jpg`,
  `${base}images/gallery-2.jpg`,
  `${base}images/gallery-3.jpg`,
  `${base}images/gallery-4.jpg`,
  `${base}images/gallery-5.jpg`,
  `${base}images/gallery-6.jpg`,
]

export default function Gallery() {
  const [enlarged, setEnlarged] = useState(null)

  return (
    <section id="produkter" className="bg-white py-20 px-8 md:px-16">

      <h2 className="text-2xl md:text-3xl italic font-normal text-[#6E2127] mb-12">
        Produktet
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setEnlarged(src)}
            className="aspect-square overflow-hidden bg-gray-100 focus:outline-none"
          >
            <img
              src={src}
              alt={`Produkt ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {enlarged && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
          onClick={() => setEnlarged(null)}
        >
          <img
            src={enlarged}
            alt="Forstørret"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

    </section>
  )
}
