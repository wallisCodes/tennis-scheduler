/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            "sm": "576px"
        },
        width: {
            "9/20": "45%",
            "11/20": "55%"
        },
    }, 
  },
  plugins: [],
}

