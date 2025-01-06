import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6759FF",
        secondary: "#FC944D",
        lightGray: "#F9F9F9",
        black: {
          "100": "#D1D3D4",
          "150": "#50565F",
          "200": "#535763",
          "300": "#2F3643",
          "400": "#29303C",
          "500": "#1A1B2D",
          card: "#18202E",
        },
        accent: {
          "100": "#FFBC99",
          "200": "#CABDFF",
          "300": "#B1E5FC",
          "400": "#B5EBCD",
          "500": "#FFD88D",
          "600": "#CBEBA4",
          "700": "#FB9B9B",
          "800": "#F8B0ED",
          "900": "#AFC6FF",
        },
      },
      width: {
        desk: "1440px",
      },
      maxWidth: {
        desk: "1440px",
      },
      backgroundImage: {
        cta: "url(/background-cta.png)",
        bullets: "url(/bullets.png)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
