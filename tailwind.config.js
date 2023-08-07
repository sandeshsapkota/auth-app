module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#436172',
          50: '#A3BCC9',
          100: '#97B2C2',
          200: '#7D9FB3',
          300: '#638CA3',
          400: '#52778C',
          500: '#436172',
          600: '#2E434F',
          700: '#19252B',
          800: '#050708',
          900: '#000000',
          950: '#000000'
        },
      }

    },
  },
  plugins: [],
}
