/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Exact primary from /client/lib/theme.ts
        brand: '#c8920a',

        // Light theme (from theme.ts lightVars)
        light: {
          bg:      '#f4f2ef',
          surface: '#edeae5',
          border:  '#d4ccc4',
          fg:      '#1c1714',
          muted:   '#6b6560',
          track:   '#cdc6be',
        },

        // Dark theme (from theme.ts darkVars)
        dark: {
          bg:      '#0a0a0a',
          surface: '#1a1a1a',
          border:  '#2a2a2a',
          fg:      '#ffffff',
          muted:   '#9ca3af',
          track:   '#2a2a2a',
        },

        // Macro ring colors — light mode (from DayPage.tsx)
        macro: {
          protein: '#d97b5a',
          carbs:   '#7aaa78',
          fat:     '#b08898',
        },

        danger: '#ef4444',
      },

      fontFamily: {
        sans: [
          'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif',
        ],
      },

      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8920a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
