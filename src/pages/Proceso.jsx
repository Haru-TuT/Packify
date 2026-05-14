// Proceso.jsx — Página de Proceso de trabajo de PACKIFY
import { Link } from 'react-router-dom'
import {
  ArrowRight, ClipboardList, Microscope, Layers, Palette,
  ShieldCheck, Factory, Award, Truck,
} from 'lucide-react'

const STEPS = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Recepción del requerimiento',
    desc: 'Recibimos tu solicitud por formulario, WhatsApp o correo. Registramos todos los datos de tu negocio, tipo de producto, canal de distribución y objetivos del empaque. Este es el punto de partida de nuestra colaboración.',
    duration: 'Día 1',
  },
  {
    icon: Microscope,
    num: '02',
    title: 'Diagnóstico del producto y necesidad',
    desc: 'Analizamos en detalle tu producto: temperatura, peso, volumen, fragilidad, riesgo de derrames y tipo de presentación requerida. Identificamos los desafíos específicos de tu empaque actual y los problemas a resolver.',
    duration: 'Días 1–2',
  },
  {
    icon: Layers,
    num: '03',
    title: 'Asesoría en material y formato',
    desc: 'Con base en el diagnóstico, recomendamos el material biodegradable más adecuado (kraft, bagazo, cartón, PLA) y el formato ideal (caja, bolsa, bandeja, envase). Explicamos ventajas, costos y diferencias entre opciones.',
    duration: 'Días 2–3',
  },
  {
    icon: Palette,
    num: '04',
    title: 'Propuesta de diseño personalizado',
    desc: 'Nuestro equipo de diseño crea una propuesta visual que integra tu logo, colores de marca, tipografía y mensajes clave. Presentamos la propuesta para tu revisión y aprobamos juntos el arte final antes de producir.',
    duration: 'Días 3–5',
  },
  {
    icon: ShieldCheck,
    num: '05',
    title: 'Validación de funcionalidad',
    desc: 'Antes de la producción en serie, validamos un prototipo o muestra de tu empaque: resistencia, cierre, presentación visual, comportamiento con el alimento y funcionalidad en condiciones reales de entrega.',
    duration: 'Días 5–7',
  },
  {
    icon: Factory,
    num: '06',
    title: 'Producción del empaque',
    desc: 'Con la muestra aprobada, iniciamos la producción de tu pedido. Utilizamos materiales certificados y trabajamos bajo procedimientos estandarizados para garantizar consistencia en cada unidad producida.',
    duration: 'Semana 2',
  },
  {
    icon: Award,
    num: '07',
    title: 'Control de calidad',
    desc: 'Realizamos una revisión integral del lote producido: resistencia estructural, verificación del diseño impreso, funcionalidad del cierre, seguridad para alimentos y presentación final. Solo aprobamos lo que cumpla el estándar.',
    duration: 'Semana 2–3',
  },
  {
    icon: Truck,
    num: '08',
    title: 'Entrega o despacho',
    desc: 'Coordinamos la entrega de tu pedido en Trujillo y zonas aledañas. Para clientes fuera de la región, gestionamos el despacho por courier. Entregamos con documentación completa y soporte posventa.',
    duration: 'Semana 3',
  },
]

const TIMELINE_SUMMARY = [
  { label: 'Diagnóstico y asesoría',  days: 'Días 1–3'   },
  { label: 'Diseño y aprobación',     days: 'Días 3–7'   },
  { label: 'Producción',              days: 'Semana 2'    },
  { label: 'Control de calidad',      days: 'Semana 2–3' },
  { label: 'Entrega',                 days: 'Semana 3'    },
]

export default function Proceso() {
  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(135deg, #080F24 0%, #1E3A6E 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium mb-3" style={{ color: '#7ECEF4' }}>
            Inicio / Proceso
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nuestro proceso de trabajo
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Un proceso ordenado, transparente y orientado a resultados. Desde el primer contacto
            hasta la entrega final de tu empaque personalizado.
          </p>
        </div>
      </section>

      {/* ── Línea de tiempo resumida (desktop) ── */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block relative">
            {/* Línea horizontal */}
            <div
              className="absolute top-7 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(to right, #4AAFD6, #1E3A6E)' }}
            />
            <div className="relative flex justify-between">
              {TIMELINE_SUMMARY.map(({ label, days }) => (
                <div key={label} className="flex flex-col items-center text-center max-w-[120px]">
                  <div
                    className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-xs mb-3 z-10 shadow-lg"
                    style={{ background: '#4AAFD6' }}
                  >
                    {days}
                  </div>
                  <span className="text-xs font-medium leading-tight" style={{ color: '#1E3A6E' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: lista compacta */}
          <div className="md:hidden flex flex-wrap gap-2 justify-center">
            {TIMELINE_SUMMARY.map(({ label, days }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm rounded-full px-4 py-2"
                style={{ background: '#EBF6FC', color: '#1E3A6E' }}
              >
                <span className="font-bold" style={{ color: '#4AAFD6' }}>{days}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pasos detallados ── */}
      <section className="py-10 pb-20" style={{ background: '#F0F5FA' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {STEPS.map(({ icon: Icon, num, title, desc, duration }, idx) => (
              <div
                key={num}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Columna número + ícono */}
                  <div
                    className="md:w-32 shrink-0 flex md:flex-col items-center justify-center gap-3 p-5 md:p-6"
                    style={{ background: idx % 2 === 0 ? '#EBF6FC' : '#F0F5FA' }}
                  >
                    <span
                      className="text-3xl font-extrabold leading-none"
                      style={{ color: '#4AAFD6' }}
                    >
                      {num}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'white' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#4AAFD6' }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white whitespace-nowrap"
                      style={{ background: '#1E3A6E' }}
                    >
                      {duration}
                    </span>
                  </div>
                  {/* Contenido */}
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#0B1A3E' }}>{title}</h3>
                    <p className="text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                  {/* Flecha de continuidad */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:flex items-center pr-6">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nota final + CTA ── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #080F24, #1E3A6E)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            ¿Listo para iniciar el proceso?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Empieza hoy. El primer paso es una conversación gratuita donde analizamos
            tu producto y te mostramos las mejores opciones de empaque para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/asesorias" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Iniciar asesoría gratuita
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
