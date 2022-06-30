module.exports = {
  important: true,
  purge: ['./dist/*.html'],
  theme: {
    container: {
      padding: '50px',
    },
    screens: {
      'sm': '420px',

      'md': '640px',

      'xl': '1266px',

      '2xl': '1720px',
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(258.9deg, #18C8FF -6.52%, #933FFE 91.35%)',
        'background': 'radial-gradient(62.81% 133.94% at 17.27% 14.86%, #04127B 0%, #00001C 100%)',
        'green': 'radial-gradient(50% 50% at 50% 50%, rgba(0, 194, 78, 0.15) 0%, rgba(34, 208, 150, 0.15) 100%)',
        'sponsor': 'linear-gradient(258.9deg, rgba(24, 200, 255, 0.3) -6.52%, rgba(147, 63, 254, 0.3) 91.35%)',
        'orbit': 'url("images/background.svg")',
      },
      colors: {
        'white': '#FFFFFF',
        'trans-white': '#FFFFFFCC',
        'blue': '#5BCEFF',
      },
    },
  }
};