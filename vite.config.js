/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Custom Brand Color Palette
      colors: {
        brand: {
          light: '#d1fae5',   // Very light green (for hover/focus rings)
          DEFAULT: '#10b981', // Main emerald green
          dark: '#059669',    // Darker green (for button hovers)
        }
      },
      // 2. Custom Font
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Replaces the default Tailwind font
      }
    },
  },
  plugins: [],
}