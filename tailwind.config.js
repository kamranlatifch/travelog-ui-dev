/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: 'true',
      padding: '4.375rem',
    },
    screens: {
      sm: '430px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1600px',
    },
    fontFamily: {
      poppins: ['Poppins'],
      inter: ['Inter'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        purpleBg: '#5D50C6',
        orangeBg: '#FF5722',
        yellowBg: '#FACD49',
        cardBg: '#FFFFFF',
        subscribeBg: '#FACD4914',

        textPrimary: '#000000',
        textLight: '#EEEEEE',
        textPrimaryDark: '#191825',
        textPrimaryHigherRatio: '#191825BF',

        textPink: '#F85E9F',
        textOrange: '#FF5722',
        textLink: '#19182580',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderColor: {
        borderGray: '#E6E8EC',
        borderBlack: '#23262F',
      },
      boxShadow: {
        [`soft`]: '-4px 4px 13px 0px rgba(0, 0, 0, 0.05)',
        cardShadow: '0px 22.07px 13.35px 0px #0000000D',
        primaryShadow: '0px 40px 64px -32px #0F0F0F1A',
        mdCardShadow: 'box-shadow: 0px 40px 64px -32px #0F0F0F1A',
      },
      backdropBlur: {
        32: '32px',
      },

      backgroundImage: {
        'hero-bg': "url('/src/assets/images/HeroBg.png')",
        'testimonial-bg': "url('/src/assets/svgs/TestimonialBg.svg')",
        'testimonialXl-bg': "url('/src/assets/svgs/TestimonailXlBg.svg')",
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
