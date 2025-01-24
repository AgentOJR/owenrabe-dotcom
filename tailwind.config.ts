/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' for OS-level preference
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Example custom colors you can tweak
        primary: "#6366F1", // Indigo-500
        secondary: "#EC4899", // Pink-500
        accent: "#FBBF24", // Amber-400
        darkBg: "#1F2937", // Gray-800
        darkFg: "#F3F4F6", // Gray-100
      },
      // Example custom gradients or other extended utilities
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
      },
    },
  },
  plugins: [],
};
