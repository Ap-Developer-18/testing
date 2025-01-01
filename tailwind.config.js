/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "24px",
      },
      screens: {
        xxl: "1380px",
      },
      colors: {
        "orange": "#E67E22",
        "light-dark": "#4D4D4D",
        "light-pink": "#FFF7EF",
      },
      fontSize: {
        "custom-lg": "32px",
        "custom-xl": "40px",
        "custom-2xl": "60px",
        "custom-3xl": "96px",
      },
      lineHeight: {
        110: "110%",
        120: "120%",
        125: "125%",
        130: "130%",
        140: "140%",
        150: "150%",
      },
      boxShadow: {
        "custom": "0px -2px 29.9px 0px #E67E224D",
      },
    },
  },
  plugins: [],
}