/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],

  theme: {
    extend: {
      colors: {
        gold: '#DAA520',
        darkGrey: '#2C2C2C',
        navy: '#001F3F',
        silver: '#C0C0C0',
        emerald: '#0C6657',
        ivory: '#FFFFF0',
        charcoal: '#36454F',
        roseGold: '#B76E79',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
