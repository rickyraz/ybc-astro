/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "blue-smooth-light": "#F9FBFF",
        "blue-brand-light": "#3D59A4",
        "blue-brand": "#0C1D5A",
        "light-gray": "#E3E3E3",
        "medium-gray": "#ECECEC",
      },
    },
  },
  plugins: [],
});
