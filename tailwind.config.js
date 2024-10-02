/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.pug', './views/**/*.pug'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'night'],
  },
  plugins: [require('daisyui')],
};
