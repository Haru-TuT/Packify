/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#0B1A3E',
          navy:    '#1E3A6E',
          blue:    '#2B6CB0',
          cyan:    '#4AAFD6',
          light:   '#7ECEF4',
          pale:    '#EBF6FC',
          eco:     '#2D9C62',
          'eco-light': '#4CAF7D',
          gray:    '#F0F5FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(14,27,62,0.08)',
        'card-hover': '0 8px 32px 0 rgba(14,27,62,0.14)',
      },
    },
  },
  plugins: [],
}
