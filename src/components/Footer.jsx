// Footer.jsx — Pie de página completo con enlaces, servicios, contacto y legales
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'

const QUICK_LINKS = [
  ['Inicio', '/'],
  ['Nosotros', '/nosotros'],
  ['Paquetes', '/paquetes'],
  ['Asesorías', '/asesorias'],
  ['Sostenibilidad', '/sostenibilidad'],
//  ['Proceso', '/proceso'],
//  ['Clientes Ideales', '/clientes-ideales'],
  ['Contacto', '/contacto'],
]

const SERVICES = [
  'Empaques personalizados',
  'Empaques para delivery',
  'Bolsas kraft',
  'Cajas para alimentos',
  'Envases para pastelería',
  'Etiquetas y branding',
  'Ediciones limitadas',
  'Asesoría en materiales',
]

const MATERIALS = [
  'Cartón biodegradable',
  'Tintas ecológicas',
  'Adhesivos industriales no tóxicos',
  'Papel adhesivo',
  'Papel couche',
  'Cinta craft biodegradable',
]

export default function Footer() {
  return (
    <footer style={{ background: '#080F24' }}>
      {/* ── Cuerpo del footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Columna 1 — Marca y redes */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white font-extrabold text-xl tracking-widest">
                PACK<span style={{ color: '#4AAFD6' }}>IFY</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empaques biodegradables personalizados para negocios gastronómicos.
              Protegemos tus productos, fortalecemos tu marca y cuidamos el planeta.
            </p>
            {/* Redes sociales ficticias */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/packify_oficial/' },
                { Icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61589205459376' },
                { Icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/packify-oficial-b19b27409/?isSelfProfile=true' },
                { Icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@packifyperu' },
              ].map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#4AAFD6'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 — Navegación rápida */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Servicios
            </h4>
            <ul className="space-y-2 mb-7">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/paquetes"
                    className="text-gray-400 text-sm transition-colors hover:text-[#4AAFD6]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Servicios y materiales */}
          <div>

            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Materiales
            </h4>
            <ul className="space-y-1.5">
              {MATERIALS.map((m) => (
                <li key={m} className="text-gray-500 text-xs">{m}</li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#4AAFD6' }} />
                <span className="text-gray-400 text-sm">packifyperu@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#4AAFD6' }} />
                <span className="text-gray-400 text-sm">+51 934831708

                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#4AAFD6' }} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Husares de Junín 1344
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                style={{ background: '#4AAFD6' }}
                onMouseEnter={e => e.currentTarget.style.background = '#3A9DC4'}
                onMouseLeave={e => e.currentTarget.style.background = '#4AAFD6'}
              >
                Escríbenos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Barra inferior legal ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-end
       items-center gap-2">

          <p className="text-gray-600 text-xs">
            © 2026 PACKIFY. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
