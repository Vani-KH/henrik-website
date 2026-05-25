import { useTheme } from '../ThemeContext'

const links = [
  { label: 'Produktet',       href: '#produkter' },
  { label: 'Om Hepsø Modul',  href: '#om-oss' },
  { label: 'Kontakt',         href: '#kontakt' },
]

export default function Navbar() {
  const dark = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-8 px-8 md:px-16 py-4"
      style={{
        backgroundColor: dark ? '#6E2127' : '#ffffff',
        color: dark ? '#ffffff' : '#6E2127',
        transition: 'background-color 0.7s ease, color 0.7s ease',
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
