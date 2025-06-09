/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'wp-green': '#00512d',
        'wp-light-green': '#004020',
        'wp-gray': '#eaeaea',
        'wp-text': '#333',
        'wp-light-text': '#6c757d',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'header': '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      height: {
        '80': '80px',
        '128': '32rem',
      },
      minHeight: {
        '80': '20rem',
        '96': '24rem',
      },
      transitionProperty: {
        'width': 'width',
      },
      width: {
        'auto': 'auto',
      },
      zIndex: {
        '60': '60',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    }
  },
  plugins: [],
} 