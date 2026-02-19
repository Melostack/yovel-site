/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-black': '#050505',
                'gold-alchemist': '#D4AF37',
                'charcoal': '#121212',
                // Meraas Design System (Premium Overhaul)
                'meraas-bg': '#0A0A0B',
                'meraas-bg-alt': '#121212',
                'meraas-bg-dark': '#050505',
                'meraas-black': '#FFFFFF',
                'meraas-charcoal': '#F5F5F7',
                'meraas-gray': '#A1A1AA',
                'meraas-gray-light': '#3F3F46',
                'meraas-green': '#4ade80',
                'meraas-green-light': '#22c55e',
                'meraas-gold': '#fbbf24',
            },
            fontFamily: {
                // Meraas Design System
                'dm-sans': ['"DM Sans"', 'sans-serif'],
                'spectral': ['Spectral', 'serif'],
                'geist': ['Geist', 'sans-serif'],
                'fragment-mono': ['"Fragment Mono"', 'monospace'],
            },
            fontSize: {
                '12vw': '12vw',
                '8vw': '8vw',
                '10xl': '10rem',
            },
            letterSpacing: {
                'negative-tight': '-0.03em',
                'negative-tighter': '-0.05em',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'mask-reveal': 'maskReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                maskReveal: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}