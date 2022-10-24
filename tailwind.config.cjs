/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1170px',
      xl: '1170px',
    },
    container: {
      padding: '1.5rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1170px',
        xl: '1170px',
        '2xl': '1170px',
      },
    },
    extend: {},
  },
  plugins: [],
}
