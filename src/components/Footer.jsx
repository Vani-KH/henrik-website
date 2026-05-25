export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#6E2127]/20 py-8 px-8 md:px-16">
      <p className="text-[#6E2127] text-xs font-light">
        © {new Date().getFullYear()} Hepsø Modul — Trondheim
      </p>
    </footer>
  )
}
