module.exports = {
  purge: {
    content: ['./index.html'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Lexend Deca', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        main: 'hsl(233, 47%, 7%)',
        card: 'hsl(244, 38%, 16%)',
        accent: 'hsl(277, 64%, 61%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
