/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        // Change "blue" to something unique like "custom-blue"
        "custom-blue": "#3575E2"
      }
    },
  },
  plugins: [],
}
