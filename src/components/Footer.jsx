export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#6E2127', color: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(255,255,255,0.15)' }} className="py-8 px-8 md:px-16">
      <p className="text-xs font-light">
        © {new Date().getFullYear()} Hepsø Modul — Trondheim
      </p>
    </footer>
  )
}
