/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EE',
        'cream-dark': '#EDE9DF',
        emerald: {
          DEFAULT: '#1A4A3A',
          light: '#2D6A52',
          deep: '#0F2D22',
        },
        gold: {
          DEFAULT: '#B8962E',
          light: '#D4AF5A',
          pale: '#F0E0A0',
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          soft: '#3A3A3A',
        },
        'warm-gray': '#8A8478',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
