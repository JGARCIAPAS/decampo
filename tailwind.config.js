/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E0001A",
        dark_gray: "#7C808C",
        cookie_gray: "#333333",
      },
      fontFamily: {
        sanabook: ["sana-book-regular"],
        sanaregular: ["sana-regular"],
        sanablackregular: ["sana-black-regular"],
        sanablackitalic: ["sana-black-italic"],
        sanabolditalic: ["sana-bold-italic"],
        sanamedium: ["sana-medium"],
        sanamediumitalic: ["sana-medium-italic"],
      },
    },
  },
  plugins: [],
};
