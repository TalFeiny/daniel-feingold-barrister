import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2744',
          dark: '#0f1a30',
          light: '#243055',
        },
        gold: {
          DEFAULT: '#b8943f',
          light: '#d4ab58',
        },
        cream: '#f8f4ee',
      },
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
        xs: '0.75rem',
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
        wide: '0.06em',
      },
    },
  },
  plugins: [],
}

export default config
