/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            light: "#FEFEFE",
            lightRed: "#FDF0F2",
            green: "#166C44",
            gray: "#7f7f7f",
            dark: "#303030",
            lightOrange: "#faf2e8",
         },
      },
   },
   plugins: [],
};
