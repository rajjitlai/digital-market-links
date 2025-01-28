/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbfbfb",
        secondary: "#000000",
        mainDim: "#0393e0",
        main: "#1da4ed",
      }      
    },
  },
};
