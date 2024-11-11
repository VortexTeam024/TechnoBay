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
      },
      container: {
        center: true, // Centers the container by default
        padding: "1rem", // Adds padding to prevent content from touching the edges on small screens
        screens: {
          sm: "100%", // Full width on smaller screens
          md: "100%", // Full width on medium screens
          lg: "1024px",
          xl: "1200px", // Set container width to 1200px for xl screens and up
          "2xl": "1400px" // Keeps 1200px width for larger screens as well
        },
      },
    },
  },
  plugins: [],
}
