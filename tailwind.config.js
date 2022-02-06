module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        smartblue:'#0d6efd',
        littleGray:'#f5f6fa'
      },
      fontFamily:{
        sora:['Sora','sans-serif'],
        nunito:['Nunito','sans-seif'],
        fira:['Fira Sans','sans-serif'],
        hahmlet:['Hahmlet','serif']
      },
      screens:{
        'xsm':'350px'
      },
      spacing: {
        '92': '23.5rem',
        '76': '19.5rem',
        '75': '19rem',
        '104': '26rem',
        '120':'30rem',
        '100': '25.5rem',
        '58':'14.5rem',
        '34':'8.5rem',
        '38':'9.5rem',
        '160':'40rem'
      }
    },
  },
  plugins: [],
}
