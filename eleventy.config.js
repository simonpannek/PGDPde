// Imports
const collections = require("./collections");

module.exports = config => {

    // Data merge
    config.setDataDeepMerge(true);

    // Layouts
    config.addLayoutAlias("default", "layouts/default.njk");

    // Collections
    config.addCollection("allSorted", collections.allSortedColl);

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
