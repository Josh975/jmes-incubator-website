module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Montserrat-Regular"', 'sans-serif', 'system-ui'],
      'bold': ['"Montserrat-SemiBold"', 'sans-serif', 'system-ui'],
      'heading': ['"Coolvetica-Regular"', 'sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'primary': '#C6B4FC',
        'secondary': '#704ff7',
        'accent': '#A1f0C4',
        'primary-purple': '#2E0F49',
        'text': '#000000'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}