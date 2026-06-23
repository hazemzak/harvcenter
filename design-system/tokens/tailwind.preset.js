/**
 * Harv Design System — Tailwind preset
 *
 * Use in your project:
 *
 *   // tailwind.config.js
 *   const brand = require('./design-system/tokens/tailwind.preset.js')
 *   module.exports = {
 *     presets: [brand],
 *     content: ['./app/**\/*.{ts,tsx,mdx}'],
 *   }
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#D42027',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        ink: {
          100: '#E8EBF0',
          200: '#C8CED9',
          300: '#A3ACBC',
          400: '#7D8AA0',
          500: '#5A6784',
          600: '#3D4C6B',
          700: '#2B3A56',
          900: '#1A2744',
        },
        paper:     '#FAFAF8',
        surface:   '#FFFFFF',
        line: {
          DEFAULT: '#E5E7EB',
          soft:    '#F3F4F6',
        },
        success: { 100: '#E2F5EC', 600: '#1F9D6B' },
        warn:    { 100: '#FBF2DC', 600: '#C08415' },
        danger:  { 100: '#FAE4E2', 600: '#C8382F' },
        info:    { 100: '#FEE2E2', 600: '#D42027' },
        gold:    '#C9993A',
      },
      fontFamily: {
        sans:  ['Cairo', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['ui-serif', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em',  fontWeight: '600' }],
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em',  fontWeight: '600' }],
        'h1':         ['40px', { lineHeight: '48px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h2':         ['32px', { lineHeight: '40px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3':         ['24px', { lineHeight: '32px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h4':         ['20px', { lineHeight: '28px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg':    ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':    ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':    ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption':    ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'overline':   ['11px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '600' }],
        'code':       ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      borderRadius: {
        'none': '0px',
        'xs':   '4px',
        'sm':   '6px',
        'md':   '10px',
        'lg':   '16px',
        'xl':   '24px',
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(26, 39, 68, 0.04)',
        'sm': '0 1px 3px rgba(26, 39, 68, 0.06), 0 1px 2px rgba(26, 39, 68, 0.04)',
        'md': '0 4px 12px rgba(26, 39, 68, 0.06), 0 2px 4px rgba(26, 39, 68, 0.04)',
        'lg': '0 12px 32px rgba(26, 39, 68, 0.08), 0 4px 8px rgba(26, 39, 68, 0.04)',
        'xl': '0 24px 48px rgba(26, 39, 68, 0.10), 0 8px 16px rgba(26, 39, 68, 0.06)',
      },
      transitionDuration: {
        'xs': '80ms',
        'sm': '160ms',
        'md': '240ms',
        'lg': '480ms',
        'xl': '720ms',
      },
      transitionTimingFunction: {
        'out':      'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out':   'cubic-bezier(0.4, 0, 0.2, 1)',
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        'container':     '1200px',
        'reading':       '680px',
        'hero-subcopy':  '520px',
      },
      screens: {
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },
    },
  },
}
