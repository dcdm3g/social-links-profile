import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['src/index.html'],
  theme: {
    colors: {
      black: '#141414',
      gray: '#333333',
      white: '#FFFFFF',
      'dark-gray': '#1F1F1F',
      'neon-green': '#C4F82A',
    },
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        card: 'min(24rem, calc(100vw - 3rem))'
      }
    },
  },
  plugins: [],
} satisfies Config
