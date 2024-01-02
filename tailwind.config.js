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
        mytheme: {
          primary: '#c700ff',
          secondary: '#00b509',
          accent: '#00ddff',
          neutral: '#311e1d',
          'base-100': '#1f2623',
          info: '#00a4c4',
          success: '#378f00',
          warning: '#c8a600',
          error: '#ff0056',
        },
      },
    ],
    utils: true,
  },
}
