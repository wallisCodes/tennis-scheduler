/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rg-primary": "#c85a19",
        "rg-secondary": "#006039",
        "wmb-primary": "#006633",
        "wmb-secondary": "#4c2178",
        "uso-primary": "#00228d",
        "uso-secondary": "#fc7d00",
        "ao-primary": "#1b8cca" 
      },
    },
  },
  plugins: [],
}

