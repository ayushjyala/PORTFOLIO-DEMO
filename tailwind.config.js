/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e14",
        "bg-raised": "#10151d",
        "bg-raised-2": "#141b25",
        line: "#202836",
        text: "#e7edf3",
        muted: "#8a97a8",
        accent: "#00d2ff",
        "accent-2": "#7c5cff",
      },
      fontFamily: {
        head: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      maxWidth: {
        wrap: "1080px",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        terminal: "0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      keyframes: {
        blink: { "50%": { opacity: 0 } },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
