/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 93%)',
        'lvery-dark-blue-light': 'hsl(200, 15%, 8%)',
      }
    },
  },
  plugins: [],
}

