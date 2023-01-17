/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      spacing: {
        'header-height': 'var(--header-height)',
        'article-form-actions-height': 'var(--article-form-actions-height)',
      },
    },
  },
  plugins: [],
};
