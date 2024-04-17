/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bodyBG': "url('./src/assets/body-bg.svg')",
      },
      fontFamily: {
        'QSerif': ['Quattrocento'],
        'QSanSerif': ['Quattrocento Sans']
      },
      colors: {
        'primary': '#ad4040',
        'secondary': '#064c1a'
      }
    },
  },
  plugins: [],
}