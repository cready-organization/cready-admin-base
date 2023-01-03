/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-color': '#0469E3',
        'text-color': '#3F434A',
        'overlay-color': 'rgba(0, 0, 0, 0.5)',
        'blur-color': '#8A9099',
        'input-border-color': '#C4C4C4',
      },
      borderRadius: {
        default: '14px',
      },
      screens: {
        xs: '575px',
      }
    },
  },
  plugins: [],
};
