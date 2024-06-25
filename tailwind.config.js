/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-1": [
          "var(--font-size-5xl)",
          { lineHeight: "104px", fontWeight: "700" },
        ],
        "heading-2": [
          "var(--font-size-3xl)",
          { lineHeight: "60px", fontWeight: "700" },
        ],
        "heading-3": [
          "var(--font-size-2xl)",
          { lineHeight: "48px", fontWeight: "500" },
        ],
        "title-1": [
          "var(--font-size-xl)",
          { lineHeight: "44px", fontWeight: "500" },
        ],
        "title-2": [
          "var(--font-size-lg)",
          { lineHeight: "40px", fontWeight: "700" },
        ],
        "title-3": [
          "var(--font-size-md)",
          { lineHeight: "36px", fontWeight: "500" },
        ],
        "title-4": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "700" },
        ],
        "subtitle-1": [
          "var(--font-size-md)",
          { lineHeight: "36px", fontWeight: "500" },
        ],
        "subtitle-2": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "500" },
        ],
        "body-1": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "700" },
        ],
        "body-2": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "500" },
        ],
        "body-3": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "400" },
        ],
        "body-4": [
          "var(--font-size-sm)",
          { lineHeight: "28px", fontWeight: "500" },
        ],
        "body-5": [
          "var(--font-size-sm)",
          { lineHeight: "28px", fontWeight: "400" },
        ],
        "body-6": [
          "var(--font-size-sm)",
          { lineHeight: "28px", fontWeight: "300" },
        ],
        "caption-1": [
          "var(--font-size-2xs)",
          { lineHeight: "19.2px", fontWeight: "500" },
        ],
        "caption-2": [
          "var(--font-size-2xs)",
          { lineHeight: "19.2px", fontWeight: "400" },
        ],
        "caption-3": [
          "var(--font-size-2xs)",
          { lineHeight: "19.2px", fontWeight: "300" },
        ],
        "caption-4": [
          "var(--font-size-xs)",
          { lineHeight: "16px", fontWeight: "500" },
        ],
        "caption-5": [
          "var(--font-size-xs)",
          { lineHeight: "16px", fontWeight: "400" },
        ],
        "button-1": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "500" },
        ],
        "button-2": [
          "var(--font-size-sm)",
          { lineHeight: "28px", fontWeight: "500" },
        ],
        "link-1": [
          "var(--font-size-base)",
          { lineHeight: "32px", fontWeight: "500" },
        ],
        "link-2": [
          "var(--font-size-sm)",
          { lineHeight: "28px", fontWeight: "500" },
        ],
        "link-3": [
          "var(--font-size-2xs)",
          { lineHeight: "20px", fontWeight: "500" },
        ],
        "timer-lg": [
          "var(--font-size-lg)",
          { lineHeight: "2.5rem", fontWeight: "400" },
        ],
        "timer-xl": [
          "var(--font-size-4xl)",
          { lineHeight: "4rem", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};
