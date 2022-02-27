module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen*3/4": "calc(100vh * 3 / 4)",
        "screen*2/3": "calc(100vh * 2 / 3)",
        "screen/2": "calc(100vh / 2)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      grayscale: {
        50: '50%'
      }
    },
  },
  plugins: [],
}
