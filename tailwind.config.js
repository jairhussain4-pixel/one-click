/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        astro: {
          dark: '#0f0c20',
          purple: '#1a103c',
          gold: '#eab308',
          card: '#181335',
          border: '#2e2557'
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        domine: ['Domine', 'serif']
      }
    },
  },
  plugins: [],
}
