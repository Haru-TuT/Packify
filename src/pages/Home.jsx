// Home.jsx — Página de Inicio de PACKIFY
import { Link } from 'react-router-dom'
import {
  Leaf, Palette, Truck, MessageSquare, Package, Wheat,
  Layers, Recycle, Droplets, Globe, RefreshCw,
  Users, Star, CheckCircle, ArrowRight, ChevronRight,
  Award, Zap, Shield, BarChart3, Tag, FileText,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <CertificationsSection />
      <ProblemsSection />
      <ServicesOverview />
      <MaterialsSection />
      <WhyPackifySection />
      <FinalCTA />
    </div>
  )
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Empaques.png" 
          alt="Empaques Packify" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay para móvil (vertical) */}
        <div className="absolute inset-0 block sm:hidden" 
          style={{ background: 'linear-gradient(to bottom, rgba(8, 15, 36, 0.9) 0%, rgba(8, 15, 36, 0.5) 40%, rgba(8, 15, 36, 0.7) 100%)' }} />
        {/* Overlay para desktop (horizontal) */}
        <div className="absolute inset-0 hidden sm:block" 
          style={{ background: 'linear-gradient(to right, rgba(8, 15, 36, 0.9) 0%, rgba(8, 15, 36, 0.4) 60%, rgba(8, 15, 36, 0.1) 100%)' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.1] z-0"
        style={{ backgroundImage: 'radial-gradient(circle, #4AAFD6 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-8 lg:pb-32 w-full">
        <div className="max-w-3xl">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Empaques biodegradables{' '}
            <span style={{ color: '#4AAFD6' }}>personalizados</span>{' '}
            para negocios gastronómicos
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            En PACKIFY diseñamos y fabricamos empaques sostenibles que protegen tus
            productos, fortalecen tu marca y mejoran la experiencia de tus clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/paquetes"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl transition-all duration-200 hover:scale-[1.02]"
              style={{ background: '#4AAFD6' }}>
              Solicitar asesoría gratuita <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/paquetes"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
              Ver paquetes <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-12 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {['Personalización en bajos volúmenes', 'Entrega rápida en Trujillo', 'Asesoría especializada incluida'].map(t => (
              <span key={t} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#4AAFD6' }} />{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-none" style={{ bottom: '-1px' }}>
        <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full h-[70px]">
          <path d="M0 70H1440V35C1080 0 360 70 0 35V70Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

/* ── Certificaciones ── */
function CertificationsSection() {
  const certifications = [
    { src: '/cert-iso9001.jpg', alt: 'ISO 9001 Calidad' },
    { src: '/cert-iso14001.jpg', alt: 'ISO 14001 Ambiental' },
    { src: '/cert-compostable.jpg', alt: 'Compostable EN 13432' },
    { src: '/cert-alimentos.jpg', alt: 'Apto para Alimentos' },
    { src: '/cert-papel.jpg', alt: 'Papel Responsable' },
  ]
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow mb-8">Nuestras Certificaciones</p>
        <div className="flex flex-col gap-10 lg:gap-16 items-center">
          {/* Fila superior: 3 certificados */}
          <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
            {certifications.slice(0, 3).map((cert) => (
              <div key={cert.alt} className="w-[140px] lg:w-[220px] transition-all duration-300 hover:scale-110">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-auto object-contain rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
          {/* Fila inferior: 2 certificados */}
          <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
            {certifications.slice(3, 5).map((cert) => (
              <div key={cert.alt} className="w-[140px] lg:w-[220px] transition-all duration-300 hover:scale-110">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-auto object-contain rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Problemas que resolvemos ── */
function ProblemsSection() {
  const problems = [
    { Icon: Package, title: '¿Tus empaques no representan tu marca?', desc: 'Los envases genéricos no comunican identidad. Te diseñamos empaques que hablan por tu negocio y te diferencian de la competencia.' },
    { Icon: Droplets, title: '¿Tienes problemas de derrames en delivery?', desc: 'Soluciones herméticas y funcionales que protegen tus productos hasta llegar al cliente final, sin derrames ni pérdida de temperatura.' },
    { Icon: Leaf, title: '¿Quieres eliminar el plástico o tecnopor?', desc: 'Alternativas 100 % biodegradables y compostables con el mismo nivel de protección, presentación y funcionalidad.' },
    { Icon: BarChart3, title: '¿Necesitas personalizar sin grandes pedidos?', desc: 'Pedidos flexibles adaptados a PYMES. No necesitas inmovilizar capital en inventarios masivos para tener empaques con identidad propia.' },
  ]
  return (
    <section className="py-20" style={{ background: '#F0F5FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Problemas que resolvemos</p>
          <h2 className="section-title">¿Te identificas con alguna de estas situaciones?</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            PACKIFY nace para resolver los retos reales de los negocios gastronómicos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-7 flex gap-5 border border-gray-200 hover:border-[#4AAFD6] hover:shadow-card-hover transition-all duration-200">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#EBF6FC' }}>
                <Icon className="w-6 h-6" style={{ color: '#4AAFD6' }} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#1E3A6E' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Resumen de servicios ── */
function ServicesOverview() {
  const services = [
    { Icon: Palette, title: 'Diseño personalizado', desc: 'Propuestas visuales alineadas a la identidad de tu marca gastronómica.' },
    { Icon: Leaf, title: 'Fabricación biodegradable', desc: 'Empaques con papel kraft, bagazo de caña, cartón y pulpa de celulosa.' },
    { Icon: Truck, title: 'Empaques para delivery', desc: 'Conservan temperatura, evitan derrames y cuidan la presentación final.' },
    { Icon: MessageSquare, title: 'Asesoría estratégica', desc: 'Te acompañamos en material, formato, diseño y mensaje ideal para tu negocio.' },
  ]
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Lo que hacemos</p>
          <h2 className="section-title">Nuestros servicios principales</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            De la asesoría inicial hasta la entrega final, gestionamos todo el proceso de tu empaque sostenible.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ Icon, title, desc }) => (
            <div key={title} className="border border-gray-200 rounded-2xl p-6 hover:border-[#4AAFD6] hover:shadow-card-hover transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-[#4AAFD6]"
                style={{ background: '#EBF6FC' }}>
                <Icon className="w-6 h-6 group-hover:text-white transition-colors" style={{ color: '#4AAFD6' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#1E3A6E' }}>{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/paquetes" className="btn-dark inline-flex items-center gap-2">
            Ver todos los servicios <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Materia Prima ── */
const MATERIALS = [
  { Icon: Layers, name: 'Cartón biodegradable', desc: 'Principal material utilizado para la estructura de empaques.' },
  { Icon: Droplets, name: 'Tintas ecológicas', desc: 'Se utilizan para imprimir diseños y logotipos con menor impacto ambiental.' },
  { Icon: Shield, name: 'Adhesivos no tóxicos', desc: 'Adhesivo industrial que permite unir las piezas del empaque de manera segura.' },
  { Icon: Tag, name: 'Papel adhesivo', desc: 'Se utiliza para elaborar stickers personalizados que complementan la presentación.' },
  { Icon: FileText, name: 'Papel couche', desc: 'Material empleado para la elaboración de tarjetas de presentación de alta calidad.' },
  { Icon: Recycle, name: 'Cinta kraft biodegradable', desc: 'Elemento decorativo y de cierre 100% biodegradable para los empaques.' },
]

function MaterialsSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #080F24 0%, #0B1A3E 50%, #1E3A6E 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#7ECEF4' }}>
            Calidad Garantizada
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Materia Prima</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Utilizamos insumos de alta calidad y bajo impacto ambiental para garantizar la durabilidad y sostenibilidad de cada empaque.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {MATERIALS.map(({ Icon, name, desc }) => (
            <div key={name}
              className="rounded-xl p-5 text-center transition-colors duration-200 cursor-default border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(74,175,214,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}>
              <div className="flex justify-center mb-3">
                <Icon className="w-7 h-7" style={{ color: '#4AAFD6' }} />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/sostenibilidad" className="btn-primary inline-flex items-center gap-2">
            Ver política de sostenibilidad <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Por qué PACKIFY ── */
function WhyPackifySection() {
  const benefits = [
    { Icon: Package, title: 'Pedidos en bajos volúmenes', desc: 'Sin mínimos exagerados. Flexibilidad total para PYMES.' },
    { Icon: Leaf, title: 'Materiales 100 % ecoamigables', desc: 'Sin plástico convencional ni tecnopor.' },
    { Icon: Palette, title: 'Diseño alineado a tu marca', desc: 'Empaques que expresan tu identidad visual.' },
    { Icon: Zap, title: 'Soluciones para delivery', desc: 'Conservan temperatura y evitan derrames en tránsito.' },
  ]
  return (
    <section className="py-20" style={{ background: '#F0F5FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">¿Por qué PACKIFY?</p>
            <h2 className="section-title mb-6">La solución de empaque que tu negocio estaba buscando</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Combinamos diseño, producción, sostenibilidad y asesoría en una sola propuesta.
              No vendemos solo envases: creamos soluciones integrales de presentación para negocios
              gastronómicos que quieren crecer con identidad.
            </p>
            <Link to="/nosotros" className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3" style={{ color: '#4AAFD6' }}>
              Conoce más sobre nosotros <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#4AAFD6] transition-colors">
                <Icon className="w-6 h-6 mb-3" style={{ color: '#4AAFD6' }} />
                <h3 className="font-semibold text-sm mb-1" style={{ color: '#1E3A6E' }}>{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



/* ── CTA final ── */
function FinalCTA() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, #080F24 0%, #1E3A6E 100%)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Leaf className="w-12 h-12 mx-auto mb-6" style={{ color: '#4AAFD6' }} />
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Haz que tu empaque hable por tu marca.
        </h2>
        <p className="text-gray-300 text-xl mb-10 leading-relaxed">
          Agenda una asesoría gratuita y descubre cómo PACKIFY puede transformar la presentación,
          sostenibilidad y funcionalidad de tus empaques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/asesorias" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
            Agendar asesoría gratuita <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/contacto" className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2">
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}
