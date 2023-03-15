/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg-color': '#F9F9F9',
        'primary-color': '#0469E3',
        'primary-alpha-color': '#0469E31A',
        'text-color': '#3F434A',
        'grey-color': '#C6C9CC',
        'body-light-color': '#8A9099',
        'body-dark-color': '#595F69',
        'dark-red-color': '#F05C54',
        'dark-green-color': '#20A144',
        'dark-yellow-color': '#E6B823',
        'orange-color': '#FF965D',
        'overlay-color': 'rgba(0, 0, 0, 0.5)',
        'border-color': '#E8E9EB',
        'input-border-color': '#C4C4C4',
      },
      borderRadius: {
        default: '14px',
      },
      screens: {
        xxs: '375px',
        xs: '575px',
      },
    },
  },
  plugins: [],
};
