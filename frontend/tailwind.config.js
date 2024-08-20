/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColore: "#0067FF",
      yellowColore: "#FEB60D",
      purpleColore: "#9771FF",
      irisBlueColore: "#181A1E",
      textColore: "#4E545F",
    },
    boxShadow: {
      panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    },
    extend: {},
  },
  plugins: [],
};
