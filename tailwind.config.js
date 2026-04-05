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
          950: "#080808",
          900: "#0e0e0e",
          800: "#141414",
          700: "#1c1c1c",
          600: "#252525",
          500: "#333333",
          400: "#555555",
          300: "#888888",
          200: "#aaaaaa",
          100: "#cccccc",
          50: "#f0f0f0",
        },
        gold: {
          DEFAULT: "#b89d6a",
          light: "#d4bc8e",
          dark: "#8a7248",
          muted: "#6b5a3e",
        },
        cream: "#f7f3ec",
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
