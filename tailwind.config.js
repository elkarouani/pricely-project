module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-gray': '#1B2124',
        'non-active-link': '#6E7191',
        'active-link': '#0C5DF7',
        'main-section-background': '#F2F5FD',
        'main-text': '#424242',
        'main-placeholder': '#484A4F',
        'main-input-border': '#CCCCCC',
        'main-cta': '#316EEA',
        'price-active': '#F2F5FD',
        'amount-active': '#00BC8B',
        'amount-non-active': '#404040',
        'grayscale-title-active': '#14142B',
      },
      fontFamily: {
        'primary': ['Montserrat'],
        'secondary': ['Poppins'] 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
