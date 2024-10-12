/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 6px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.09)',
      },
      colors: {
        "banorte-red": '#d82e34',
        "banorte-gray": '#656a6b'
      },
    },
  },
  plugins: [],
};
