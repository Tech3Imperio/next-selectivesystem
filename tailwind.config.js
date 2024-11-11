/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14ff72cb",
        secondary: "#e4e4e4",
      },
      fontFamily: {
        harmony: "harmony-regular",
        raleway: "raleway",
      },
    },
  },
  plugins: [],
};
