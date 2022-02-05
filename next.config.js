const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra()

module.exports = {
    basePath: '/rtdl-docs',
    assetPrefix: '/rtdl-docs/',
}
