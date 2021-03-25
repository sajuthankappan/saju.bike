const ampPlugin = require('@ampproject/eleventy-plugin-amp');

module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "ico", "md", "html", "css", "njk"
    ]);

    eleventyConfig.addPlugin(ampPlugin);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};