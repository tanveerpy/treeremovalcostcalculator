/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f2f8f2',
          100: '#e1ede2',
          200: '#c5dbc7',
          300: '#9dbda1',
          400: '#6f9774',
          500: '#4d7853',
          600: '#3a5f40',
          700: '#2f4c34',
          800: '#273e2b',
          900: '#213425',
          950: '#111c13',
        },
        gold: {
          400: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
