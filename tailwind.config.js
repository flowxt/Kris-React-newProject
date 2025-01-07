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
      },
    },
  },
  plugins: [require("daisyui")],
};

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
