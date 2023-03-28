
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'headerDesktop' : [
          'headerBar',
          'headerNav'
        ]
      },
      gridTemplateRows: {
        'headerDesktop': '6fr 1fr'
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
      keyframes:{
      rightToLeft: {
          '0%': {transform: 'translateX(0)' },
          '100%': {transform: 'translateX(-100%)' },
        },
        leftToRight: {
          '0%': {transform: 'translateX(-100%)' },
          '100%': {transform: 'translateX(0)' },
        },
      },
      animation:{
        leftRight: 'leftToRight 0.4s ease-in-out',
        rightLeft: 'rightToLeft 0.4s ease-in-out'
      }
    },
  },
  plugins: [
   require("tailwindcss-animate"),
   require('@savvywombat/tailwindcss-grid-areas')
  ],
}