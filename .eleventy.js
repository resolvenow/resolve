const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add RSS plugin (provides date formatting filter)
  eleventyConfig.addPlugin(pluginRss);

  return {
    templateFormats: ["html", "njk"],
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "_site",
    },
  };
};