/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#ADD8E6',
      },
      animation: {
        'fadeIn': "fadeIn 2s ease-in forwards",
        'wiggle': 'wiggle 0.5s ease-in-out forwards',
        'unwiggle': 'unwiggle 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        wiggle: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(90deg)'},
        },
        unwiggle: {
          '0%': {transform: 'rotate(90deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
      },
      variants: {
        animation: ["motion-safe"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
