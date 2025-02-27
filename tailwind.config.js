/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "qbox-shadow": "rgba(99, 99, 99, 0.2) 0px 1px 1px 1px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "980px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
