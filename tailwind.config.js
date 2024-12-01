/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7C3AED',
        'custom-pink': '#DB2777',
        'custom-yellow': '#FACC15',
      },
    },
  },
  plugins: [],
};
