/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d8361",
        "primary-a10": "#3d836110",
        "primary-a24": "#3d836124",
        "primary-a75": "#3d836175",
        "primary-a99": "#3d836199",
        secondary: "#F7F6DC",
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
