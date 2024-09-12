// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      // No additional customization needed here
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          "-webkit-overflow-scrolling": "touch", // Optional for smooth scrolling on mobile
          "scrollbar-width": "none", // Hide scrollbar for Firefox
          "-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Chrome, Safari, and Opera
          },
        },
      });
    },
  ],
};
