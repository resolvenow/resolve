module.exports = function (eleventyConfig) {
  // Copy assets through to _site
  eleventyConfig.addPassthroughCopy("src/assets");

  // Only process plain HTML
  eleventyConfig.setTemplateFormats(["html"]);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "_site",
    },
  };
};