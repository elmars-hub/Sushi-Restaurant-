/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "hsl(126, 69%, 54%)",
        backdrop: "#FAFAFA",
        backdropRed: "hsl(0, 92%, 60%)",
        backdropBlue: "hsl(126, 63%, 85%)",
        backdropYellow: "rgb(255, 230, 5)",
        backdropGray: "hsl(0, 0%, 94%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
