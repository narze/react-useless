/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#BD34FE",
          "secondary": "#00D8FF",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#242424",
          "info": "#149DCA",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ]
  }
}
