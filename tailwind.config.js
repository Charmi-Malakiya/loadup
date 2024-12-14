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
        'Poppins-Regular': ['Poppins_Regular', 'sans-serif'],
        'Poppins-Bold': ['Poppins_Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

