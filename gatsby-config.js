module.exports = {
  pathPrefix: "/Portfolio",
  siteMetadata: {
    title: `YVETTE ZHANG`,
  },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      `gatsby-plugin-glamor`,
      `gatsby-transformer-remark`,
    ],
  }