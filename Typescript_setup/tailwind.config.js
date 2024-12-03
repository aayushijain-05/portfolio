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
      backgroundImage: {
        "login-image": "url('./src/assets/bg.jpg')",
        "popup-image1": "url('./src/assets/popup11.jpg')",
        "popup-image2": "url('./src/assets/popup12.png')",
        "popup-image3": "url('./src/assets/popup3.jpg')",
        "popup-image4": "url('./src/assets/popup42.png')",
      },
      fontFamily: { sans: ["Poppins", "sans-serif"], poppins: ["Poppins", "sans-serif"] },
      colors: {
        customPurple: "#906d7f",
        customBlue: "#74838c",
        footer: "#771444",
        about:"#E4D0C4"
      },
    },
  },
  plugins: [],
};
