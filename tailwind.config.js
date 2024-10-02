/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.pug', './views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        body: '#fbfbfb',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'night'],
  },
  plugins: [require('daisyui')],
};
