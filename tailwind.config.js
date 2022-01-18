module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nasa_gray: {
          DEFAULT: "#aeb0b5",
          dark: "#323a45"
        },
        nasa_blue: {
          DEFAULT: "#105bd8",
          dark: '#061f4a'
        },
        nasa_red: {
          DEFAULT: "#dd361c",
          dark: "#99231b"
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}