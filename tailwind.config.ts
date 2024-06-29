import { Config } from 'tailwindcss'

export default {
  content: ['index.html'],
  theme: {
    colors: {
      black: '#141414',
      gray: '#333333',
      white: '#FFFFFF',
      'dark-gray': '#1F1F1F',
      'neon-green': '#C4F82A',
    },
    extend: {
      width: {
        card: 'min(24rem, calc(100vw - 3rem))'
      }
    },
  },
  plugins: [],
} satisfies Config
