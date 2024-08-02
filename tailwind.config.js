module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        reactGallery: 'var(--react-gallery)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
