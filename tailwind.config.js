/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],

  theme: {
    screens: {
      sm: '574px',
      md: '768px',
      lg: '1024px',
      xl: '1230px'
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          lg: '15px',
        },

      },
      colors: {
        "Neutral-Black": "#121617",
        "Base-100": "#F6F8F8",
        "Base-300": "#C5CFD3",
        "Base-400": "#A9B8BC",
        "Base-600": "#6B848A",
        "Base-800": "#47585C",
        "Base-900": "#3C4A4E",
        "blue-500": "#479CFF",
      },
      fontFamily: {
        'zarid': ['zarid', 'sans-serif'],
        'BukraWide': ['BukraWide', 'sans-serif'],
      },
      gap: {
        '11': '2.75rem',
        '18': '4.5rem',
      },
      boxShadow: {
        "services-shad": "-7px 50px 60px 0px rgba(7, 95, 90, 0.10)",
        "testimonials-shad": "-60px 40px 130px 0px rgba(71, 88, 92, 0.12)"
      },
      backgroundImage: {
        "herograd": "linear-gradient(180deg, #596D73 48.18%, rgba(89, 109, 115, 0.00) 99.99%);"
      },
    }
  },
  plugins: [],
}

