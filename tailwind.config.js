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
        "xl" : "1440px",
      },
    extend: {
      screens:{
        "ssm" : "320px",
      },
      colors:{
        light: "#f5f5f5",
        dark : "#1b1b1b",
        lightgrey: "#e6e4e4"
      },
    },
  },
  plugins: [],
}

