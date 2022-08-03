module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk','sans-serif'],
      'inherit': ['inherit'],
      'mono': ['ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}