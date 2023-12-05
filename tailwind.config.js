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
        pokecursor: "url(./img/icons/pokeball_color.svg), pointer",
        pokepointer: "url(./img/icons/pokeball_pointer.svg), pointer",
        poketext: "url(./img/icons/pokeball_text.svg), pointer",
      },
    },
  },
  plugins: [],
};
