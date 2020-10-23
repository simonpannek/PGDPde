const { PurgeCSS } = require("purgecss");

module.exports = async function purgeStyles(content, outputPath) {
    if (outputPath.endsWith(".css")) {
        const [{ css: result }] = await new PurgeCSS().purge({
            content: [
                'src/index.njk',
                'src/_includes/layouts/*.njk',
                'src/_includes/partials/*.njk',
                'src/assets/js/*.njk',
            ],
            css: [{ raw: content, extension: 'css' }]
        });
        return result;
    }
    return content;
};
