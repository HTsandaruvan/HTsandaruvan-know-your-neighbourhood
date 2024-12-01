/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C53678",
        secondary: "#008080",
        color1: "#FF5841",
        color2: "#EEEEEE",
        color3: "#34282C",
        color4: "#463E3F",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        poppins: ["Poppins"],
      },
      
    },
  },
  plugins: [],
};
