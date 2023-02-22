/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0055B8',
        'primary-light': '#D6EBFF',
        'secondary': '#FFCE00',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0055B8',
      'primary-light': '#D6EBFF',
      'secondary': '#FFCE00'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#0055B8',
      'primary-light': '#D6EBFF',
      'secondary': '#FFCE00',
    }),
    fontFamily: {
      'Righteous': ['Righteous'],
      'Poppins': ['Poppins'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins'],
      'body': ['Poppins'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}

