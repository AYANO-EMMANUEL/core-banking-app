/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          primary: "#fff",
          neutral: "#a0a0a0",
        }
    },
  },
  plugins: [],
  
}
