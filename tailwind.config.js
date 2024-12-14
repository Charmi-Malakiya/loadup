/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'RoundGothic': ['RoundGothic', 'sans-serif'],
        'RoundGothic-Text': ['RoundGothic_Text', 'sans-serif'],
        'RoundGothic-Bold': ['RoundGothic_Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

