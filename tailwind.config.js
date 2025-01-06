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
        tertiary: '#f4b42a48',
        quaternary: '#f4b42a34',
        light: '#f1f1f1',
      }
    },
    plugins: [],
  }
}