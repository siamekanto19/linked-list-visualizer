module.exports = {
  content: [
    './src/*.vue',
    './src/*/*.vue',
    './src/*/*/*.vue',
    './*.html'
  ],
  safelist: [
    'bg-green-600'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
