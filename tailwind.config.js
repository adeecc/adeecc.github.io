module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      button: 'var(--color-button-text)',
      transparent: 'transparent',
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)'
      },
      secondary: {
        100: 'var(--color-secondary-washed-out)',
        900: 'var(--color-secondary)'
      },
      accent: {
        900: 'var(--color-accent)',
        800: 'var(--color-accent-hover)',
        100: 'var(--color-accent-disabled)'
      },
      black: '#000'
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      mono: ['Roboto Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
    },
    fontSize: {
      tiny: '0.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    keyframes: {
      slidein: {
        '0%': { transform: 'translateX(-16px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' }
      }
    },
    animation: {
      'slide-in': 'slidein 0.2s ease-out' 
    },
  },
  plugins: [require('@tailwindcss/typography')]
};
