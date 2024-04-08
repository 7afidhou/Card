/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        background:"#131313",
        primary:"#1e1e1e",
        secondary:"#c4f82a"
      }
      ,
      fontFamily:{
        Gabarito:['Gabarito','sans-serif']
      }
    },
  },
  plugins: [],
}

