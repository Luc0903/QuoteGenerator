/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray__medium: '#4F4F4F',
        main__beige: '#F7DF94',
        ligth__gray: '#828282',
        dark__gray: '#333333',
      },
    },
  },
  plugins: [],
};
