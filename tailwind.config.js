/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        orchid: "#AD1FEA",
        blue: "#4661E6",
        lightblue: "#CFD7FF",
        navy: "#373F68",
        lightnavy: "#3A4374",
        bluegray: "#F2F4FF",
        lightgray: "#F7F8FD",
        gray: "#647196",
        melon: "#F49F85",
        cyan: "#62BCFA",
      },
      screens: {},
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
