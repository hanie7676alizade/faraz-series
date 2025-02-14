/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANSans", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["3.25rem", { lineHeight: "104px", fontWeight: "700" }],
        "heading-2": ["1.875rem", { lineHeight: "60px", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "48px", fontWeight: "500" }],
        "title-1": ["1.375rem", { lineHeight: "44px", fontWeight: "500" }],
        "title-2": ["1.25rem", { lineHeight: "40px", fontWeight: "700" }],
        "title-3": ["1.125rem", { lineHeight: "36px", fontWeight: "500" }],
        "title-4": ["1rem", { lineHeight: "32px", fontWeight: "700" }],
        "subtitle-1": ["0.875rem", { lineHeight: "36px", fontWeight: "500" }],
        "subtitle-2": ["1rem", { lineHeight: "32px", fontWeight: "500" }],
        "body-1": ["1rem", { lineHeight: "32px", fontWeight: "700" }],
        "body-2": ["1rem", { lineHeight: "32px", fontWeight: "500" }],
        "body-3": ["1rem", { lineHeight: "32px", fontWeight: "400" }],
        "body-4": ["0.875rem", { lineHeight: "28px", fontWeight: "500" }],
        "body-5": ["0.875rem", { lineHeight: "28px", fontWeight: "400" }],
        "body-6": ["0.875rem", { lineHeight: "28px", fontWeight: "300" }],
        "caption-1": ["0.75rem", { lineHeight: "19.2px", fontWeight: "500" }],
        "caption-2": ["0.75rem", { lineHeight: "19.2px", fontWeight: "400" }],
        "caption-3": ["0.75rem", { lineHeight: "19.2px", fontWeight: "300" }],
        "caption-4": ["0.625rem", { lineHeight: "16px", fontWeight: "500" }],
        "caption-5": ["0.625rem", { lineHeight: "16px", fontWeight: "400" }],
        "button-1": ["1rem", { lineHeight: "32px", fontWeight: "500" }],
        "button-2": ["0.875rem", { lineHeight: "28px", fontWeight: "500" }],
        "link-1": ["1rem", { lineHeight: "32px", fontWeight: "500" }],
        "link-2": ["0.875rem", { lineHeight: "28px", fontWeight: "500" }],
        "link-3": ["0.75rem", { lineHeight: "20px", fontWeight: "500" }],
        "timer-lg": ["1.25rem", { lineHeight: "2.5rem", fontWeight: "400" }],
        "timer-xl": ["2rem", { lineHeight: "4rem", fontWeight: "400" }],
      },
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.1)",
        md: "0 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "0 10px 20px rgba(0, 0, 0, 0.25)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-md": {
          textShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
        },
        ".text-shadow-lg": {
          textShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-xl": {
          textShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
