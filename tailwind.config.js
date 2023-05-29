/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'font-color': '#2d2e32',
      pink: '#D63384',
      harsh: '#767676'
    },
    boxShadow: {
      '3xl': '0 0 10px rgba(0,0,0,.1)'
    }
  },
  plugins: []
};
