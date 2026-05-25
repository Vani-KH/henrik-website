import { useState } from 'react'

const base = import.meta.env.BASE_URL

const items = [
  { src: `${base}images/Gallery/gallery-1.jpg`, caption: 'modulære kasser',        align: 'left'   },
  { src: `${base}images/Gallery/gallery-2.jpg`, caption: 'plantebeholder',          align: 'center' },
  { src: `${base}images/Gallery/gallery-3.jpg`, caption: 'fleksibel sammensetning', align: 'right'  },
  { src: `${base}images/Gallery/gallery-4.jpg`, caption: 'tilpasset oppbevaring',   align: 'left'   },
]

const alignClass = {
  left:   'md:justify-start',
  center: 'md:justify-center',
  right:  'md:justify-end',
}

const imgWidth = {
  left:   'w-[75vw] md:w-[44vw] max-w-xl',
  center: 'w-[70vw] md:w-[36vw] max-w-lg',
  right:  'w-[75vw] md:w-[44vw] max-w-xl',
}

function Caption({ children }) {
  return (
    <span
      className="text-[11px] leading-tight pb-1 shrink-0"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300, color: 'inherit' }}
    >
      {children}
    </span>
  )
}

function GalleryItem({ src, caption, align, onEnlarge }) {
  const isRight = align === 'right'
  return (
    <div
      className={`flex flex-col md:flex-row ${isRight ? 'md:flex-row-reverse' : ''} ${alignClass[align]} items-start md:items-end gap-3 md:gap-6`}
    >
      <button
        onClick={onEnlarge}
        className={`${imgWidth[align]} focus:outline-none block shrink-0`}
        aria-label="Forstørr bilde"
      >
        <img src={src} alt={caption} className="w-full h-auto" />
      </button>
      <Caption>{caption}</Caption>
    </div>
  )
}

export default function Gallery() {
  const [enlarged, setEnlarged] = useState(null)

  return (
    <section id="produkter" className="py-20 px-8 md:px-16">

      <h2
        className="text-2xl md:text-3xl italic font-normal mb-20 md:mb-28"
        style={{ color: 'inherit' }}
      >
        Produktet
      </h2>

      <div className="space-y-20 md:space-y-32">
        {items.map((item, i) => (
          <GalleryItem
            key={i}
            {...item}
            onEnlarge={() => setEnlarged(item.src)}
          />
        ))}
      </div>

      {enlarged && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-8"
          onClick={() => setEnlarged(null)}
        >
          <img src={enlarged} alt="Forstørret" className="max-w-full max-h-full object-contain" />
        </div>
      )}

    </section>
  )
}
