// App.jsx — Enrutador principal de PACKIFY
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Header          from './components/Header'
import Footer          from './components/Footer'
import WhatsAppButton  from './components/WhatsAppButton'

import Home            from './pages/Home'
import Nosotros        from './pages/Nosotros'
import Servicios       from './pages/Servicios'
import Asesorias       from './pages/Asesorias'
import Sostenibilidad  from './pages/Sostenibilidad'
import Proceso         from './pages/Proceso'
import ClientesIdeales from './pages/ClientesIdeales'
import Contacto        from './pages/Contacto'

// Sube al inicio de la página cada vez que cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* Header sticky fijo en la parte superior */}
      <Header />

      {/* Contenido principal — cada ruta es una página independiente */}
      <main>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/nosotros"         element={<Nosotros />} />
          <Route path="/paquetes"         element={<Servicios />} />
          <Route path="/asesorias"        element={<Asesorias />} />
          <Route path="/sostenibilidad"   element={<Sostenibilidad />} />
          {/* <Route path="/proceso"          element={<Proceso />} /> */}
          {/* <Route path="/clientes-ideales" element={<ClientesIdeales />} /> */}
          <Route path="/contacto"         element={<Contacto />} />
        </Routes>
      </main>

      {/* Footer y botón flotante de WhatsApp */}
      <Footer />
      <WhatsAppButton />
    </>
  )
}
