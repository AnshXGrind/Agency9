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
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          accent: 'var(--bg-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          yellow: 'var(--accent-yellow)',
          lavender: 'var(--accent-lavender)',
        },
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(28, 25, 23, 0.04)',
        card: '0 8px 24px rgba(28, 25, 23, 0.06)',
      }
    },
  },
  plugins: [],
}
