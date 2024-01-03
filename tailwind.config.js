/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        myLight: {
          primary: '#0065ff',
          secondary: '#00aa00',
          accent: '#bd0000',
          neutral: '#111c0e',
          'base-100': '#fffbf4',
          info: '#00abff',
          success: '#008900',
          warning: '#d53800',
          error: '#e1003f',
        },
        myDark: {
          primary: '#2400ff',
          secondary: '#0000ff',
          accent: '#00deff',
          neutral: '#071009',
          'base-100': '#2a2a19',
          info: '#0083c9',
          success: '#00dc60',
          warning: '#ff7200',
          error: '#ff505f',
        },
      },
    ],
    darkTheme: 'myDark',
    base: true,
    utils: true,
  },
}
