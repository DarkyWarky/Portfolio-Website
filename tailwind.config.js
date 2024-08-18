/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 255, 255, 0.25)',
        '4xl': [
            '0 35px 35px rgba(255, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 255, 0, 0.15)'
        ]
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}