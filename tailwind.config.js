/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'graphik': ['Graphik', 'sans-serif'],
      },
      backgroundImage: {
        'bg_desktop_header': "url('./src/assets/images/bg_desktop_header.svg')",
      },
      colors: {
        'bluePrimary': '#252B42',
        'graySecondary': '#374754',
      },
    },
  },
  plugins: [],
}

