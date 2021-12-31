module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fb',
          100: '#eaf0f7',
          200: '#cbd9ec',
          300: '#abc2e0',
          400: '#6d95c9',
          500: '#2e67b2',
          600: '#295da0',
          700: '#234d86',
          800: '#1c3e6b',
          900: '#173257',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
