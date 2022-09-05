/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06818F",
        "primary-a10": "#06818F10",
        "primary-a24": "#06818F24",
        "primary-a75": "#06818F75",
        "primary-a99": "#06818F99",
        secondary: "#3d8361",
        "secondary-a10": "#3d836110",
        white: "#FFFEFF",
        success: "#22BF3E",
        "success-a10": "#22BF3E10",
        danger: "#FF5F56",
        "danger-a10": "#FF5F5610",
        warning: "#FEAD54",
        "warning-a10": "#FEAD5410",
        "warning-a24": "#FEAD5424",
        black: "#1E1E24",
        "black-a50": "#1E1E2470",
        grey: "#C4CECF",
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
