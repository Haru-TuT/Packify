# PACKIFY — Sitio Web Demo Institucional

Demo web profesional multipágina para PACKIFY, empresa ficticia de empaques biodegradables
personalizados para negocios gastronómicos. Desarrollada con React + Vite + Tailwind CSS.

---

## Tecnología utilizada

- **React 18** — Biblioteca de interfaz de usuario
- **Vite** — Bundler y servidor de desarrollo rápido
- **React Router 6** — Rutas independientes por página
- **Tailwind CSS** — Estilos modernos y responsivos
- **Lucide React** — Íconos modernos

---

## Requisitos previos

Necesitas tener **Node.js** instalado en tu computadora.

### Instalar Node.js (si no lo tienes):

1. Ve a https://nodejs.org
2. Descarga la versión **LTS** (recomendada)
3. Instala el paquete descargado
4. Verifica la instalación abriendo la terminal y escribiendo:
   ```
   node --version
   npm --version
   ```

---

## Cómo correr el proyecto

### Paso 1 — Abre la terminal en la carpeta del proyecto

```bash
cd "Desktop/SITIO WEB/packify-web"
```

### Paso 2 — Instala las dependencias

```bash
npm install
```

(Solo necesitas hacerlo la primera vez)

### Paso 3 — Inicia el servidor de desarrollo

```bash
npm run dev
```

### Paso 4 — Abre el navegador

Ve a: **http://localhost:5173**

---

## Cómo agregar el logo real

1. Copia tu archivo de logo (PNG con fondo transparente recomendado)
2. Renómbralo: `packify-logo.png`
3. Pégalo en la carpeta: `packify-web/public/`
4. El logo aparecerá automáticamente en el header y footer

> Si no existe el archivo, la web muestra automáticamente el texto "PACKIFY" como fallback.

---

## Cómo agregar fotos del equipo

En el archivo `src/pages/Nosotros.jsx`, en el arreglo `TEAM`, reemplaza
el valor del campo `img` de cada integrante con la ruta de la foto real:

```jsx
img: '/fotos/enrrique.jpg',   // coloca la foto en: public/fotos/
```

---

## Estructura de páginas

| Página               | Ruta               | Archivo                          |
|----------------------|--------------------|----------------------------------|
| Inicio               | `/`                | `src/pages/Home.jsx`             |
| Nosotros             | `/nosotros`        | `src/pages/Nosotros.jsx`         |
| Servicios            | `/servicios`       | `src/pages/Servicios.jsx`        |
| Asesorías            | `/asesorias`       | `src/pages/Asesorias.jsx`        |
| Sostenibilidad       | `/sostenibilidad`  | `src/pages/Sostenibilidad.jsx`   |
| Proceso              | `/proceso`         | `src/pages/Proceso.jsx`          |
| Clientes Ideales     | `/clientes-ideales`| `src/pages/ClientesIdeales.jsx`  |
| Contacto             | `/contacto`        | `src/pages/Contacto.jsx`         |

---

## Estructura de componentes

| Componente        | Archivo                              | Descripción                       |
|-------------------|--------------------------------------|-----------------------------------|
| Header sticky     | `src/components/Header.jsx`          | Navegación fija con hamburguesa   |
| Footer completo   | `src/components/Footer.jsx`          | Pie de página con todos los links |
| Botón WhatsApp    | `src/components/WhatsAppButton.jsx`  | Botón flotante verde              |

---

## Paleta de colores de marca

| Color         | Hex       | Uso                          |
|---------------|-----------|------------------------------|
| Navy oscuro   | `#0B1A3E` | Fondo hero, header, footer   |
| Navy medio    | `#1E3A6E` | Textos, secciones oscuras    |
| Cyan PACKIFY  | `#4AAFD6` | Acentos, botones, íconos     |
| Cyan claro    | `#7ECEF4` | Textos en fondo oscuro       |
| Gris suave    | `#F0F5FA` | Fondo de secciones alternas  |
| Verde eco     | `#2D9C62` | Elementos de sostenibilidad  |

---

## Construir para producción

```bash
npm run build
```

Los archivos listos para subir al servidor quedarán en la carpeta `dist/`.

---

> **Nota:** Este proyecto es una demo académica desarrollada con fines demostrativos.
> Los textos, datos, estadísticas y certificaciones son ficticios.
> © 2026 PACKIFY
# Packify
