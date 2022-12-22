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
        'text-main-color': '#3F434A',
        'overlay-color': 'rgba(0, 0, 0, 0.5)',
        'blur-color': '#8A9099',
        'input-border-color': '#C4C4C4',
        'button-main-color': '#0469E3',
      },
      borderRadius: {
        default: '14px',
      }
    },
  },
  plugins: [],
};
