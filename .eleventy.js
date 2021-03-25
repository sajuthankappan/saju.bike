module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "ico", "md", "html", "css", "njk"
    ]);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};