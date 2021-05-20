const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = (ctx) => ({
  parser: ctx.parser ? "sugarss" : false,
  map: ctx.env === "development" ? ctx.map : false,
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-preset-env": {},
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: ctx.env === "production" ? {} : false,
  },
});
