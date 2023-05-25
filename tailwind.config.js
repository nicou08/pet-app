/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        andika: ["Andika", "sans-serif"],
        cedarcursive: ["Cedarville Cursive", "cursive"],
        dancingScript: ["Dancing Script", "cursive"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
      textUnderlineOffset: {
        9: '2.1rem',
      }
    },
  },
  plugins: [],
};
