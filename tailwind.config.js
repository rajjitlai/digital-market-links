/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,jsx,js}"];
export const theme = {
  extend: {
    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: "0 auto",
        md: "0 auto",
        lg: "100%",
        xl: "100%",
        "2xl": "120%",
      }
    },
    colors: {
      primary: "#1da4ed",
      secondary: "#0091EA",
    }
  },
};
export const plugins = [];