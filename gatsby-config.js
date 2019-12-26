require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "University Lutheran Chapel",
    author: "Dan Choiniere",
    description: "LCMS Congragation Located At The University Of Minnesota",
    keywords: `LCMS, Lutheran, Church, Congregation, Minnesota, University`,
    siteUrl: `https://www.ulcmn.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "Makefolio",
    //     short_name: "Makefolio",
    //     start_url: "/",
    //     background_color: "#2980b9",
    //     theme_color: "#2980b9",
    //     display: "standalone",
    //     icon: "src/images/gatsby-icon.png",
    //     orientation: "portrait"
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
