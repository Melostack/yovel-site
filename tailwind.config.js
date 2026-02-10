/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-black': '#080808',
                'gold-alchemist': '#D4AF37',
                'charcoal': '#121212',
                // Meraas Design System
                'meraas-bg': '#edeae1',
                'meraas-bg-alt': '#e5e2d9',
                'meraas-bg-dark': '#141714',
                'meraas-black': '#000000',
                'meraas-charcoal': '#2b2b2b',
                'meraas-gray': '#575656',
                'meraas-gray-light': '#b3b0a6',
                'meraas-green': '#3f4d3d',
                'meraas-green-light': '#4e6b4e',
                'meraas-gold': '#ab6b18',
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                // Meraas Design System
                'dm-sans': ['"DM Sans"', 'sans-serif'],
                'spectral': ['Spectral', 'serif'],
                'geist': ['Geist', 'sans-serif'],
                'fragment-mono': ['"Fragment Mono"', 'monospace'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
