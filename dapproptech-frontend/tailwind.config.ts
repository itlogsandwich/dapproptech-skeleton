import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Config>{
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        'surface-dark': '#0D1321',
        'surface-light': '#1E2F55',
        main: '#FFFFFF',
        muted: '#D9D9D9',
        accent: {
          50: '#f0f4fd',
          100: '#e4eafb',
          200: '#cad7f7',
          300: '#a3bbf1',
          400: '#849CE2', 
          500: '#849CE2',
          600: '#425ec2',
          700: '#364da2',
          800: '#304184',
          900: '#2b386a',
          950: '#1d2342',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      }
    }
  },
}
