module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0985ac',
        secondary: '#044c62',
        greenish: '#01CDDF',
        skyBlue: '#01AEE5',
        borderBlue: '#459eba',
        lightBlue: '#cfdee1'
      },
      boxShadow: {
        rounded: '0 0 13px 1px rgba( 0, 0, 0, 0.2 )'
      },
      transitionProperty: {
        height: 'height'

      }

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
