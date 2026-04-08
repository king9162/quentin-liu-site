/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "Helvetica Neue", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#111112",
          900: "#18181a",
          800: "#1f1f22",
          700: "#2a2a2e",
          600: "#363639",
          500: "#4a4a4e",
          400: "#6b6b70",
          300: "#909096",
          200: "#b8b8be",
          100: "#d4d4d8",
          50:  "#f2f2f4",
        },
        gold: {
          DEFAULT: "#c4a96e",
          light: "#ddc28d",
          dark: "#9a7d4a",
          muted: "#7a6040",
        },
        cream: "#f5f0e8",
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        silk: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
