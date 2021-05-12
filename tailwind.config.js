module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          mid: '#FBFBFB',
          deep: '#F8F8F8',
        },
        blue: {
          top: '#3CC7F2',
          mid: '#2BB7E7',
          bottom: '#139ED4',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/ui"),
    require('@tailwindcss/forms'),
  ],
}
