module.exports = function(eleventyConfig) {
  /* These are the files Eleventy just moves, so that Parcel can do stuff with them*/
  eleventyConfig.addPassthroughCopy('_assets/js/');
  eleventyConfig.addPassthroughCopy('_assets/css/');
  return {
    dir: {
      output: 'temp/eleventy',
    },
  };
};
