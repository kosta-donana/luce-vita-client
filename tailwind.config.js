/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#dce9fc',
          200: '#bbdef9',
          300: '#168aad',
          400: '#1a759f',
          500: '#1e6091',
          600: '#184e77',
        },
        'secondary': {
          100: '#eaf8da',
          200: '#d9ed92',
          300: '#b5e48c',
          400: '#99d98c',
          500: '#76c893',
          600: '#52b69a',
        },
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
    },
  },
  plugins: [],
}
