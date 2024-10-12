/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "banorte-red": '#d82e34',
        "banorte-gray": '#656a6b'
      },
    },
  },
  plugins: [],
};
