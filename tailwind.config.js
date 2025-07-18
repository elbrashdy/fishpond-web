/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#69BFFC",
          100: "#5AB8FC",
          200: "#37A9FB",
          300: "#199DFB",
          400: "#058EF0",
          500: "#0479CE",
          600: "#0473C3",
          700: "#046DB9",
          800: "#0365AA",
          900: "#035FA0",
          950: "#035C9B"
        },
        background: {
          50: "#FFFFFF",
          100: "#FAFCFF",
          200: "#FAFCFF",
          300: "#F6F9FE",
          400: "#F6F9FE",
          500: "#F2F7FE",
          600: "#F1F6FE",
          700: "#F1F6FE",
          800: "#F1F6FE",
          900: "#ECF3FE",
          950: "#ECF3FE"
        },
        danger: {
          50: "#FBEBE9",
          100: "#F8DCD8",
          200: "#F2B8B1",
          300: "#EB9589",
          400: "#E47162",
          500: "#DD4B39",
          600: "#C03321",
          700: "#902719",
          800: "#601A10",
          900: "#300D08",
          950: "#160604"
        },
      }
    },
  },
  variants: {
    extend: {
      display: ['print'],
    },
  },
  plugins: [],
}
