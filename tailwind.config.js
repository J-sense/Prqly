/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Source Code Pro", "monospace"],
        ui: ["Source Sans 3", "sans-serif"],
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
