/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "white-bottom": "0px 0.2px 1px 0px rgba(255,255,255);",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
