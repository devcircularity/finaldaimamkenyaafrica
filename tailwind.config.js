/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in src
    "./src/app/**/*.{js,jsx,ts,tsx}", // Include app directory
    "./src/app/portfolio/projects/**/*.{js,jsx,ts,tsx}", // Include specific projects directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include global components
    "./pages/**/*.{js,jsx,ts,tsx}", // Include pages directory
  ],
  important: true,
  theme: {
    screens: {
      ...require('tailwindcss/defaultTheme').screens, // Default Tailwind breakpoints
      'mobile': { 'max': '1023px' }, // Custom breakpoint for mobile
      'desktop': { 'min': '1024px' }, // Custom breakpoint for desktop
    },
    extend: {
      colors: {
        lightcyan: '#84ffff', // Custom color
        gradientLeft: '#1e88e5', // Custom gradient left color
        gradientRight: '#8e24aa', // Custom gradient right color
        beige: '#F5F5DC', // Match your global background color
      },
      animation: {
        blinking: "blinking 10s linear infinite", // Animation for blinking effect
        scalepulse: "scalepulse 8s ease-in-out infinite", // Animation for scale pulse
        fadeIn: "fadeIn 5s", // Fade-in effect
        moveFade: "moveFade 2s linear infinite", // Move and fade effect
      },
      keyframes: {
        moveFade: {
          '0%': { opacity: "0", transform: "rotate(45deg) translate(-10px, -10px)" },
          '50%': { opacity: "1" },
          '100%': { opacity: "0", transform: "rotate(45deg) translate(10px, 10px)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
        blinking: {
          to: { "background-position": "400%" },
        },
        scalepulse: {
          '0%': { "scale": "1" },
          '50%': { "scale": "1.05" },
          '100%': { "scale": "1" },
        },
      },
      maxHeight: {
        'lg': '512px', // Large max height
        'md': '448px', // Medium max height
        'sm': '384px', // Small max height
      },
      padding: {
        '1/2': '50%', // Padding 50%
        full: '100%', // Full padding
      },
    },
  },
  plugins: [], // Remove the plugins if they are not required
};
