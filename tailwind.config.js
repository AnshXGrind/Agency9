/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          alt: 'var(--bg-alt)',
          card: 'var(--bg-card)',
          navy: 'var(--bg-navy)',
          'navy-dark': 'var(--bg-navy-dark)',
        },
        text: {
          DEFAULT: 'var(--text)',
          mid: 'var(--text-mid)',
          muted: 'var(--text-muted)',
        },
        sage: {
          DEFAULT: 'var(--sage)',
          light: 'var(--sage-light)',
          dark: 'var(--sage-dark)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          dark: 'var(--gold-dark)',
        },
        terra: {
          DEFAULT: 'var(--terra)',
          dark: 'var(--terra-dark)',
        },
        steel: 'var(--steel)',
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        warm: '0 4px 12px var(--shadow-warm)',
        '3d': '0 20px 60px var(--shadow-3d)',
      }
    },
  },
  plugins: [],
}
