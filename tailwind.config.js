/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "061818": "#061818",
        "0C7E7E": "#0C7E7E",
        "33C7C7": "#33C7C7",
        // section1 p
        "6B6B6B": "#6B6B6B",
        // gift card
        "7DD1D3": "#7DD1D3",
        "1F3C76": "#1F3C76",
        F44C4C: "#F44C4C",
        FFB019: "#FFB019",
        F2F9FD: "#F2F9FD",
        EDEDEE: "#EDEDEE",
        "57D4D4": "#57D4D4",
        515153: "#515153",
        "000E1F": "#000E1F",
        FFD380: "#FFD380",
        690811: "#690811",
        B37500: "#B37500",
        ECF6F6: "#ECF6F6",
        "05060F": "rgba(5, 6, 15, 0.32)",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        Nanum: ["Nanum Pen Script", "cursive"],
      },
    },
  },
  plugins: [],
};
