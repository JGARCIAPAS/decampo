/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E0001A",
        dark_gray: "#7C808C",
        cookie_gray: "#333333",
        footer_light_gray: "#DFE0E2",
      },
      fontFamily: {
        sanamedium: ["sana-medium"],
        thraex: ["thraex_sansregular"],
      },
      cursor: {
        pokecursor: "url(./public/img/icons/pokeball_color.svg), pointer",
        pokepointer: "url(./public/img/icons/pokeball_pointer.svg), pointer",
        poketext: "url(./public/img/icons/pokeball_text.svg), pointer",
      },
    },
  },
  plugins: [],
};
