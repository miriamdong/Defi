const tailwindcss = require("tailwindcss");

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
  plugins: [
    require("postcss-import"),
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
  ],
});
