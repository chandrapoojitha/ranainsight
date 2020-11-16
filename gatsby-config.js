/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `RanaInsight`,
    description: `Rana Insight is a coaching and career skills counselling business based in the UK `,
    author:`@gatsbyjs`,
},
  plugins: [`gatsby-plugin-styled-components`,
            `gatsby-transformer-sharp`, 
            `gatsby-plugin-sharp`,
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `Blog`,
      path: `${__dirname}/src/Blog/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
  },
  {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
    endpoint: 'https://gmail.us2.list-manage.com/subscribe/post?u=2276bbf0cfc8ffa30e00d320b&amp;id=5da6812d9d',
    }
  }, 
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
    },

  }
],
}
