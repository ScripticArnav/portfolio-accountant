/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Dark mode configuration (choose your preferred approach)
  darkMode: 'media', // Recommended for automatic switching based on user preference
  // darkMode: 'class', // Option for manual control using the `dark` class
};
