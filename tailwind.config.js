const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#F7F6DC',
        white: '#FFFEFF',

        fontFamily: {
          sans: [...fontFamily.sans],
          heading: [...fontFamily.sans]
        }
      }
    },
    plugins: []
  }
}
