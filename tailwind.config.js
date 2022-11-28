// const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/*.{tsx,js,jsx,ts}',
    './pages/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'full_img': "url('/image/hero.jpg')",
      },
      brightness:{
        25:'.70',
      }
    }
  },
  plugins: [],
}
