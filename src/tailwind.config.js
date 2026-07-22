/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // KAME brand palette — derived from the official logo
        navy: {
          DEFAULT: "#1C3064",
          50: "#EEF1F8",
          100: "#D7DEEE",
          200: "#AFC0DD",
          300: "#879FCC",
          400: "#5F7DBB",
          500: "#3C5CA0",
          600: "#2A447D",
          700: "#1C3064", // primary
          800: "#152650",
          900: "#0E1B3B",
          950: "#0A1428",
        },
        gold: {
          DEFAULT: "#F4A623",
          50: "#FEF6E9",
          100: "#FCE9C6",
          200: "#FAD48D",
          300: "#F7BE54",
          400: "#F4A623", // primary accent
          500: "#D98C0E",
          600: "#AB6C0B",
          700: "#7D4F08",
          800: "#4F3205",
          900: "#2A1B03",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          light: "#555555",
          faint: "#8A8A8A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FC",
          muted: "#F2F4F8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px -2px rgba(28,48,100,0.08), 0 8px 24px -8px rgba(28,48,100,0.10)",
        elevated: "0 8px 30px -8px rgba(28,48,100,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
