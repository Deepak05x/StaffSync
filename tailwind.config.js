/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "425px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
        extend: {
            screens: {
                ssm: "320px",
            },
            animation: {
                "loop-scroll-down": "loop-scroll-down 10s linear infinite",
                "loop-scroll-up": "loop-scroll-up 10s linear infinite",
            },
            keyframes: {
                "loop-scroll-down": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(-50%)" },
                },
                "loop-scroll-up": {
                    from: { transform: "translateY(-50%)" },
                    to: { transform: "translateY(0)" },
                },
            },
            colors: {
                light: "white",
                dark: "#1b1b1b",
                lightgrey: "#e6e4e4",
                lightblack: "#57636c",
            },
        },
    },
    plugins: [],
};
