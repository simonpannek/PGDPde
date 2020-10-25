// Imports
const transforms = require("./transforms");
const collections = require("./collections");

// Shortcodes
const { FontAwesomeIcon } = require("./modules/fontawesome-svg");

module.exports = config => {

    // Data merge
    config.setDataDeepMerge(true);

    // Pass through
    config.addPassthroughCopy("src/assets/favicon/*");
    config.addPassthroughCopy("src/assets/img/*");
    config.addPassthroughCopy("src/assets/sound/*");

    // Layouts
    config.addLayoutAlias("default", "layouts/default.njk");

    // Transforms
    config.addTransform('purge-styles', transforms.purgeStyles);
    config.addTransform("minify", transforms.minify);

    // Collections
    config.addCollection("allSorted", collections.allSortedColl);

    // Shortcodes
    config.addNunjucksShortcode("FontAwesomeIcon", FontAwesomeIcon);

    return {
        dir: {
            input: "src",
            output: "build"
        },
        templateFormats: ["md", "njk", "html"],
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    }
}
