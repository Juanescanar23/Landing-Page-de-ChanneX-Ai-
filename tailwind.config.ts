import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#060818",
        "ink-2": "#0b0e28",
        paper: "#f0f4ff",
        magenta: "#c026d3",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 56px rgba(0,0,0,.3), 0 0 40px rgba(192,38,211,.07)",
      },
    },
  },
  plugins: [],
};

export default config;
