import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: "#05060a",
          900: "#0a0e18",
          850: "#101522",
          800: "#151c2b"
        },
        signal: {
          cyan: "#31d6ff",
          blue: "#4f7cff",
          violet: "#8a5cff",
          green: "#36d399",
          amber: "#f4bf50"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(79, 124, 255, 0.24)",
        "violet-glow": "0 0 48px rgba(138, 92, 255, 0.22)"
      },
      backgroundImage: {
        "lab-grid":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-signal":
          "radial-gradient(circle at 30% 20%, rgba(49, 214, 255, 0.15), transparent 28%), radial-gradient(circle at 75% 10%, rgba(138, 92, 255, 0.18), transparent 30%)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "18%": { opacity: "1" },
          "100%": { transform: "translateY(220%)", opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        scan: "scan 7s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
