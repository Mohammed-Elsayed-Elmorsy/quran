/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#143d59',
        secondary: '#f4b42a',
      }
    },
    plugins: [],
  }
}