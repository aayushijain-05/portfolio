/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-from-top": "slideFromTop 1s ease-out",
        "slide-from-left": "slideFromLeft 1s ease-out",
        "slide-from-right": "slideFromRight 1s ease-out",
      },
      keyframes: {
        slideFromTop: {
          "0%": { transform: "translateY(-60%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-20%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },

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
