/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Slate 950 - Deep Midnight
        foreground: "#F8FAFC",
        primary: {
          DEFAULT: "#38BDF8", // Sky Blue - Trust and Professionalism
          dark: "#0EA5E9",
        },
        slate: {
          800: "#1E293B",
          900: "#0F172A",
        },
        zinc: {
          800: "#27272A",
          900: "#18181B",
          950: "#0B0F1A",
        },
        accent: "#E2E8F0", // Silver/Platinum
        border: "rgba(255, 255, 255, 0.08)",
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
        }
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
