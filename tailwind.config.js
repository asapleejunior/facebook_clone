/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                facebook: {
                    blue: '#1877F2',
                    gray: '#F0F2F5',
                    dark: '#242526',
                    'dark-second': '#3A3B3C',
                    'text-primary': '#050505',
                    'text-secondary': '#65676B'
                }
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
            }
        },
    },
    plugins: [],
}
