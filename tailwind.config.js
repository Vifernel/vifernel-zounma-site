module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: "#0a0a0a"
      },
      animation: {
        fade: "fadeIn 2s ease-in-out",
        slide: "slideUp 1.5s ease-in-out"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: { "0%": { transform: "translateY(20px)" }, "100%": { transform: "translateY(0)" } }
      }
    }
  },
  plugins: []
};
