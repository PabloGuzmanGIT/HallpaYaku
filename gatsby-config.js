module.exports = {
  siteMetadata: {
    title: `HallpaYaku`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};