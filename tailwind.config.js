/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(22, 65%, 57%)",
      darkBlack: "#101010",
      silver: "#F1F1F1",
      whiteSmoke: "#FAFAFA",
      lightOrange: "hsl(22, 75%, 50%)",
      white: "#FFFFFF",
      black: "hsl(0, 0%, 2%)",
    },
  },
  plugins: [],
};
