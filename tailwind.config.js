/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#143d59',
        primarylighter: '#f4b42ade',
        secondary: '#f4b42a',
        tertiary: '#f4b42a48',
        quaternary: '#f4b42a34',
        light: '#e4e4e4',
        dark: '#0D1117 ',
        lighter: '#161B22 ',
        graymy: 'rgb(79 81 84)',
        textDark: '#c1c1c1',
        afterdark: '#000000b3',
        afterlight: '#00000066',
      }

    },
    plugins: [],
  }
}