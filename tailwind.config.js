/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'quantico':['Quantico','sans-serif'],
        'handjet':['Hanjet','cursive'],
      }
    },
  },
  plugins: [],
}

