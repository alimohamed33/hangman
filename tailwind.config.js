/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // keyboard
        keyboard: 'repeat(auto-fit, minmax(75px, 1fr))',
      },
      // background
      backgroundColor: {
        bgHSL: 'hsl(200, 100%, 75%)',
      },
    },
  },
  plugins: [],
};
