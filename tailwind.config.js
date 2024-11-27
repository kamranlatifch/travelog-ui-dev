/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '4.375rem',
    },

    screens: {
      xs: '325px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      poppins: ['Poppins'],
      dmSans: ['DM Sans'],
    },
    extend: {
      colors: {
        primary: '#FCFCFD',
        secondary: '#3B71FE',
        tertiary: '#F4F5F6',
        emeraldGreen: '#58C27D',
        bluePeriwinkle: '#92A5EF',
        yellowStar: '#FFD166',
        skyBlue: '#8BC5E5',
        ashGray: '#23262F',
        blackBg: '#23262F',
        bgGray: '#E6E8EC',

        textPrimary: '#23262F',
        textPrimaryDark: '#353945',
        textSecondary: '#777E90',
        textBase: '#FCFCFD',

        textBase: '#FFFFFF',
      },
      borderColor: {
        borderGray: '#E6E8EC',
        borderBlack: '#23262F',
      },
      boxShadow: {
        [`soft`]: '-4px 4px 13px 0px rgba(0, 0, 0, 0.05)',
        cardShadow: '1px 12px 24px 0px rgba(0, 0, 0, 0.11)',
        primaryShadow: '0px 40px 64px -32px #0F0F0F1A',
        mdCardShadow: 'box-shadow: 0px 40px 64px -32px #0F0F0F1A',
      },

      backdropBlur: {
        32: '32px', // Add blur with a value of 32px
      },

      backgroundImage: {
        'signup-bg': "url('/src/assets/images/heroImage.png')",
        'signup-lg-bg': "url('/src/assets/images/hero1Image.png')",
        'custom-gradient':
          'linear-gradient(180deg, #F4F5F6 87.16%, rgba(244, 245, 246, 0) 137.55%)',
        'lg-hero-image-gradient':
          'linear-gradient(130.48deg, rgba(236, 248, 252, 0.84) 22.56%, rgba(236, 248, 252, 0) 69.73%)',

        'hero-gradiant':
          'linear-gradient(83.59deg, #FCFCFD 36.52%, rgba(252, 252, 253, 0.83) 98.8%)',

        'thunder-gradient':
          'radial-gradient(67.61% 50% at 50% 50%, rgba(109, 143, 151, 0.85) 0%, rgba(42, 69, 75, 0.85) 100%);',
        'card-gradient': 'linear-gradient(180deg, #557982 0%, #8BABB3 100%)',
      },
    },
  },
  plugins: [],
};
