import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E4E4E7",
        foreground: "#D4D4D8",
        brand: {
          "50": "#F5F5F7",
          "100": "#EBEBEF",
          "200": "#D7D7DF",
          "300": "#C3C3CF",
          "400": "#AFAFBF",
          "500": "#9B9BAF",
          "600": "#87879F",
          "700": "#73738F",
          "800": "#5F5F7F",
          "900": "#4B4B6F",
          "950": "#37375F",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
          active: "#9B9BAF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "shiny-text": "shiny-text 8s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      fontFamily:{
        ttW: "var(--ttw)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
