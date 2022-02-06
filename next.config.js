const prod = process.env.NODE_ENV === "production"
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra({
    // Gavin, 20220205: Added for GitHub Pages compatibility.
    basePath: '/rtdl-docs',
})
