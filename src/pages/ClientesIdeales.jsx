// ClientesIdeales.jsx — Página de Clientes Ideales de PACKIFY
import { Link } from 'react-router-dom'
import {
  ArrowRight, MapPin, Users, Briefcase,
  UtensilsCrossed, Coffee, Star, Heart, Flame, Waves,
  Apple, Crown, Rocket, Truck, Zap, Building2,
} from 'lucide-react'

const CLIENT_TYPES = [
  { Icon: UtensilsCrossed, type: 'Restaurantes',                  desc: 'Establecimientos de almuerzo, cena y menús variados que necesitan empaques para llevar, delivery y presentación de platos.', needs: ['Cajas para menú', 'Delivery', 'Bolsas kraft'] },
  { Icon: Coffee,          type: 'Cafeterías',                    desc: 'Negocios de café, bebidas y snacks que buscan una presentación elegante y coherente con su identidad visual de marca.', needs: ['Vasos kraft', 'Bolsas', 'Stickers'] },
  { Icon: Star,            type: 'Pastelerías',                   desc: 'Tiendas de tortas, pasteles y productos artesanales que requieren empaques atractivos, resistentes y con ventana.', needs: ['Cajas de torta', 'Papel antigrasa', 'Diseño premium'] },
  { Icon: Heart,           type: 'Dulcerías',                     desc: 'Negocios de dulces, chocolates y golosinas artesanales con empaques personalizados para regalo, evento o venta.', needs: ['Cajas de regalo', 'Bolsas', 'Etiquetas kraft'] },
  { Icon: Flame,           type: 'Pollerías',                     desc: 'Negocios de pollo a la brasa y frituras que requieren empaques resistentes al calor, grasas y condiciones de delivery.', needs: ['Cajas para pollo', 'Papel antigrasa', 'Delivery'] },
  { Icon: Waves,           type: 'Cevicherías',                   desc: 'Restaurantes de comida marina que necesitan empaques seguros para alimentos fríos, caldos y salsas sin riesgo de derrame.', needs: ['Contenedores herméticos', 'Bandejas', 'Bolsas kraft'] },
  { Icon: Apple,           type: 'Comida saludable',              desc: 'Restaurantes y juguerías con imagen eco-friendly que buscan empaques que refuercen su propuesta sostenible y consciente.', needs: ['Empaques biodegradables', 'Diseño minimalista', 'Kraft'] },
  { Icon: Crown,           type: 'Marcas gourmet',               desc: 'Negocios de alta cocina y productos artesanales premium que necesitan empaques que reflejen exclusividad y distinción.', needs: ['Empaques premium', 'Diseño exclusivo', 'Etiquetas'] },
  { Icon: Rocket,          type: 'Emprendimientos gastronómicos', desc: 'Negocios en crecimiento que buscan establecer identidad desde el inicio con empaques profesionales sin grandes inversiones.', needs: ['Pedidos pequeños', 'Diseño asequible', 'Asesoría'] },
  { Icon: Truck,           type: 'Delivery / Dark kitchens',      desc: 'Negocios 100 % online que dependen del empaque para crear una buena primera impresión con su cliente final.', needs: ['Herméticos', 'Branding en empaque', 'Unboxing'] },
  { Icon: Zap,             type: 'Comida rápida',                 desc: 'Negocios de hamburguesas, tacos y street food que necesitan empaques resistentes, prácticos y con identidad propia.', needs: ['Cajas para burger', 'Papel antigrasa', 'Mangas'] },
  { Icon: Building2,       type: 'PYMES de alimentos',           desc: 'Empresas pequeñas y medianas del sector alimentos que quieren acceder a empaques personalizados sin mínimos exigentes.', needs: ['Pedidos flexibles', 'Diseño personalizado', 'Sostenible'] },
]

const DECISION_MAKER = [
  { label: 'Edad aproximada',        value: '25 a 55 años' },
  { label: 'Perfil',                 value: 'Dueño, gerente o administrador de negocio gastronómico' },
  { label: 'Nivel socioeconómico',   value: 'Medio, medio-alto y alto' },
  { label: 'Capacidad de inversión', value: 'Dispuesto a invertir en diseño, presentación y marketing' },
  { label: 'Motivación principal',   value: 'Diferenciarse, profesionalizarse y crecer con identidad' },
  { label: 'Canal de contacto',      value: 'WhatsApp, redes sociales, formulario web' },
]

const LOCATIONS = [
  { zone: 'Trujillo Centro',   desc: 'Restaurantes, cevicherías y negocios del centro histórico' },
  { zone: 'Víctor Larco',      desc: 'Cafeterías, pastelerías y marcas gastronómicas emergentes' },
  { zone: 'Huanchaco',         desc: 'Restaurantes de comida marina y negocios turísticos' },
  { zone: 'California',        desc: 'Emprendimientos y tiendas gourmet en urbanizaciones' },
  { zone: 'El Golf',           desc: 'Negocios premium y marcas de alta cocina' },
  { zone: 'Resto del Perú',    desc: 'Atención virtual y despacho por courier a nivel nacional' },
]

export default function ClientesIdeales() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #080F24 0%, #1E3A6E 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium mb-3" style={{ color: '#7ECEF4' }}>Inicio / Clientes Ideales</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Clientes ideales</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            PACKIFY está diseñado para negocios gastronómicos que quieren diferenciarse,
            cuidar el planeta y ofrecer una mejor experiencia a sus clientes.
          </p>
        </div>
      </section>

      {/* Frase destacada */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed italic" style={{ color: '#1E3A6E' }}>
            "Si tu producto llega al cliente en un empaque,
            ese empaque también comunica tu marca."
          </p>
          <div className="mt-5 w-16 h-1 mx-auto rounded-full" style={{ background: '#4AAFD6' }} />
        </div>
      </section>

      {/* Tipos de clientes — con íconos Lucide */}
      <section className="py-20" style={{ background: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">A quiénes servimos</p>
            <h2 className="section-title">Tipos de negocios que atendemos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_TYPES.map(({ Icon, type, desc, needs }) => (
              <div key={type} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#4AAFD6] hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#EBF6FC' }}>
                    <Icon className="w-5 h-5" style={{ color: '#4AAFD6' }} />
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: '#0B1A3E' }}>{type}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {needs.map(n => (
                    <span key={n} className="text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
                      style={{ color: '#1E3A6E', background: '#F0F5FA' }}>{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfil del decisor */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#EBF6FC' }}>
                  <Users className="w-6 h-6" style={{ color: '#4AAFD6' }} />
                </div>
                <div>
                  <p className="eyebrow">A quién le hablamos</p>
                  <h2 className="text-2xl font-bold" style={{ color: '#0B1A3E' }}>Perfil del decisor</h2>
                </div>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Nuestro cliente típico es quien toma decisiones en su negocio gastronómico.
                Alguien que valora la imagen de su marca, entiende que la presentación importa
                y busca diferenciarse sin hacer inversiones desproporcionadas.
              </p>
              <div className="space-y-3">
                {DECISION_MAKER.map(({ label, value }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-xl border border-gray-200">
                    <span className="text-xs font-semibold uppercase tracking-wide shrink-0 w-40" style={{ color: '#4AAFD6' }}>{label}</span>
                    <span className="text-gray-600 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop&q=80"
                alt="Emprendedor gastronómico"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #080F24, #1E3A6E)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5" style={{ color: '#7ECEF4' }} />
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#7ECEF4' }}>Dónde operamos</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Cobertura y alcance</h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">Con base en Trujillo y alcance nacional mediante atención virtual.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map(({ zone, desc }) => (
              <div key={zone} className="rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.12)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: '#4AAFD6' }} />
                  <h3 className="font-bold text-white">{zone}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-10 h-10 mx-auto mb-5" style={{ color: '#4AAFD6' }} />
          <h2 className="section-title mb-5">¿Tu negocio encaja con este perfil?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Contáctanos y diseñamos juntos el empaque ideal. Pedidos flexibles, sin mínimos exagerados y con asesoría incluida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/asesorias" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Solicitar asesoría gratuita <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/servicios" className="btn-outline px-8 py-4 text-base inline-flex items-center gap-2">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
