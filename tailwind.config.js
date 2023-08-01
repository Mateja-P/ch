/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '380px' },
    },
    extend: {
      colors: {
        bgBlack:'#0B0B0B',
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        prBlue: '#1D72BF',
        pt: '#A0A0A0'
      }
    },
  },
  plugins: [],
}

