module.exports = {
  siteMetadata: {
    title: `Stephen Greer`,
    description: `Full Stack Web Engineer`,
    author: `@s_greer18`,
    image: `/headshot.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stephen Greer's Website`,
        short_name: `Stephen Greer`,
        start_url: `/`,
        background_color: `#383e44`,
        theme_color: `#219cc1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
  ],
}
