/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {  
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || 'https://v2-backend.herokuapp.com',
        collectionTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },

    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    {
      resolve: `gatsby-source-filesystem`, //Pull content/markdown from files
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    
  ],
  
}
