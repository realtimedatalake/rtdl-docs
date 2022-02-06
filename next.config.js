const prod = process.env.NODE_ENV === "production"
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import

    // Gavin, 20220205: Start. Added for GitHub Pages compatibility. Comment out for dev builds
    basePath: '/rtdl-docs',
    assetPrefix: '/rtdl-docs/',
    //assetPrefix: prod ? '/rtdl-docs/' : '',
    // Gavin, 20220205: Start.
})
module.exports = withNextra()
