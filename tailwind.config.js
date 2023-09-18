/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Core Sans C','Causten', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

