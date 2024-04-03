/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xxsm': '450px',
      'xsm': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2F3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        primary: '#000300',
      },
      fontFamily: {
        'cursive': ['Cedarville Cursive', 'cursive'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'portfolio': ['Truculenta', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
