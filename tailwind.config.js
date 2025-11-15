/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#8611FE',
        'purple-light': '#E684F8',
        'purple-gradient-start': '#135CFF',
        'purple-gradient-end': '#8611FE',
        'text-dark': '#3D315B',
        'text-secondary': 'rgba(0, 0, 0, 0.6)',
        'gray-light': '#F8F4F9',
        'gray-text': '#78777E',
        'success': '#10B981',
      },
      fontFamily: {
        'primary': ['Mulish', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
        'logo': ['Mochiy Pop One', 'sans-serif'],
      },
      borderRadius: {
        'xl': '44px',
      },
    },
  },
  plugins: [],
}

