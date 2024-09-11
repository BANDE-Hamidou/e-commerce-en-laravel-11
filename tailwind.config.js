/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  class:"dark",
  theme: {
    extend: {
      colors: {
        primary:"#fea920",
        secondary: "#ed8900"
      },
      container:{
        center: true,
        padding:{
          default: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}

