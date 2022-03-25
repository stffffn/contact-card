module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        hv: { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};
