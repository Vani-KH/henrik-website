export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-600 px-8 md:px-20 py-12 border-t border-stone-800/60">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="text-white text-sm font-black uppercase tracking-[0.25em] block mb-2">
            Henrik Modul
          </span>
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Henrik Hepsø — Håndlaget i Trondheim
          </p>
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-widest">
          <a href="#produkter" className="hover:text-white transition-colors">Produkter</a>
          <a href="#om-oss"    className="hover:text-white transition-colors">Om oss</a>
          <a href="#kontakt"   className="hover:text-white transition-colors">Kontakt</a>
        </div>

        <a
          href="#kontakt"
          className="text-xs font-bold uppercase tracking-[0.2em] text-burgundy hover:text-white transition-colors duration-300"
        >
          Bestill et møbel →
        </a>
      </div>
    </footer>
  )
}
