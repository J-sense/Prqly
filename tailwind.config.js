/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poly: ["Poly", "serif"],
        popins: ['"Poppins"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#20e0a1", // main
        },
        secondary: {
          DEFAULT: "#304F71", // button color
        },
      },
    },
  },
  plugins: [],
};
