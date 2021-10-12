module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
