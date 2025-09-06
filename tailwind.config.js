/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
    "./src/**/*.{js,ts,jsx,tsx}", // If you use a /src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
