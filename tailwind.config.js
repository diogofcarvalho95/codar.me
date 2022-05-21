const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
      'montserrat': ['"Montserrat"', 'ui-sans-serif']
    },
    extend: {
      fontSize: {
        '5xl': ['3rem', {
          lineHeight: '1.25',
        }]
      },
      colors: {
        gradientSky: ['#8876FE', '#73D0EE']
      },
    },
  },
  plugins: [],
}
