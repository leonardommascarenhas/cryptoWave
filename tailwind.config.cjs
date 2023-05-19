/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'dropdown': '0 5px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 255, 0.5)'
      },
      colors: {
        dark: {
          '500': '#323546',
          '600': '#222430',
          '650': '#171924',
          '700': '#1c1c1c',
          '800': '#17171a'
        },
      },
      gridTemplateAreas: {
        'headerDesktop': [
          'headerBar',
          'headerNav'
        ]
      },
      gridTemplateRows: {
        'headerDesktop': '6fr 1fr'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        rightToLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        leftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
   
      },
      animation: {
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
