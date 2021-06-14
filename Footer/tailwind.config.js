module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkblue': '#262c50',
        'lightgray':'#c6cadd',
        'darkorange':'#e8b147',
        'white':'#ffffff'
      },
      fontSize:{
        below: ['12px'],
        basic: ['18px'],
        between: ['30px'],
        huge: ['48px'],


      },
      letterSpacing: {
        basic:['4px']
      },
      lineHeight: {
        xBasic:['36px']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
