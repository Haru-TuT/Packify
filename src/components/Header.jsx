// Header.jsx — Navegación sticky, responsive, con menú hamburguesa en mobile
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Package } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Paquetes', path: '/paquetes' },
  { label: 'Asesorías', path: '/asesorias' },
  { label: 'Sostenibilidad', path: '/sostenibilidad' },
//  { label: 'Proceso', path: '/proceso' },
//  { label: 'Clientes Ideales', path: '/clientes-ideales' },
  { label: 'Contacto', path: '/contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Detectar scroll para cambiar sombra del header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú mobile al cambiar de página
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''
        }`}
      style={{ background: '#0B1A3E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center shrink-0">
            <span className="text-white font-black text-2xl lg:text-3xl tracking-tighter select-none transition-transform hover:scale-105">
              PACK<span style={{ color: '#4AAFD6' }}>IFY</span>
            </span>
          </Link>

          {/* ── Navegación desktop (visible en xl+) ── */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${isActive(path)
                  ? 'text-[#4AAFD6] bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/8'
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/asesorias"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md"
              style={{ background: '#4AAFD6' }}
              onMouseEnter={e => e.currentTarget.style.background = '#3A9DC4'}
              onMouseLeave={e => e.currentTarget.style.background = '#4AAFD6'}
            >
              Solicitar asesoría
            </Link>
          </div>

          {/* ── Botón hamburguesa (mobile / tablet) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Menú mobile desplegable ── */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ background: '#0D1F4A', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${isActive(path)
                ? 'text-[#4AAFD6] bg-white/10'
                : 'text-gray-300 hover:text-white hover:bg-white/8'
                }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              to="/asesorias"
              className="flex items-center justify-center gap-2 text-white font-semibold px-4 py-3.5 rounded-xl text-sm"
              style={{ background: '#4AAFD6' }}
            >
              Solicitar asesoría gratuita
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
