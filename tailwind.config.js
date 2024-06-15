/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs':'376px',
        'tablet': '900px',
        'lg': '1026px',
        'xl': '1281px',
      },
      colors: {
        primary: {
          50: '#CCC2F0',
          100: '#B8AFDA',
        },
        secondary: {
          50: '#F7F262',
        },
        tertiary: {
          50: '#D3EECD',
          100: '#C8D6C5',
          200: '#FBF7F4',
          300: '#D9D9D9',
        },
        alternate: {
          50: '#202023',
          100: '#2E2E32',
          200: '#363638',
        },
      },
      fontFamily: {
        takino: ['var(--font-takino)'],
      },
      animation: {
        blink: 'blink 9s infinite',
        wiggle: 'wiggle 500ms ease-in-out',
        'wiggle-reverse': 'wiggle-reverse 500ms ease-in-out',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 10%, 11%, 40%, 41%, 70%, 71%, 100% ': {
            '-webkit-transform': 'scaleX(1) scaleY(1)',
          },
          '10.5%, 40.5%, 70.5%': {
            '-webkit-transform': 'scaleX(1.3) scaleY(0.1)',
          },
        },
        wiggle: {
          "50%": { '-webkit-transform': "rotate(180deg)" },
          "100%": { '-webkit-transform': "rotate(180deg)" }
        },
        'wiggle-reverse': {
          "50%": { '-webkit-transform': "rotate(180deg)" },
          "100%": { '-webkit-transform': "rotate(180deg)" }
        },
        marquee: {
          '0%': { '-webkit-transform': 'translateX(0%)' },
          '100%': { '-webkit-transform': 'translateX(-100%)' },
        },
        marquee2: {
        '0%': { '-webkit-transform': 'translateX(100%)' },
        '100%': { '-webkit-transform': 'translateX(0%)' },
      },
      },
      fontSize: {
        '10xl': '10rem',
        '5xl': '5rem',
        '3xl': '1.9rem',
        '2.5xl': '2.5rem',
        '1.1xl': '1.15rem',
        '1.2xl':'1.2rem',
        '1.75xl': '1.75rem'
      },
      spacing: {
        0.9: '0.95rem',
        0.6:'0.6rem',
        0.5: '0.5rem'
      },
      height: {
        84: '21rem',
        104: '29rem',
        120: '32rem',
        100:'27.5rem',
        150: '33rem'
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
