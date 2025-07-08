/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',      // Small screens (mobile)
      'md': '768px',      // Medium screens (tablet)
      'lg': '1024px',     // Large screens (laptops)
      'xl': '1280px',     // Extra large screens (desktops)
      '2xl': '1536px',    // 2X large screens
    },
    extend: {
      colors: {
        red: {
          600: '#E00',    // CompTIA red color
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}