export default function Footer() {
  return (
    <footer className="py-8 px-8 md:px-16" style={{ borderTop: '1px solid currentColor', opacity: 0.6 }}>
      <p className="text-xs font-light">
        © {new Date().getFullYear()} Hepsø Modul — Trondheim
      </p>
    </footer>
  )
}
