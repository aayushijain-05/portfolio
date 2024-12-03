/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        changa: ["Changa One", "Impact", "sans-serif"],
        droid: ["Droid Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        concert: ["Concert One", "sans-serif"],
        monoton: ["Monoton"],
        inconsolate: ["Inconsolata", "monospace"],
      },
      colors: {
        customPurple: "#906d7f",
        customBlue: "#74838c",
        footer: "#771444",
        about: "#E4D0C4",
      },
    },
  },
  plugins: [],
};
