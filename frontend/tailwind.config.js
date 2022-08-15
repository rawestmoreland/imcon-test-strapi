module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#133e5dff',
        mediumBlue: '#1d5b8dff',
        lightBlue: '#247ab9ff',
        imconOrange: '#bd6719ff',
        imconYello: '#edb11cff',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
