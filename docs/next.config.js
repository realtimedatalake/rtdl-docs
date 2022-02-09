const prod = process.env.NODE_ENV === "production"
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra({
    // Gavin, 20220208: Removed on move to Netlify
    basePath: '',
})
