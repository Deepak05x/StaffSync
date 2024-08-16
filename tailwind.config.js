/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
        "sm" : "425px",
        "md" : "768px",
        "lg" : "1024px",
        "xl" : "1280px",
        "2xl" : "1440px",
      },
    extend: {
      screens:{
        "ssm" : "320px",
      },
      colors:{
        light: "white",
        dark : "#1b1b1b",
        lightgrey: "#e6e4e4",
        lightblack: "#57636c"
      },
    },
  },
  plugins: [],
}

