/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#1a3a2a',
        'verde-medio': '#2d5a40',
        'verde-claro': '#4a8c62',
        'dorado': '#c9a84c',
        'dorado-claro': '#e8c96a',
        'crema': '#f5f0e8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
