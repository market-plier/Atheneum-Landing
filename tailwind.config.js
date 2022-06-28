module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(258.9deg, #18C8FF -6.52%, #933FFE 91.35%)',
        'background': 'radial-gradient(62.81% 133.94% at 17.27% 14.86%, #04127B 0%, #00001C 100%)',
        'green': 'radial-gradient(50% 50% at 50% 50%, rgba(0, 194, 78, 0.15) 0%, rgba(34, 208, 150, 0.15) 100%)',
        'sponsor': 'linear-gradient(258.9deg, rgba(24, 200, 255, 0.3) -6.52%, rgba(147, 63, 254, 0.3) 91.35%)',
      },
      colors: {
        'white': '#FFFFFF',
        'trans-white': '#FFFFFFCC',
        'blue': '#5BCEFF',

      },
    },
    variants: {
      extend: {},
    },
    corePlugins: {
      container: false
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            '@screen sm': {
              maxWidth: '320px',
            },
            '@screen md': {
              maxWidth: '640px',
            },
            '@screen lg': {
              maxWidth: '768px',
            },
            '@screen xl': {
              maxWidth: '1024px',
            },
          }
        })
      }
    ]
  }
};