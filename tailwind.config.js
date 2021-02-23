module.exports = {
  purge: {
    content: ['./src/**/*.js'],
    options: {
      whitelistPatterns: [/uk-animation-/],
    },
  },
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
