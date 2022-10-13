module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },
      colors: {
        reactGallery: "var(--react-gallery)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
