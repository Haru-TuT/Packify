// Sostenibilidad.jsx — Página de Sostenibilidad y Calidad de PACKIFY
import { Link } from 'react-router-dom'
import {
  Leaf, ArrowRight, CheckCircle, RefreshCw, ShieldCheck, FileCheck,
  AlertCircle, Wheat, Package, Layers, Recycle, Droplets, Globe, Sprout,
  Ban, Users, Ruler,
} from 'lucide-react'

const MATERIALS = [
  { Icon: Layers, name: 'Cartón biodegradable', origin: 'Fibra vegetal', desc: 'Principal material utilizado para la estructura de nuestros empaques, ofreciendo rigidez y protección sostenible.', props: ['Biodegradable', 'Estructural', 'Resistente'] },
  { Icon: Droplets, name: 'Tintas ecológicas', origin: 'Pigmentos naturales', desc: 'Se utilizan para imprimir diseños, logotipos y elementos gráficos, generando un menor impacto ambiental.', props: ['Ecológicas', 'Bajo impacto', 'Sin solventes'] },
  { Icon: ShieldCheck, name: 'Adhesivos industriales no tóxicos', origin: 'Componentes seguros', desc: 'Permite unir las piezas del empaque de manera segura y sin residuos tóxicos para el consumidor.', props: ['No tóxico', 'Seguro', 'Alta adherencia'] },
  { Icon: Package, name: 'Papel adhesivo', origin: 'Papel técnico', desc: 'Se utiliza para elaborar stickers personalizados que complementan y resaltan la presentación de cada empaque.', props: ['Personalizado', 'Funcional', 'Atractivo'] },
  { Icon: FileCheck, name: 'Papel couche', origin: 'Papel recubierto', desc: 'Material de alta calidad empleado para la elaboración de tarjetas de presentación y elementos corporativos.', props: ['Alta calidad', 'Elegante', 'Profesional'] },
  { Icon: RefreshCw, name: 'Cinta craft biodegradable', origin: 'Papel kraft', desc: 'Se utiliza como elemento decorativo y de cierre seguro de los empaques, manteniendo la línea ecológica.', props: ['Biodegradable', 'Cierre seguro', 'Estético'] },
]



const COMMITMENTS = [
  { Icon: Ban, text: 'Eliminación progresiva del plástico de un solo uso' },
  { Icon: Recycle, text: 'Uso prioritario de materiales reciclables y compostables' },
  { Icon: Leaf, text: 'Promoción de la economía circular en el embalaje gastronómico' },
  { Icon: Sprout, text: 'Reducción del uso de tecnopor en el sector alimentario' },
  { Icon: Ruler, text: 'Optimización del tamaño y peso del empaque para reducir residuos' },
  { Icon: Users, text: 'Trabajo con proveedores comprometidos con prácticas sostenibles' },
]

export default function Sostenibilidad() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #0B2918 0%, #0B1A3E 40%, #1E3A6E 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium mb-3" style={{ color: '#7ECEF4' }}>Inicio / Sostenibilidad y Calidad</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Sostenibilidad y Calidad</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Nuestro compromiso con el medio ambiente y la calidad de cada empaque está en el centro de cada decisión que tomamos.
          </p>
        </div>
      </section>

      {/* Compromiso ambiental */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-3">Nuestro compromiso</p>
              <h2 className="section-title mb-6">Un empaque sostenible no es una opción; es una responsabilidad</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>En PACKIFY creemos que el sector gastronómico puede y debe liderar la transición hacia empaques más responsables. El plástico de un solo uso y el tecnopor son materiales del pasado: contaminantes y cada vez más rechazados por los propios consumidores.</p>
                <p>Por eso, diseñamos cada solución con materiales que reducen significativamente el impacto ambiental sin sacrificar funcionalidad, presentación ni costo.</p>
              </div>
              {/* Compromisos — con íconos */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMMITMENTS.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 border border-gray-200 rounded-xl p-3">
                    <Icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4AAFD6' }} />
                    <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/Empaques 2.png"
                alt="Sostenibilidad Packify"
                className="w-full h-auto min-h-[300px] object-cover rounded-2xl shadow-xl border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Materiales */}
      <section className="py-20" style={{ background: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Materiales ecoamigables</p>
            <h2 className="section-title">Materiales que usamos</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Cada material es seleccionado por su impacto ambiental, funcionalidad y compatibilidad con la personalización de marca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATERIALS.map(({ Icon, name, origin, desc, props }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#4AAFD6] hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 flex flex-col">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: '#EBF6FC' }}>
                  <Icon className="w-6 h-6" style={{ color: '#4AAFD6' }} />
                </div>
                <h3 className="font-bold text-lg mb-0.5" style={{ color: '#0B1A3E' }}>{name}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: '#4AAFD6' }}>{origin}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {props.map(p => (
                    <span key={p} className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-[#4AAFD6]"
                      style={{ color: '#1E3A6E', background: '#EBF6FC' }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-10 h-10 mx-auto mb-5" style={{ color: '#2D9C62' }} />
          <h2 className="section-title mb-5">Cambia tus empaques, reduce tu huella</h2>
          <p className="text-gray-500 text-lg mb-8">
            Contáctanos y te ayudamos a hacer la transición hacia empaques biodegradables.
          </p>
          <Link to="/asesorias" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
            Quiero empaques sostenibles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
