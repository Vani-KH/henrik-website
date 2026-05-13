export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 px-8 md:px-20 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800 pt-10">
        <span className="text-white text-xs font-black uppercase tracking-[0.2em]">
          Henrik Modul
        </span>
        <p className="text-xs tracking-wide">
          © {new Date().getFullYear()} Henrik Hepsø — Håndlaget i Trondheim
        </p>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          <a href="#produkter" className="hover:text-white transition-colors">Produkter</a>
          <a href="#om-oss" className="hover:text-white transition-colors">Om oss</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
