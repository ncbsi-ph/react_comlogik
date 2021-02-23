module.exports = {
  purge: {
    enabled: process.env.NODE_ENV.toString().trim() === 'production',
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
