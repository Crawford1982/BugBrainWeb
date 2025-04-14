/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Scan HTML files in the root
    "./src/**/*.{html,js}", // Scan HTML/JS files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        // We'll add 'Inter' later if font setup works
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Match mockup colors
        gray: {
          '900': '#111827', // Dark background
          '800': '#1F2937', // Card/input background
          '700': '#374151', // Button/border
          '600': '#4B5563',
          '500': '#6B7280', // Placeholder/muted text
          '400': '#9CA3AF', // Body text / Links
          '300': '#D1D5DB',
        }
      },
      animation: {
        'ghost-float': 'ghost-float 0.8s ease-in-out infinite alternate',
      },
      keyframes: {
        'ghost-float': {
          '0%': { transform: 'translateY(0px) rotate(-2deg)' },
          '100%': { transform: 'translateY(-4px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
} 