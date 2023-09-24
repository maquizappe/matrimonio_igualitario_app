/** @type {import('next').NextConfig} */
module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? '/matrimonio_igualitario_app' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/matrimonio_igualitario_app/' : '',
    trailingSlash: true, // Ensure trailing slashes are used for routes
    output: 'export',   
  };