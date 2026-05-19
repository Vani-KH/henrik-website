const text = 'HANDCRAFTED IN TRONDHEIM · VINYL STORAGE · MODULAR FURNITURE · CUSTOM ORDERS · ANALOGT HÅNDVERK · '

export default function Marquee() {
  const repeated = text.repeat(6)

  return (
    <div className="bg-burgundy py-4 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 28s linear infinite' }}
      >
        <span className="text-white text-[11px] font-bold uppercase tracking-[0.25em]">
          {repeated}
        </span>
        <span className="text-white text-[11px] font-bold uppercase tracking-[0.25em]" aria-hidden>
          {repeated}
        </span>
      </div>
    </div>
  )
}
