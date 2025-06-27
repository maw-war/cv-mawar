/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // WAJIB agar class 'dark' berfungsi
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan ini sesuai dengan struktur folder kamu
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
