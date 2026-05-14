// Servicios.jsx — Página de Servicios de PACKIFY
import { Link } from 'react-router-dom'
import {
  Leaf, Package, Sparkles, ArrowRight, Award,
} from 'lucide-react'

const PACKAGES = [
  {
    icon: Package,
    title: 'El Paquete Básico',
    desc: 'La solución esencial para comenzar con empaques biodegradables de alta calidad y funcionalidad.',
    features: ['Caja estándar', 'Diseño básico', 'Impresión básica', 'Material biodegradable'],
    tag: 'Económico',
    tagColor: '#94A3B8',
  },
  {
    icon: Sparkles,
    title: 'El Paquete Standard',
    desc: 'Ideal para marcas en crecimiento que buscan destacar con una identidad visual coherente y profesional.',
    features: ['Caja personalizada', 'Logo y colores de marca', 'Mejor calidad de impresión', 'Acabados intermedios'],
    tag: 'Recomendado',
    tagColor: '#4AAFD6',
  },
  {
    icon: Award,
    title: 'El Paquete Premium',
    desc: 'Máxima exclusividad y sostenibilidad para marcas que quieren ofrecer una experiencia de empaque única.',
    features: ['Diseño exclusivo', 'Branding completo', 'Papel con semillas', 'Acabados premium', 'Empaque ecológico diferenciado'],
    tag: 'Premium',
    tagColor: '#0B1A3E',
  },
]

export default function Servicios() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(135deg, #080F24 0%, #1E3A6E 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium mb-3" style={{ color: '#7ECEF4' }}>
            Inicio / Paquetes
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nuestros paquetes
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Soluciones integrales de empaque biodegradable y personalizado para negocios
            gastronómicos que quieren diferenciarse y crecer con identidad.
          </p>
        </div>
      </section>


      {/* Sección de Paquetes */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Planes a medida</p>
            <h2 className="section-title">Nuestros Paquetes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map(({ icon: Icon, title, desc, features, tag, tagColor }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: '#EBF6FC' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#4AAFD6' }} />
                  </div>
                  {tag && (
                    <span
                      className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full text-white"
                      style={{ background: tagColor }}
                    >
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-4" style={{ color: '#0B1A3E' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#4AAFD6' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacto"
                  className="w-full text-center block font-bold text-sm px-4 py-3.5 rounded-xl transition-all duration-200 border-2"
                  style={{ borderColor: '#4AAFD6', color: '#4AAFD6' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#4AAFD6'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#4AAFD6'
                  }}
                >
                  Solicitar información
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA final */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #080F24, #1E3A6E)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-10 h-10 mx-auto mb-5" style={{ color: '#4AAFD6' }} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            ¿No encuentras exactamente lo que necesitas?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contáctanos y diseñamos una solución de empaque a medida para tu negocio gastronómico.
            Trabajamos con pedidos personalizados sin mínimos exagerados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/asesorias" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Agendar asesoría gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contacto" className="btn-secondary px-8 py-4 text-base inline-flex items-center gap-2">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
