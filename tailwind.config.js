const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["CustomFont1", "sans-serif"],
        custom2: ["CustomFont2", "serif"],
        custom3: ["CustomFont3", "monospace"],
      },
      animation: {
        "skew-scroll": "skew-scroll 20s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
        "skew-scroll": {
          "0%": {
            transform: "rotateX(20deg) rotateZ(-20deg) skewX(20deg)",
          },
          "100%": {
            transform:
              "rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// // //tailwind.config.js
// // module.exports = {
// //   theme: {
// //     extend: {
//       animation: {
//         'skew-scroll': 'skew-scroll 20s linear infinite',
//       },
//       keyframes: {
//         'skew-scroll': {
//           '0%': {
//             transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)',
//           },
//           '100%': {
//             transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)',
//           },
//         },
//       },
//     },
//   },
// //   plugins: [],
// // };
