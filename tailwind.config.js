/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'blue-lite':'#E3F5FF',
        'blue-dark':'#60ABFB',
        'blue-extra-dark':'#5170FD',
        'black-layer-body':'#0000005c'
      },
      fontFamily:{
        oswald: ['Oswald', 'sans'],
        ubuntu:['Ubuntu','sans']
      },
      screens:{
        'xs':'160px',
        'xm':'300px'
      },
      gradientColorStops: theme => ({
        'custom-gradient-start': '#60ABFB', // Start color
        'custom-gradient-end': '#5170FD', // End color
      }),
    },
  },
  plugins: [],
}