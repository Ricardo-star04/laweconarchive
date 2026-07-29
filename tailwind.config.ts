import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#27313b",
        muted: "#5d6975",
        border: "#d8e0e6",
        accent: "#17324d",
        institute: "#8c1515",
        signal: "#b83a4b",
        paper: "#f5f7f8",
        stanford: {
          red: "#8c1515",
          dark: "#820000",
          light: "#b83a4b"
        }
      },
      fontFamily: {
        serifCn: ["Iowan Old Style", "Georgia", "Noto Serif SC", "Source Han Serif SC", "Songti SC", "serif"],
        sansCn: ["Avenir Next", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
