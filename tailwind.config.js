/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Display'", "'Helvetica Neue'", "Arial", "sans-serif"],
        body: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Text'", "'Helvetica Neue'", "Arial", "sans-serif"],
        mono: ["'SF Mono'", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        ink: {
          950: "#ffffff",
          900: "#f5f5f7",
          800: "#e8e8ed",
          700: "#d2d2d7",
          600: "#aeaeb2",
          500: "#86868b",
          400: "#6e6e73",
          300: "#3d3d3f",
          200: "#2d2d2f",
          100: "#1d1d1f",
          50:  "#000000",
        },
        gold: {
          DEFAULT: "#0071e3",
          light: "#2997ff",
          dark: "#0077ed",
          muted: "#004494",
        },
        cream: "#1d1d1f",
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
