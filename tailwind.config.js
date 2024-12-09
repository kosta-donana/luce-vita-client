/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
      'gray': {
        100: '#f7f7f7',
        200: '#ececec',
        300: '#d9d9d9',
        550: '#8c8c8c',
        600: '#838383',
        750: '#535353',
        800: '#3f3f3f',
      },
    },
    extend: {},
  },
  plugins: [],
}

