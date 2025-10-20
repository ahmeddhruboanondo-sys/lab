/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0B0E14',
        offwhite: '#F7F8FA',
        neonTeal: '#00FFE0',
        royalBlue: '#3E7BFA',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      headline: ['Sora', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}