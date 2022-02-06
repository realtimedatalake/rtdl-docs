// Gavin, 20220205: Added for GitHub Pages compatibility
const prod = process.env.NODE_ENV === "production"
module.exports = {
  'process.env.BACKEND_URL': prod ? '/rtdl-docs' : ''
}
