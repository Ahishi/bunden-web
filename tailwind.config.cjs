/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,svelte}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        'margin-blue': '#53b7e0',
        dark: '#383838',
        light: '#e3e3e3',
        text: {
          DEFAULT: '#2e2e2e',
          light: '#d2d2d2',
        },
        'bunden-dark': {
          red: '#ff6663',
          orange: '#feb144',
          yellow: '#fdfd97',
          green: '#9ee09e',
          blue: '#9ec1cf',
          lilac: '#cc99c9',
        },
        'bunden-light': {
          red: '#CC514F',
          orange: '#CB8D36',
          yellow: '#CACA78',
          green: '#7EB37E',
          blue: '#7E9AA5',
          lilac: '#A37AA0',
        }
      }
    },
  },
  plugins: [],
}
