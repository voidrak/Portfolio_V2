const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-color-bold": "#e2e8f0",
        "text-color-light": "#94a3b8",
        "bg-color": "#09182f",
        "first-accent-color": "#51d2b9",
      },
      fontFamily:{
        LockerRoom: ["LockerRoom","serif"], 
      },
      boxShadow:{'box-shadow':' 0px 60px 50px rgba(0, 0, 0, 0.748)'},
      fontSize:{ 'text-clamp': "clamp(3rem, 5vw, 96px)",},
      keyframes:{
        highlighter: {
          '0%':{transform:'scaleX(0)', opacity:0 , background:"transparent" },
          '100%':{transform: 'scaleX(1)', opacity:1,background:" linear-gradient(to right, #10B981, #6EE7B7)"}
        }
      },
      animation:{
        // animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state;

        'text-highlighter':'highlighter 1.5s ease-in-out 0.9s forwards'
      }
    },
  },
  plugins: [


    require('tailwind-scrollbar'),


    // rest of the code
    addVariablesForColors,

    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
