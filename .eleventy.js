
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("figure", function(src, alt = "", caption = "") {
    return `<figure class="item-figure"><img src="${src}" alt="${alt}"/><figcaption>${caption}</figcaption></figure>`;
  });
};