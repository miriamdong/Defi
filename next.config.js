const withVideos = require("next-videos");

const sitemap = require("nextjs-sitemap-generator");
sitemap({
  baseUrl: "<your_website_base_url>",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "static/",
});
module.exports = withVideos();
