import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0f0f11",
        lightCard: "#f8f8f8"
      }
    },
  },
  plugins: [],
};

export default config;

