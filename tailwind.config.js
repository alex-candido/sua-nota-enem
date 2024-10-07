/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.pug',
    './views/**/*.pug',
    './node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: '#fbfbfb',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
