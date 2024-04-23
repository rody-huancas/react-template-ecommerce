/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8f7f4",
        secondary: "#f07168",
        tertiary: "#222222",
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryWhite: "#eeeeee",
      },
    },
  },
  plugins: [],
};
