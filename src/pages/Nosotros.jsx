// Nosotros.jsx — Página "Quiénes somos" de PACKIFY
import { Link } from 'react-router-dom'
import {
  Leaf, Palette, Truck, Star, Heart, Zap, Clock, CheckCircle, ArrowRight,
  Target, Eye, Factory, Megaphone, Users, Handshake,
} from 'lucide-react'

const TEAM = [
  { name: 'Enrrique Torres', role: 'Gerente General', desc: 'Lidera la visión estratégica de PACKIFY, asegurando que cada solución combine sostenibilidad, funcionalidad y crecimiento de negocio.', img: '/Enrique.png', initials: 'ET' },
  { name: 'Bryan Castillo', role: 'Diseñador', desc: 'Responsable de las propuestas visuales y la personalización de cada empaque. Convierte la identidad de cada marca en un envase único.', img: '/Bryan Castillo.png', initials: 'BC' },
  { name: 'Keila Palacios', role: 'Marketing y Ventas', desc: 'Gestiona la captación de clientes, la comunicación comercial y el posicionamiento de PACKIFY en el mercado gastronómico.', img: '/Keila.png', initials: 'KP' },
  { name: 'Yuliana Recalde', role: 'Producción', desc: 'Supervisa la fabricación, los materiales y el control de calidad. Garantiza que cada empaque cumpla los estándares de resistencia.', img: '/Yuliana.png', initials: 'YR' },
  { name: 'Jhomaira Díaz', role: 'Logística', desc: 'Coordina la distribución, los tiempos de entrega y la gestión de inventario para asegurar que cada pedido llegue puntual.', img: '/Jhomaira.png', initials: 'JD' },
]

const VALUES = [
  { Icon: Leaf, label: 'Sostenibilidad', desc: 'Cada decisión de diseño y material considera el impacto ambiental.' },
  { Icon: Zap, label: 'Innovación', desc: 'Buscamos constantemente nuevas soluciones para el sector gastronómico.' },
  { Icon: CheckCircle, label: 'Responsabilidad', desc: 'Cumplimos compromisos con clientes, equipo y entorno.' },
  { Icon: Star, label: 'Calidad', desc: 'Cada empaque pasa por procesos de validación antes de la entrega.' },
  { Icon: Heart, label: 'Cercanía con el cliente', desc: 'Tratamos cada negocio como si fuera el nuestro.' },
  { Icon: Palette, label: 'Creatividad', desc: 'Diseñamos propuestas únicas que diferencian a cada marca.' },
  { Icon: Clock, label: 'Puntualidad', desc: 'Respetamos los tiempos acordados en cada etapa del proceso.' },
]

const COMBO_PILLARS = [
  { Icon: Palette, label: 'Diseño' },
  { Icon: Factory, label: 'Producción' },
  { Icon: Leaf, label: 'Sostenibilidad' },
  { Icon: Megaphone, label: 'Marketing' },
  { Icon: Truck, label: 'Logística' },
  { Icon: Handshake, label: 'Asesoría' },
]

const DIFFERENTIALS = [
  'Atención personalizada desde el primer contacto',
  'Soluciones de empaque a medida de cada negocio',
  'Equipo técnico y creativo especializado',
  'Procesos orientados a calidad y trazabilidad',
  'Personalización accesible para PYMES gastronómicas',
  'Enfoque exclusivo en alimentos y delivery',
]



export default function Nosotros() {
  return (
    <div className="pt-16 lg:pt-20">
      <PageHero />
      <PresentationSection />
      <MVVSection />
      <DifferentialsSection />
      <TeamSection />
      <CtaSection />
    </div>
  )
}

function PageHero() {
  return (
    <section className="page-hero" style={{ background: 'linear-gradient(135deg, #080F24 0%, #1E3A6E 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium mb-3" style={{ color: '#7ECEF4' }}>Inicio / Nosotros</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Quiénes somos</h1>
        <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
          Una empresa trujillana que nació para transformar cómo los negocios gastronómicos
          presentan, protegen y comunican sus productos.
        </p>
      </div>
    </section>
  )
}

function PresentationSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">Nuestra historia</p>
            <h2 className="section-title mb-6">Somos PACKIFY</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Somos PACKIFY, una empresa trujillana dedicada al diseño y fabricación de empaques
                personalizados y biodegradables para negocios gastronómicos. Nacemos como respuesta a
                la necesidad de las PYMES de diferenciarse, mejorar la presentación de sus productos,
                reducir el uso de plásticos y ofrecer una mejor experiencia al cliente final.
              </p>
              <p>
                En PACKIFY combinamos diseño, producción, sostenibilidad, marketing y logística
                en una propuesta integral pensada para las PYMES del sector gastronómico de
                Trujillo y el norte del Perú.
              </p>
            </div>
            {/* Pilares — íconos en lugar de emojis */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {COMBO_PILLARS.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
                  <Icon className="w-5 h-5 shrink-0" style={{ color: '#4AAFD6' }} />
                  <span className="font-medium text-sm" style={{ color: '#1E3A6E' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/Equipo 2.png"
              alt="Equipo Packify"
              className="w-full h-auto rounded-2xl shadow-xl border border-gray-100"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
              <div className="text-2xl font-extrabold mb-1" style={{ color: '#0B1A3E' }}>+120</div>
              <div className="text-sm text-gray-500">negocios asesorados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MVVSection() {
  return (
    <section className="py-20" style={{ background: '#F0F5FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Nuestra esencia</p>
          <h2 className="section-title">Misión, Visión y Valores</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#EBF6FC' }}>
                <Target className="w-6 h-6" style={{ color: '#4AAFD6' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#0B1A3E' }}>Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Crear empaques biodegradables, funcionales y personalizados que ayuden a los negocios
              gastronómicos a proteger sus productos, fortalecer su marca y reducir su impacto
              ambiental, ofreciendo asesoría especializada y soluciones accesibles para PYMES.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#EBF6FC' }}>
                <Eye className="w-6 h-6" style={{ color: '#4AAFD6' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#0B1A3E' }}>Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser la empresa referente en Trujillo y el norte del Perú en soluciones de empaque
              sostenible para negocios gastronómicos y PYMES, reconocidos por calidad,
              diseño innovador y compromiso ambiental.
            </p>
          </div>
        </div>
        <h3 className="text-center text-2xl font-bold mb-8" style={{ color: '#0B1A3E' }}>Nuestros valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ Icon, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#4AAFD6] transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: '#EBF6FC' }}>
                <Icon className="w-6 h-6" style={{ color: '#4AAFD6' }} />
              </div>
              <h4 className="font-bold mb-2" style={{ color: '#1E3A6E' }}>{label}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DifferentialsSection() {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(135deg, #080F24, #1E3A6E)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#7ECEF4' }}>Lo que nos distingue</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros diferenciales</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              En PACKIFY no somos un proveedor más. Somos un aliado estratégico que combina
              diseño, producción y asesoría para potenciar tu marca gastronómica.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DIFFERENTIALS.map(text => (
              <div key={text} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#4AAFD6' }} />
                <span className="text-gray-200 text-sm leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">El equipo detrás de PACKIFY</p>
          <h2 className="section-title">Nuestro equipo directivo</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Profesionales comprometidos con el diseño, la sostenibilidad y el éxito de cada negocio gastronómico.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map(({ name, role, desc, img, initials }) => (
            <div key={name} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#4AAFD6] hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 group">
              <div className="relative overflow-hidden h-[400px] bg-gray-100">
                <img src={img} alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }} />
                <div className="w-full h-full items-center justify-center text-white text-4xl font-bold"
                  style={{ display: 'none', background: 'linear-gradient(135deg, #1E3A6E, #4AAFD6)' }}>
                  {initials}
                </div>
                <div className="absolute top-4 right-4 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg backdrop-blur-md"
                  style={{ background: 'rgba(74,175,214,0.7)' }}>
                  {role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1" style={{ color: '#0B1A3E' }}>{name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#4AAFD6' }}>{role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}



function CtaSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #080F24, #1E3A6E)' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">¿Listo para transformar tus empaques?</h2>
        <p className="text-gray-300 text-lg mb-8">
          Conversemos sobre cómo PACKIFY puede ayudarte a diferenciarte con empaques biodegradables y con identidad propia.
        </p>
        <Link to="/asesorias" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
          Solicitar asesoría gratuita <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
