// Contacto.jsx — Página de Contacto de PACKIFY
import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Diseño de empaques personalizados',
  'Fabricación de empaques biodegradables',
  'Empaques para delivery',
  'Cajas para alimentos calientes',
  'Envases para pastelería y panadería',
  'Bolsas kraft personalizadas',
  'Etiquetas y branding',
  'Empaques para ediciones limitadas',
  'Asesoría en materiales',
  'Control de calidad',
  'Otro / No estoy seguro',
]

const CONTACT_DATA = [
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'packifyperu@gmail.com',
    sub: 'Respondemos en menos de 24 horas',
  },
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+51 934831708',
    sub: 'Lun–Sáb, 8 am – 6 pm',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Husares de Junín 1344',
    sub: 'La Libertad, Perú',
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lun – Sáb: 8:00 am – 6:00 pm',
    sub: 'Atención comercial 24 / 7 por WhatsApp',
  },
]

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '', empresa: '', telefono: '', correo: '',
    tipoNegocio: '', servicio: '', cantidad: '', mensaje: '',
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
            Inicio / Contacto
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Escríbenos y te ayudamos a diseñar el empaque ideal para tu negocio gastronómico.
            Sin compromisos. Sin mínimos exagerados.
          </p>
        </div>
      </section>

      {/* ── Contenido principal ── */}
      <section className="py-20" style={{ background: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Columna izquierda — Datos de contacto */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="eyebrow mb-2">Información de contacto</p>
                <h2 className="text-2xl font-bold" style={{ color: '#0B1A3E' }}>
                  Estamos aquí para ayudarte
                </h2>
                <p className="text-gray-500 mt-3 leading-relaxed">
                  Contáctanos por el medio que prefieras. Te respondemos rápido y
                  sin burocracia.
                </p>
              </div>

              {/* Cards de contacto */}
              {CONTACT_DATA.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: '#EBF6FC' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#4AAFD6' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#4AAFD6' }}>
                      {label}
                    </p>
                    <p className="font-semibold text-sm" style={{ color: '#0B1A3E' }}>{value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}

              {/* Botón de WhatsApp */}
              <a
                href="https://wa.me/51999888777?text=Hola%2C%20quiero%20información%20sobre%20empaques%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-base transition-all shadow-lg hover:scale-[1.02]"
                style={{ background: '#25D366' }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chatear por WhatsApp
              </a>

              {/* Mapa Real */}
              <div className="w-full rounded-2xl overflow-hidden shadow-card border border-gray-100">
                <img 
                  src="/Mapa.png" 
                  alt="Ubicación PACKIFY" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Columna derecha — Formulario */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center bg-white shadow-xl"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-5" style={{ color: '#2D9C62' }} />
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0B1A3E' }}>
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-gray-500 text-lg max-w-md">
                    Gracias por contactarnos. Un asesor de PACKIFY revisará tu solicitud
                    y se comunicará contigo en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border"
                  style={{ borderColor: '#E8EDF5' }}
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#0B1A3E' }}>
                    Envíanos un mensaje
                  </h3>
                  <p className="text-gray-500 text-sm mb-8">
                    Completa el formulario y te contactamos en menos de 24 horas.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Nombre completo *</label>
                      <input
                        type="text" name="nombre" value={formData.nombre}
                        onChange={handleChange} required
                        placeholder="Ej. María González"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Empresa / Negocio</label>
                      <input
                        type="text" name="empresa" value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ej. Pastelería El Rincón Dulce"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Teléfono / WhatsApp *</label>
                      <input
                        type="tel" name="telefono" value={formData.telefono}
                        onChange={handleChange} required
                        placeholder="+51 999 000 000"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Correo electrónico *</label>
                      <input
                        type="email" name="correo" value={formData.correo}
                        onChange={handleChange} required
                        placeholder="correo@negocio.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Tipo de negocio</label>
                      <select
                        name="tipoNegocio" value={formData.tipoNegocio}
                        onChange={handleChange} className="form-input"
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
                        <option>Food truck</option>
                        <option>Emprendimiento gastronómico</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Servicio de interés</label>
                      <select
                        name="servicio" value={formData.servicio}
                        onChange={handleChange} className="form-input"
                      >
                        <option value="">Selecciona un servicio</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="form-label">Cantidad aproximada requerida</label>
                      <select
                        name="cantidad" value={formData.cantidad}
                        onChange={handleChange} className="form-input"
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
                      <label className="form-label">Mensaje *</label>
                      <textarea
                        name="mensaje" value={formData.mensaje}
                        onChange={handleChange} required rows={5}
                        placeholder="Cuéntanos sobre tu negocio, qué necesitas empacar, si tienes servicio de delivery y cualquier detalle relevante..."
                        className="form-input resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full mt-6 py-4 text-base justify-center"
                  >
                    Enviar mensaje
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-4">
                    Tu información es confidencial. No compartimos tus datos con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #080F24, #1E3A6E)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Prefieres una respuesta inmediata?
          </h2>
          <p className="text-gray-300 mb-6">
            Escríbenos directamente por WhatsApp y un asesor de PACKIFY te responde
            en minutos durante horario comercial.
          </p>
          <a
            href="https://wa.me/51999888777?text=Hola%20PACKIFY%2C%20quiero%20información%20sobre%20empaques%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold text-white px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg"
            style={{ background: '#25D366' }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Abrir WhatsApp ahora
          </a>
        </div>
      </section>
    </div>
  )
}
