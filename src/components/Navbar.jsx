const links = [
  { label: 'Produktet',      href: '#produkter' },
  { label: 'Om Hepsø Modul', href: '#om-oss' },
  { label: 'Kontakt',        href: '#kontakt' },
]

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-8 px-8 md:px-16 py-4"
      style={{
        backgroundColor: '#ffffff',
        color: '#6E2127',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 300,
        fontSize: '0.8rem',
      }}
    >
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="hover:opacity-50 transition-opacity duration-200"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
