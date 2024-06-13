/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFC100",
          50: "#F6EEE3", //background color
          100: "#FDDE55",
          200: "#F3CA52",
        },
        blue: {
          DEFAULT: "#10439F",
        },
        red: {
          DEFAULT: "#FC4100",
        },
        white: {
          DEFAULT: "#f1f1f1",
          50: "#ffffff",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          DEFAULT: "#524C42",
          100: "#CDCDE0",
          200: "#C7B7A3",
        },
      },
    },
  },
  plugins: [],
};
