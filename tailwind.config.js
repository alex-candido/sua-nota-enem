/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.pug',
    './views/**/*.pug',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        body: '#fbfbfb',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
