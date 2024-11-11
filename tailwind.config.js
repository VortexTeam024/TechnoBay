/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/pages/*.{js,jsx,ts,tsx}",
    "./src/components/ui/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#218ACE",
        secondary: "#111111",
        overlay: "rgba(0, 0, 0, 0.6)",
        background: "#F1F1F1"
      },
      spacing: {
        heroSize: "calc(100vh - 120px)"
      }
    },
  },
  plugins: [],
}

