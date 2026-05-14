// Asesorias.jsx — Página de Asesorías especializadas de PACKIFY
import { useState } from 'react'
import { ArrowRight, CheckCircle, ClipboardList, Microscope, Layers, Palette, ShieldCheck, Package } from 'lucide-react'

const ADVISORY_AREAS = [
  {
    icon: ClipboardList,
    title: 'Diagnóstico del empaque actual',
    desc: 'Analizamos los empaques que usas actualmente: materiales, funcionalidad, presentación, costos y nivel de sostenibilidad. Identificamos mejoras concretas.',
  },
  {
    icon: Layers,
    title: 'Recomendación de materiales biodegradables',
    desc: 'Te orientamos para elegir el material más adecuado según tu producto, presupuesto, canal de venta e identidad de marca. Sin compromiso con plásticos o tecnopor.',
  },
  {
    icon: Palette,
    title: 'Mejora de presentación comercial',
    desc: 'Revisamos cómo se ve tu producto cuando llega al cliente y proponemos mejoras en diseño, color, mensaje y formato para que tu empaque comunique más.',
  },
  {
    icon: ShieldCheck,
    title: 'Reducción de daños en delivery',
    desc: 'Evaluamos los riesgos de derrames, pérdida de temperatura y daño estructural en tránsito. Proponemos soluciones funcionales y herméticas para cada caso.',
  },
  {
    icon: Microscope,
    title: 'Optimización de costos de embalaje',
    desc: 'Analizamos tu estructura de costos actual y te mostramos cómo acceder a empaques de mayor calidad y menor impacto ambiental sin incrementar excesivamente tu presupuesto.',
  },
  {
    icon: Package,
    title: 'Personalización en bajos volúmenes',
    desc: 'Te ayudamos a acceder a empaques con identidad propia sin necesidad de realizar pedidos masivos que inmovilicen capital innecesariamente en tu negocio.',
  },
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Evaluamos tu producto',
    desc: 'Analizamos qué tipo de alimento tienes, cómo se sirve, si hay servicio de delivery y qué canal de venta utilizas.',
  },
  {
    num: '02',
    title: 'Identificamos riesgos y necesidades',
    desc: 'Detectamos los puntos débiles del empaque actual: derrames, pérdida de temperatura, mala presentación o falta de identidad de marca.',
  },
  {
    num: '03',
    title: 'Definimos material y formato ideal',
    desc: 'Seleccionamos el material biodegradable más adecuado y el formato de empaque (caja, bolsa, bandeja, envase) que mejor se adapta a tu producto.',
  },
  {
    num: '04',
    title: 'Diseñamos una propuesta visual',
    desc: 'Nuestro equipo de diseño desarrolla una propuesta gráfica personalizada con los colores, tipografía e identidad de tu marca gastronómica.',
  },
  {
    num: '05',
    title: 'Validamos resistencia y funcionalidad',
    desc: 'Antes de producir, validamos que el empaque sea resistente, funcional, seguro para alimentos y esté listo para su uso real en delivery o local.',
  },
  {
    num: '06',
    title: 'Te entregamos una solución lista',
    desc: 'Recibes una solución completa de empaque: material definido, diseño aprobado, especificaciones técnicas y presupuesto final transparente.',
  },
]

const ADVISORY_CONTEXTS = [
  'Tipo de producto y temperatura',
  'Canal de venta (local, delivery, evento)',
  'Presupuesto disponible',
  'Identidad visual y colores de marca',
  'Necesidad logística y volumen',
  'Tipo y frecuencia del delivery',
  'Riesgo de derrames o daño',
  'Presentación comercial objetivo',
  'Alternativas para reemplazar plástico',
  'Mínimos de producción accesibles',
]

export default function Asesorias() {
  const [formData, setFormData] = useState({
    nombre: '', empresa: '', telefono: '', correo: '',
    tipoNegocio: '', tipoProducto: '', cantidad: '', mensaje: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(135deg, #080F24 0%, #1E3A6E 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium mb-3" style={{ color: '#7ECEF4' }}>
            Inicio / Asesorías
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Asesoría especializada en empaques sostenibles
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Ayudamos a cada negocio gastronómico a elegir el mejor material, tamaño, formato, diseño
            y mensaje de empaque según su producto, canal de venta y presupuesto.
          </p>
        </div>
      </section>

      {/* ── Qué incluye la asesoría ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="eyebrow mb-3">Por qué la asesoría importa</p>
              <h2 className="section-title mb-6">
                El empaque correcto marca la diferencia en tu negocio
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Un empaque mal elegido puede afectar la calidad de tu producto, deteriorar tu imagen
                de marca y generarte pérdidas en cada pedido de delivery. En PACKIFY te acompañamos
                para tomar la mejor decisión desde el inicio.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Nuestra asesoría evalúa cada variable de tu negocio para que el empaque que elijas
                sea funcional, sostenible, económico y completamente alineado a tu identidad de marca.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADVISORY_CONTEXTS.map((ctx) => (
                  <div key={ctx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#4AAFD6' }} />
                    {ctx}
                  </div>
                ))}
              </div>
            </div>

            {/* Áreas de asesoría */}
            <div className="space-y-4">
              {ADVISORY_AREAS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-2xl border transition-all duration-200 hover:border-[#4AAFD6] hover:shadow-card"
                  style={{ borderColor: '#E8EDF5' }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#EBF6FC' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#4AAFD6' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#1E3A6E' }}>{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proceso de asesoría paso a paso ── */}
      <section className="py-20" style={{ background: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Cómo trabajamos</p>
            <h2 className="section-title">Nuestro proceso de asesoría</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
              Un proceso claro, ordenado y transparente desde el primer contacto hasta la solución final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow relative">
                <div
                  className="text-5xl font-extrabold mb-4 leading-none"
                  style={{ color: '#EBF6FC' }}
                >
                  {num}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#0B1A3E' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulario de asesoría ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Empieza hoy</p>
            <h2 className="section-title">Agenda tu asesoría gratuita</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Completa el formulario y un asesor de PACKIFY se comunicará contigo en menos de 24 horas.
            </p>
          </div>

          {sent ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: '#EBF6FC' }}
            >
              <CheckCircle className="w-14 h-14 mx-auto mb-5" style={{ color: '#2D9C62' }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0B1A3E' }}>
                ¡Solicitud recibida!
              </h3>
              <p className="text-gray-600 text-lg">
                Gracias por contactarnos. Un asesor de PACKIFY se comunicará contigo
                en las próximas 24 horas para coordinar tu asesoría gratuita.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border"
              style={{ borderColor: '#E8EDF5' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Carlos Rodríguez"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Nombre de tu empresa / negocio *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Café La Molina"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+51 999 000 000"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Correo electrónico *</label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    placeholder="correo@negocio.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Tipo de negocio</label>
                  <select
                    name="tipoNegocio"
                    value={formData.tipoNegocio}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Restaurante</option>
                    <option>Cafetería</option>
                    <option>Pastelería / Panadería</option>
                    <option>Pollería</option>
                    <option>Cevichería</option>
                    <option>Dulcería</option>
                    <option>Delivery / Dark kitchen</option>
                    <option>Marca de alimentos</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Tipo de producto a empacar</label>
                  <input
                    type="text"
                    name="tipoProducto"
                    value={formData.tipoProducto}
                    onChange={handleChange}
                    placeholder="Ej. tortas, almuerzos, café"
                    className="form-input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Cantidad aproximada requerida</label>
                  <select
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Selecciona un rango</option>
                    <option>Menos de 100 unidades</option>
                    <option>100 – 500 unidades</option>
                    <option>500 – 1,000 unidades</option>
                    <option>1,000 – 5,000 unidades</option>
                    <option>Más de 5,000 unidades</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Cuéntanos más sobre tu necesidad</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe brevemente tu producto, el uso del empaque y cualquier requerimiento especial..."
                    className="form-input resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-6 py-4 text-base justify-center"
              >
                Enviar solicitud de asesoría gratuita
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-gray-400 text-xs mt-4">
                Tu información es confidencial. No compartimos tus datos con terceros.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
