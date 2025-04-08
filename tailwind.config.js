import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#F5F7FA',
        'digital-sky': '#00B2FF',
        'neon-coral': '#FF6B6B',
      }
  },
  plugins: [],
}
}
